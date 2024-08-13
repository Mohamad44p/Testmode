"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useInView } from "framer-motion";
import { TbBrandPagekit, TbPalette, TbSeo } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
import { TextReveal } from "../ui/typography";
import BoxReveal from "../magicui/box-reveal";

gsap.registerPlugin(ScrollTrigger);

interface CardConfig {
  className: string;
  title: string;
  text: string;
  icon: React.ElementType;
  background?: string;
  color?: string;
}

const cardConfigs: CardConfig[] = [
  {
    className: "no1",
    title: "SEO & Lead Generation",
    text: "Drive organic traffic, improve search rankings, and convert leads into loyal customers with our comprehensive solutions tailored to your business.",
    icon: TbSeo,
    background: "#000",
    color: "#aedee0",
  },
  {
    className: "no2",
    title: "UI/UX Interactive",
    text: "We craft immersive digital experiences with sleek designs and user-friendly interfaces, enhancing engagement and satisfaction for your audience.",
    icon: TbPalette,
    background: "#000",
    color: "#aedee0",
  },
  {
    className: "no3",
    title: "Content Marketing",
    text: "We craft captivating narratives and deliver strategic content to captivate your audience, spark conversations, and drive impactful results for your brand.",
    icon: TbBrandPagekit,
    background: "#000",
    color: "#aedee0",
  },
  {
    className: "no4",
    title: "Branding & Creative Media",
    text: "Transforming visions into compelling stories and striking visuals that define and amplify your brand's unique identity and market presence.",
    icon: TbPalette,
    background: "#000",
    color: "#aedee0",
  },
];

export default function SolutionsCards() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false });

  useLayoutEffect(() => {
    cardConfigs.forEach(({ className, background, color }) => {
      gsap.to(`.${className}`, {
        backgroundColor: background,
        color: color,
        scrollTrigger: {
          scroller: "body",
          trigger: `.${className}`,
          start: "-10% 35%",
          end: "10% bottom",
          scrub: 0.5,
        },
      });
    });

    gsap.fromTo(
      ".OP",
      { opacity: 1 },
      {
        opacity: 0.1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".OP",
          start: "bottom+=2000px bottom",
          end: "bottom+=2000px bottom",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <div
      data-color="light-blue"
      className="craft section justify-between items-start w-full flex flex-col md:flex-row gap-10 px-5 md:px-10 relative"
    >
      <div
        ref={ref}
        className="ltext section w-full md:w-[40%] sticky top-10 left-0"
      >
        <h1 className="text-2xl mt-9 OP hidden md:flex md:text-[2.5rem] leading-[3rem] md:leading-[6rem]">
          We craft digital marketing and tech solutions that drive profit
          growth.
        </h1>
        <div className="w-fit OP px-5 md:px-10 hidden  rounded-2xl bg-transparent text-black md:flex py-5 border-[1px] border-[#000]">
          <div className="texthover masker h-[1.5rem] overflow-hidden">
            <Link href="/Solutions">
              <h1 className="text-lg md:text-xl">
                <TextReveal className="cursor-pointer">
                  EXPLORE OUR SOLUTIONS
                </TextReveal>
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="cards w-full md:w-1/2 py-5 md:py-10">
        <BoxReveal>
          <h1 className="text-3xl md:hidden flex font-bold leading-8 mt-12">
            Our Company Services
          </h1>
        </BoxReveal>
        <div className="cardlist pt-[4rem] md:pt-[38.59rem] pb-[10rem] md:pb-[22.09rem] flex flex-col items-end">
          {cardConfigs.map((config, index) => (
            <div
              key={index}
              className={`card ${config.className} rounded-xl border-[2px] border-black w-full md:w-[30rem] py-5 px-5 h-auto md:h-[15rem] flex flex-col md:flex-row justify-between gap-5 md:gap-10 mb-5 md:mb-10`}
            >
              <div className="cardelem w-full md:w-[18.75rem]">
                <h1 className="text-lg md:text-xl font-semibold">
                  {config.title}
                </h1>
                <p className="pt-2 md:pt-5 text-base md:text-l">
                  {config.text}
                </p>
              </div>
              <div className="logo w-[3rem] md:w-[5rem]">
                {React.createElement(config.icon, { size: "100%" })}
              </div>
            </div>
          ))}
        </div>
        <div className="w-fit bg-transparent px-5 md:px-10 mx-auto flex md:hidden py-5 border-[1px] rounded-2xl  text-black border-[#000]">
          <div className="texthover masker h-[1.5rem] overflow-hidden">
            <h1 className="text-lg md:text-xl">
              <TextReveal className="cursor-pointer">
                EXPLORE OUR SOLUTIONS
              </TextReveal>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
