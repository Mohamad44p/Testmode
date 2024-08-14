"use client";

import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import Testimonial from "../Testimonial";
import OurOffices from "./OurOffices";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
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

export default function AllContact() {
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
    <div>
      <section data-color="Almond" className="section">
        <ContactForm />
      </section>
      <section data-color="light-blue" className="section">
        <OurOffices />
      </section>
      <section data-color="Almond" className="section my-[10vh]">
        <Testimonial />
      </section>
      <section className="section mt-[10vh]">
        <Banner
          title="Explore our services"
          description="We offer a wide range of services to help you grow your business."
          ctaLink="/Solutions"
          ctaText="Explore Services"
        />
      </section>
    </div>
  );
}
