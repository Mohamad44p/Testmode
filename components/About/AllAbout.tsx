"use client";

import AboutPage from "@/components/About/AboutPage";
import CircleSection from "@/components/About/CircleSection";
import Story from "@/components/About/Story";
import CenterAligner from "@/components/CenterAligner";
import OurTeam from "@/components/ourTeam/OurTeam";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import FAQ from "./FAQ";
import ClientLo from "./Clients/ClientLo";
import Banner from "../Banner";
import OurTeamPage from "../ourTeam/OurTeamSsr";

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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.clearMatchMedia();
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.update();
      ScrollTrigger.refresh();
    }
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
        <OurTeamPage />
      </section>
      <section data-color="Almond" className="section">
        <ClientLo />
      </section>
      <section>
        <Banner
          title="Visit Our Latest Insights"
          description="We are always looking for new ways to help you grow your business. Check out our latest insights."
          ctaText="View Insights"
          ctaLink="/insights"
        />
      </section>
    </div>
  );
}
