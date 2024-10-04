"use client";

import React, { useEffect } from "react";
import HeroCareers from "./HeroCareers";
import WhyChoose from "./WhyChoose";
import JobOpportunities from "./JobOpportunities";
import OurTeam from "../ourTeam/OurTeam";
import Banner from "../Banner";
import Locations from "./Locations";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

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

export default function AllCareers() {
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
    <div>
      <section data-color="Almond">
        <HeroCareers />
      </section>
      <section data-color="Almond">
        <WhyChoose />
      </section>
      <section data-color="soft-orange">
        <Locations />
      </section>
      <section data-color="Almond">
        <JobOpportunities />
      </section>
      <section data-color="Almond">
        <OurTeam />
      </section>
      <Banner
        title="Explore Our Webinars"
        description="We host webinars on a variety of topics. Join us to learn more about the latest trends in the industry."
        ctaLink="/webinars"
        ctaText="View Webinars"
      />
    </div>
  );
}
