"use client";

import React, { useEffect, useState, useMemo, useCallback, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedText } from "../Storytelling";

gsap.registerPlugin(ScrollTrigger);

interface HeroData {
  title: string;
  video_url: string;
  images: string[];
}

interface HeroProps {
  heroData: HeroData;
}

const words = [
  "Strategize",
  "Influence",
  "Creativity",
  "Engagement",
  "Conversions",
  "Growth",
  "Lead Generation",
  "Useful",
  "Intuitive",
  "Empathetic",
];

const shuffleArray = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Hero: React.FC<HeroProps> = ({ heroData }) => {
  const [shuffledRows, setShuffledRows] = useState<string[][]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const memoizedShuffledWords = useMemo(() => shuffleArray(words), []);

  const createShuffledRows = useCallback(() => {
    return Array(4)
      .fill(null)
      .map(() => shuffleArray(memoizedShuffledWords));
  }, [memoizedShuffledWords]);

  useEffect(() => {
    setShuffledRows(createShuffledRows());

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
      .to(".introText", { opacity: 0 }, "a")
      .to(".slidesm", { ease: "power2", scale: 1 }, "a")
      .to(".lft", { ease: "power4", xPercent: -10 }, "b")
      .to(".rgt", { ease: "power4", xPercent: 10, stagger: 0.0002 }, "b")
      .to(".third-row", { ease: "power4", xPercent: -10 }, "b")
      .to(".fourth-row", { ease: "power4", xPercent: 10 }, "b");

    gsap.to(
      [".videos", ".slidesm", ".lft", ".rgt", ".third-row", ".fourth-row"],
      {
        scrollTrigger: {
          trigger: ".home",
          start: "bottom+=400px bottom",
          end: "bottom+=400px bottom",
          scrub: true,
        },
        opacity: 0.5,
      }
    );

    ScrollTrigger.matchMedia({
      "(max-width: 768px)": function () {
        gsap.to(".introText", {
          opacity: 0,
          scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      },
    });

    // Heading color change animation
    const headingTl = gsap.timeline({ repeat: -1 });
    headingTl
      .to(headingRef.current, { color: "white", duration: 0 })
      .to(headingRef.current, { color: "black", duration: 0, delay: 6 })
      .to(headingRef.current, { color: "white", duration: 0, delay: 3 });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      headingTl.kill();
    };
  }, [createShuffledRows]);

  const renderElements = useCallback((className: string, rowIndex: number) => (
    <div
      data-color="transparent"
      className={`row ${className} w-full flex items-center gap-3 pb-7 whitespace-nowrap`}
    >
      {shuffledRows[rowIndex]?.map((word, index) => (
        <div
          key={`${className}-${index}`}
          className="elem flex flex-col sm:flex-row items-center gap-2 sm:gap-5"
        >
          <h1 className="gradient-text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            {word}
          </h1>
          <div className="img w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] lg:w-[4.2rem] lg:h-[4.2rem]">
            <Image
              src={heroData.images[index % heroData.images.length]}
              alt={word}
              width={67}
              height={67}
              className="object-cover w-full rounded-full h-full"
            />
          </div>
        </div>
      ))}
    </div>
  ), [shuffledRows, heroData.images]);

  return (
    <div data-color="RaisinBlack" className="home section w-full h-[200vh] relative">
      <div className="w-full sticky top-0 left-0">
        <div className="btntext absolute mb-6 bottom-[5%] left-[3%] z-[4]">
          <h1 ref={headingRef}
            className="introText">
            <AnimatedText
              className="md:max-w-[30%] text-white max-w-[100%]"
              text={`We're more than a digital marketing agency—we're a growth partner. Our innovative strategies and advanced technology drive business success and boost your revenue in the digital world.`}
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
            playsInline
            controls={false}
            className="absolute w-full h-full object-cover"
            src={heroData.video_url}
          >
            <source src={heroData.video_url} type="video/mp4" />
          </video>
        </div>
        <div className="marquees w-full h-screen relative overflow-hidden">
          <div className="heading absolute top-[5%] left-1/2 -translate-x-1/2">
            <h1 className="text-xl font-regular text-center text-white">
              <AnimatedText
                className="max-w-[70%] mt-28 mx-auto hidden md:flex"
                text={`We Are Always Here To Help You Grow Your Business`}
              />
            </h1>
          </div>
          <div className="slidesm scale-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[35%] w-[90%]">
            {renderElements("lft", 0)}
            {renderElements("rgt", 1)}
            {renderElements("third-row", 2)}
            {renderElements("fourth-row", 3)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;