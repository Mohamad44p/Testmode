"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import HeroTeam from "./HeroTeam";
import TeamMembersList from "./TeamMembersList";
import JoinUsBa from "./JoinUsBa";
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
export default function AllTeam() {
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
    <main className="mt-12">
      <section data-color="Blond" className="section">
        <HeroTeam />
      </section>
      <section data-color="Almond" className="section">
        <TeamMembersList />
      </section>
      <section data-color="Almond" className="section">
        <JoinUsBa />
      </section>
      <section className="section">
        <Banner
          title="Join Us"
          description="We are always looking for kindred spirits in Health, Engineering, Design, Product, and Messaging."
          ctaLink="/Careers"
          ctaText="Open Positions"
        />
      </section>
    </main>
  );
}
