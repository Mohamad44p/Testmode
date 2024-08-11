"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BackgroundColorChanger = () => {
  useEffect(() => {
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

    changeBodyBackgroundColor();
  }, []);

  return null;
};

export default BackgroundColorChanger;
