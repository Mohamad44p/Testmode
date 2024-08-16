"use client";

import React, { useEffect } from "react";
import Cursor from "./Cursor";
import HeroText from "@/components/Projects/HeroText";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

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

export default function AllProjectsClient({ children }: { children: React.ReactNode }) {
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
    <Cursor>
      <div>
        <section className="section" data-color="RaisinBlack">
          <HeroText />
        </section>
        <section
            data-color="Almond"
            className="section"
        >
            {children}
        </section>
      </div>
    </Cursor>
  );
}
