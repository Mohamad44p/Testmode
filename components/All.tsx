"use client";

import React, { useEffect } from "react";
import HomeSection from "./Hero";
import CardsSec from "./CardsSec";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Horizontal from "./Horizontal";
import OurTeam from "./OurTeam";
import Testimonial from "./Testimonial";
import LastSec from "./LastSec";
import CardCase from "./CardCase";

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

export default function All() {
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
    <div className="main w-full">
      {" "}
      <HomeSection />
      <section data-color="cyan">
        <CardsSec />
      </section>
      <section data-color="salmon">
        <Horizontal />
      </section>
      <section data-color="white">
        <OurTeam />
      </section>
      <section data-color="white">
        <Testimonial />
      </section>
      <section data-color="green">
        <CardCase />
      </section>
      <section data-color="white">
        <LastSec />
      </section>
    </div>
  );
}
