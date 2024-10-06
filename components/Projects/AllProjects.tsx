"use client";

import React, { useEffect } from "react";
import ProjectsHero from "./ProjectsHero";
import ProjectShowcase from "./ProjectShowcase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import Banner from "../Banner";

gsap.registerPlugin(ScrollTrigger);

const changeBodyBackgroundColor = () => {
  gsap.utils.toArray<HTMLElement>(".section").forEach((section: HTMLElement) => {
    const color = section.dataset.color;

    ScrollTrigger.create({
      trigger: section,
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

interface Project {
  id: number;
  title: {
    rendered: string;
  };
  link: string;
  custom_fields: {
    short_description: string;
    bg_color: string;
    text_color: string;
  };
  featured_image: string;
}

interface AllProjectsProps {
  initialProjects: Project[];
}

export default function AllProjects({ initialProjects }: AllProjectsProps) {
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
      <section data-color="Almond" className="section mt-12">
        <ProjectsHero />
        <ProjectShowcase initialProjects={initialProjects} />
      </section>
      <section className="section">
        <Banner
          ctaLink="/Contact"
          ctaText="Contact Us"
          description="We are always looking for kindred spirits in Health, Engineering, Design, Product, and Messaging."
          title="Ready to start a project?"
        />
      </section>
    </div>
  );
}