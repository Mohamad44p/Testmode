"use client";
import { projects } from "../components/CaseSt/data";
import Card from "../components/CaseSt/index";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { TextReveal } from "./ui/typography";
import BoxReveal from "./magicui/box-reveal";

export default function CardCase() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section data-color="white" className="section">
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
              url={project.link}
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              textColor={project.textColor || "black"}
            />
          );
        })}
      </main>
      <div className="w-fit px-5 mx-auto mt-7 md:px-10 hidden  rounded-2xl bg-[#2993C4] text-white md:flex py-5 border-[1px] border-[#014040]">
        <div className="texthover masker h-[1.5rem] overflow-hidden">
          <h1 className="text-lg md:text-xl">
            <TextReveal className="cursor-pointer">
              EXPLORE MORE PROJECTS
            </TextReveal>
          </h1>
        </div>
      </div>
    </section>
  );
}
