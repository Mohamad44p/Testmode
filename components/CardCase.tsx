"use client";

import { useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import BoxReveal from "../components/magicui/box-reveal";
import Card from "./CaseSt";
import { ArrowRightIcon } from "lucide-react";
import { TextReveal } from "./ui/typography";

interface Project {
  acf: {
    project_title: string;
    description: string;
    projectimage: string;
    color: string;
    textcolor: string;
  };
  link: string;
}

export default function CardCase() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://befoundonline.ps/wp-json/wp/v2/project?acf_format=standard")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Take only the first 5 projects
        setProjects(data.slice(0, 5));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects. Please try again later.");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <section data-color="Almond" className="section">
      <div className="w-fit mx-auto">
        <h1 className="text-center mb-12 mt-[30vh] text-4xl sm:text-6xl tracking-tight">
          <BoxReveal boxColor="#000">
            <p>Our Projects</p>
          </BoxReveal>
        </h1>
      </div>
      <main ref={container}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              title={project.acf.project_title}
              description={project.acf.description}
              src={project.acf.projectimage}
              url={project.link}
              color={project.acf.color}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              textColor={project.acf.textcolor}
            />
          );
        })}
      </main>
      <div className="mt-16">
        <div className="flex justify-center">
          <a
            href="/projects"
            className="flex bg-[#9AB453] text-white px-6 py-3 rounded-lg items-center text-lg font-medium transition-colors hover:bg-[#8CA348]"
          >
            <TextReveal>View all projects</TextReveal>
            <ArrowRightIcon className="w-6 h-6 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
