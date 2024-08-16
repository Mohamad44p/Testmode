"use client";

import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { AnimatedText } from "./Storytelling";
import GibberishText from "./ui/GibberishText";
import { RoughNotation } from "react-rough-notation";
import { useInView } from "framer-motion";
import { TextReveal } from "./ui/typography";
import Image from "next/image";
import BoxReveal from "./magicui/box-reveal";
import Link from "next/link";
import { TbSeo, TbPalette, TbBrandGoogleAnalytics, TbShoppingCart, TbChalkboard, TbCode } from 'react-icons/tb'
import { MdContentPaste } from 'react-icons/md'
import { FaChartLine } from 'react-icons/fa'
const cardConfigs = [
  {
    className: "no1",
    background: "#014040",
    color: "#fff",
    title: "SEO & Lead Generation",
    text: "Drive organic traffic, improve search rankings, and convert leads into loyal customers with our comprehensive solutions tailored to your business.",
    svgPath: (
      <TbSeo className="w-12 h-12" />
    ),
  },
  {
    className: "no2",
    background: "#014040",
    color: "#fff",
    title: "UI/UX Interactive",
    text: "We craft immersive digital experiences with sleek designs and user-friendly interfaces, enhancing engagement and satisfaction for your audience.",
    svgPath: <TbPalette className="w-12 h-12" />,
  },
  {
    className: "no3",
    background: "#014040",
    color: "#fff",
    title: "Content Marketing",
    text: "We craft captivating narratives and deliver strategic content to captivate your audience, spark conversations, and drive impactful results for your brand.",
    svgPath: (
      <MdContentPaste className="w-12 h-12" />
    ),
  },
  {
    className: "no4",
    background: "#014040",
    color: "#fff",
    title: "Branding & Creative Media",
    text: "Transforming visions into compelling stories and striking visuals that define and amplify your brand's unique identity and market presence.",
    svgPath: (
      <TbBrandGoogleAnalytics className="w-12 h-12" />
    ),
  },
  {
    className: "no5",
    background: "#014040",
    color: "#fff",
    title: "Digital Strategy and Consulting",
    text: "Crafting Revenue-Driven Strategies to Propel Your Business Forward, Leveraging Data Insights and Innovation for Sustainable Growth.",
    svgPath: <FaChartLine className="w-12 h-12" />,
  },
  {
    className: "no6",
    background: "#014040",
    color: "#fff",
    title: "E-commerce Solutions",
    text: "Streamlined online stores designed for seamless customer experiences, enhanced conversions, and scalable growth.",
    svgPath: <TbShoppingCart className="w-12 h-12" />,
  },
  {
    className: "no7",
    background: "#014040",
    color: "#fff",
    title: "Digital Training and Workshops",
    text: "Transforming Teams into Digital Experts with Customized Learning Experiences and Practical Strategies for Success.",
    svgPath: <TbChalkboard className="w-12 h-12" />,
  },
  {
    className: "no8",
    background: "#014040",
    color: "#fff",
    title: "Software Development",
    text: "Transforming Ideas into Powerful Solutions, Tailored to Your Needs for Seamless Performance and Efficiency.",
    svgPath: <TbCode className="w-12 h-12" />,
  },
];

export default function CardsSec() {
  const ref = useRef(null);
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
          scrub: 1,
        },
      });
    });

    gsap.fromTo(
      ".OP",
      { opacity: 1 },
      {
        opacity: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: ".OP",
          start: "bottom+=3000px bottom",
          end: "bottom+=3000px bottom",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div
      data-color="Almond"
      className="craft section justify-between items-start w-full flex flex-col md:flex-row gap-10 px-5 md:px-10 relative"
    >
      <div
        ref={ref}
        className="ltext section w-full md:w-[40%] sticky top-10 left-0"
      >
        <p className="text-lg md:text-xl hidden md:flex font-light leading-[1.5rem] md:leading-[2rem] pt-5 md:pt-10">
          <RoughNotation
            type="underline"
            color="#000"
            animate
            animationDelay={900}
            strokeWidth={2}
            show={inView}
          >
            Be Found Online is a digital marketing agency that conducts proven
            marketing strategies and cutting-edge technology empower businesses
            and drive sales. <br /> With our talented team, we push the
            boundaries by solving complex problems, delivering tailored
            solutions that exceed expectations and engage audiences.
          </RoughNotation>
        </p>
        <h1 className="text-2xl OP hidden md:flex md:text-[2.5rem] leading-[3rem] md:leading-[6rem]">
          We craft digital marketing and tech solutions that drive profit
          growth.
        </h1>
        <div className="w-fit OP px-5 md:px-10 hidden  rounded-2xl bg-[#014040] text-white md:flex py-5 border-[1px] border-[#014040]">
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
        <div className="cardlist pt-[4rem] md:pt-[38.59rem] pb-[10rem] md:pb-[22.09rem]">
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
              <div className="logo w-[3rem] md:w-[5rem]">{config.svgPath}</div>
            </div>
          ))}
        </div>
        <div className="w-fit px-5 md:px-10 mx-auto flex md:hidden py-5 border-[1px] rounded-2xl bg-[#014040] text-white border-[#014040]">
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
