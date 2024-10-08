"use client";

import HeroSolutions from "@/components/Solutions/HeroSolutions";
import SolutionsCards from "@/components/Solutions/SolutionsCards";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from "../Banner";
import OurCredentials from "./OurCredentials";
import CardProjectssr from "../CaseSt/CardProjectssr";

gsap.registerPlugin(ScrollTrigger);

const changeBodyBackgroundColor = () => {
  gsap.utils
    .toArray<HTMLElement>(".section")
    .forEach((section: HTMLElement) => {
      const sectionElement = section as HTMLElement;
      const color = sectionElement.dataset.color;

      ScrollTrigger.create({
        trigger: sectionElement,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          if (color) {
            document.body.setAttribute("theme", color);
          }
        },
        onEnterBack: () => {
          if (color) {
            document.body.setAttribute("theme", color);
          }
        },
      });
    });
};

export default function AllSolutions() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    changeBodyBackgroundColor();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.clearMatchMedia();
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.update();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <main>
      <section data-color="Almond" className="section mt-12">
        <HeroSolutions />
      </section>
      <section data-color="light-blue" className="section">
        <SolutionsCards />
      </section>
      <section data-color="Almond" className="section">
        <CardProjectssr />
      </section>
      <section data-color="soft-orange" className="section">
        <OurCredentials />
      </section>
      <section>
        <Banner
          title="Explore Our Projects"
          ctaLink="/projects"
          ctaText="View Projects"
          description="We have worked on a wide range of projects, from small to large scale. We have the expertise to deliver the best solutions for your business."
        />
      </section>
    </main>
  );
}
