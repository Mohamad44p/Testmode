"use client";

import AboutPage from "@/components/About/AboutPage";
import CircleSection from "@/components/About/CircleSection";
import Story from "@/components/About/Story";
import CenterAligner from "@/components/CenterAligner";
import OurTeam from "@/components/OurTeam";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import FAQ from "./FAQ";
import ClientLo from "./Clients/ClientLo";
import Banner from "../Banner";

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
export default function AboutUsPage() {
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
    <div className="main w-full mt-12">
      <section data-color="Almond" className="section">
        <AboutPage />
      </section>
      <section data-color="Blond" className="section">
        <CircleSection />
      </section>
      <section data-color="Almond" className="section">
        <Story />
      </section>
      <section data-color="RaisinBlack" className="section">
        <FAQ />
      </section>
      <section data-color="Almond" className="section">
        <OurTeam />
      </section>
      <section data-color="Almond" className="section">
        <ClientLo />
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
