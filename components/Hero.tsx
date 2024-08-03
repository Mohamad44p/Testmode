/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedText } from "./Storytelling";

gsap.registerPlugin(ScrollTrigger);

const words = [
  {
    text: "empathetic",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png",
  },
  {
    text: "intuitive",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png",
  },
  {
    text: "useful",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png",
  },
  {
    text: "empathetic",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png",
  },
  {
    text: "intuitive",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png",
  },
  {
    text: "useful",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png",
  },
  {
    text: "empathetic",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png",
  },
  {
    text: "useful",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png",
  },
  {
    text: "useful",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png",
  },
  {
    text: "intuitive",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png",
  },
  {
    text: "useful",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png",
  },
  {
    text: "intuitive",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png",
  },
  {
    text: "empathetic",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png",
  },
];

const HomeSection = () => {
  useEffect(() => {
    gsap.set(".slidesm", { scale: 5 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home",
        scrub: 1,
        start: "top top",
        end: "bottom bottom",
      },
    });

    tl.to(".videos", { "--clip": "0%", ease: "power2" }, "a")
      .to(".slidesm", { ease: "power2", scale: 1 }, "a")
      .to(".lft", { ease: "power4", xPercent: -10 }, "b")
      .to(".rgt", { ease: "power4", xPercent: 10, stagger: 0.0002 }, "b")
      .to(".third-row", { ease: "power4", xPercent: -10 }, "b")
      .to(".fourth-row", { ease: "power4", xPercent: 10 }, "b");
  }, []);

  const renderElements = (classNameName: any) => (
    <div
      data-color="transparent"
      className={`row ${classNameName} w-full flex items-center gap-3 pb-7 whitespace-nowrap`}
    >
      {words.map((word, index) => (
        <div key={index} className="elem flex items-center gap-5">
          <h1 className="text-5xl font-semibold">{word.text}</h1>
          <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
            <img
              className="object-cover w-full h-full"
              src={word.imgSrc}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div data-color="black" className="home section w-full pb-20 h-[200vh] relative">
      <div className="w-full sticky top-0 left-0">
        <div className="btntext absolute bottom-[5%] left-[3%] z-[4]">
          <h1>
            <AnimatedText
              className="hidden md:flex max-w-[30%]"
              text={`We’re more than a digital marketing agency—we’re a growth partner. Our innovative strategies and advanced technology drive business success and boost your revenue in the digital world.`}
            />
          </h1>
        </div>
        <div
          style={{ "--clip": "100%" } as React.CSSProperties}
          className="videos z-[3] w-full h-screen absolute top-0 left-0 overflow-hidden"
        >
          <video
            muted
            loop
            autoPlay
            className="absolute w-full h-full object-cover"
            src="https://cdn.significo.com/videos/significo-main-hero.mp4"
          ></video>
        </div>
        <div className="marquees w-full h-screen relative overflow-hidden">
          <div className="heading absolute top-[5%] left-1/2 -translate-x-1/2">
            <h1 className="text-xl font-regular text-center">
              <AnimatedText
                className="max-w-[70%] mx-auto hidden md:flex"
                text={`Crafting a new paradigm of healthcare one that is`}
              />
            </h1>
          </div>
          <div className="slidesm scale-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[35%] w-[90%]">
            {renderElements("lft")}
            {renderElements("rgt")}
            {renderElements("third-row")}
            {renderElements("fourth-row")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
