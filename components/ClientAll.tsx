"use client";

import React, { useEffect } from "react";
import HomeSection from "./Hero/Hero";
import CardsSec from "./CardsSec";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Horizontal from "./Horizontal";
import OurTeam from "./ourTeam/OurTeam";
import Testimonial from "./Testimonial";
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

export default function ClientAll({children , ourTeam , Herossr , BlogHome}:{
    children: React.ReactNode;
    ourTeam: React.ReactNode;
    Herossr: React.ReactNode;
    BlogHome: React.ReactNode;
}) {
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
      {Herossr}
      <section data-color="white">
        <CardsSec />
      </section>
      <section data-color="Ming">
        <Horizontal />
      </section>
      <section data-color="white">
        {ourTeam}
      </section>
      <section data-color="white">
        <Testimonial />
      </section>
      <section data-color="white">
        {children}
      </section>
      <section data-color="white">
        {BlogHome}
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
