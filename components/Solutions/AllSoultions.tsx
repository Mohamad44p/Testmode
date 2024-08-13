"use client";

import HeroSolutions from "@/components/Solutions/HeroSolutions";
import SolutionsCards from "@/components/Solutions/SolutionsCards";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from "../Banner";
import WhatWeBuild from "./WhatWeBuild";
import OurCredentials from "./OurCredentials";

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
  }, []);

  return (
    <main>
      <section data-color="Almond" className="section">
        <HeroSolutions />
      </section>
      <section data-color="light-blue" className="section">
        <SolutionsCards />
      </section>
      <section data-color="Almond" className="section">
        <WhatWeBuild />
      </section>
      <section data-color="soft-orange" className="section">
        <OurCredentials />
      </section>
      <section>
        <Banner
          title="Come Build a Better Future with Us."
          ctaLink="/contact"
          ctaText="LET'S TALK"
          description="Explore how Significo's partnership can advance your digital experience and unleash your technology development."
        />
      </section>
    </main>
  );
}
