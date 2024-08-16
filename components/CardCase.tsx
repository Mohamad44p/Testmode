"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import BoxReveal from "../components/magicui/box-reveal";
import Card from "./CaseSt";
import { ArrowRightIcon } from "lucide-react";
import { TextReveal } from "./ui/typography";

export default function CardCase({ projects }: { projects: any[] }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

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
      <div>
        <div className="flex justify-center">
          <a
            href="/projects"
            className="flex bg-[#9AB453] text-white p-5 items-center text-lg font-medium text-primary"
          >
            <TextReveal>View all projects</TextReveal>
            <ArrowRightIcon className="w-6 h-6 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
