"use client";
import { projects } from "../components/CaseSt/data";
import Card from "../components/CaseSt/index";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export default function CardCase() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section data-color="black" className="section">
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
            />
          );
        })}
      </main>
    </section>
  );
}
