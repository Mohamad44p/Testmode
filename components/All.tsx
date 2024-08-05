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
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    changeBodyBackgroundColor();

    return () => {
      lenis.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <div className="main w-full">
      <HomeSection />
      <section className="section" data-color="cyan">
        <CardsSec />
      </section>
      <section className="section" data-color="salmon">
        <Horizontal />
      </section>
      <section className="section" data-color="white">
        <OurTeam />
      </section>
      <section className="section" data-color="white">
        <Testimonial />
      </section>
      <section className="section" data-color="green">
        <CardCase />
      </section>
      <section className="section" data-color="white">
        <LastSec />
      </section>
    </div>
  );
}
