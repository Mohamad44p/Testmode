"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardsSec from "./CardsSec";
import Horizontal from "./Horizontal";
import Testimonial from "./Testimonial";
import Banner from "./Banner";



gsap.registerPlugin(ScrollTrigger);


const changeBodyBackgroundColor = (sections: HTMLElement[]) => {
  sections.forEach((section: HTMLElement) => {
    const color = section.dataset.color;

    ScrollTrigger.create({
      trigger: section,
      start: "top 50%",
      end: "bottom 50%",
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

export default function ClientAll({
  children,
  ourTeam,
  Herossr,
  BlogHome,
}: {
  children: React.ReactNode;
  ourTeam: React.ReactNode;
  Herossr: React.ReactNode;
  BlogHome: React.ReactNode;
}) {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const sections = document.querySelectorAll<HTMLElement>('.section');
    sectionsRef.current = Array.from(sections);
    changeBodyBackgroundColor(sectionsRef.current);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.clearMatchMedia();
      ScrollTrigger.clearScrollMemory();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="main w-full">
      <section className="section" data-color="RaisinBlack">
        {Herossr}
      </section>
      <section className="section" data-color="white">
        <CardsSec />
      </section>
      <section className="section" data-color="Ming">
        <Horizontal />
      </section>
      <section className="section" data-color="white">
        {ourTeam}
      </section>
      <section className="section" data-color="white">
        <Testimonial />
      </section>
      <section className="section" data-color="white">
        {children}
      </section>
      <section className="section" data-color="white">
        {BlogHome}
      </section>
      <section className="section" data-color="white">
        <Banner
          title="Come Build a Better Future with Us."
          description="Let Be Found Online help you enhance your digital experience and unlock new technology development opportunities. Together, we’ll create innovative solutions that propel your brand forward."
          ctaText="LET'S TALK"
          ctaLink="/contact"
        />
      </section>
    </div>
  );
}