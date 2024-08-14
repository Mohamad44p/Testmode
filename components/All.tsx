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
import Banner from "./Banner";

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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.clearMatchMedia();
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.update();
      ScrollTrigger.refresh();
    }
  }, []);

  return (
    <div className="main w-full">
      {" "}
      <HomeSection />
      <section data-color="white">
        <CardsSec />
      </section>
      <section data-color="Ming">
        <Horizontal />
      </section>
      <section data-color="white">
        <OurTeam />
      </section>
      <section data-color="white">
        <Testimonial />
      </section>
      <section data-color="white">
        <CardCase />
      </section>
      <section data-color="white">
        <LastSec />
      </section>
      <section>
        <Banner
          title="Come Build a Better Future with Us."
          description="Explore how Significo's partnership can advance your digital experience and unleash your technology development."
          ctaText="LET'S TALK"
          ctaLink="/contact"
        />
      </section>
    </div>
  );
}
