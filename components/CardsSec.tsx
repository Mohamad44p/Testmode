"use client";

import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { AnimatedText } from "./Storytelling";
import GibberishText from "./ui/GibberishText";
import { RoughNotation } from "react-rough-notation";
import { useInView } from "framer-motion";

const cardConfigs = [
  {
    className: "no1",
    background: "#000",
    color: "#fff",
    title: "Driven by Purpose",
    text: "We believe technology can dramatically improve the experience of managing health, and — when crafted with empathy, intention, and expertise — impact lives at scale.",
    svgPath: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M45.9998 10H31.9998L19.7271 26L31.9998 56L59.9998 26L45.9998 10Z"
          fill="currentColor"
        ></path>
        <path
          d="M18 10H46L60 26L32 56L4 26L18 10Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M44.2726 26L31.9998 56L19.7271 26L31.9998 10L44.2726 26Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M4 26H60"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
  },
  {
    className: "no2",
    background: "#000",
    color: "#fff",
    title: "Custom Products",
    text: "We build mobile and web-based apps, platforms, and infrastructure fitted to your needs. We have an open solutions framework, so we work to fit your business, not the other way around.",
    svgPath: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M49.0005 54C52.8665 54 56.0005 50.866 56.0005 47C56.0005 43.134 52.8665 40 49.0005 40C45.1345 40 42.0005 43.134 42.0005 47C42.0005 50.866 45.1345 54 49.0005 54Z"
          fill="currentColor"
        ></path>
        <path
          opacity="0.2"
          d="M15 24C18.866 24 22 20.866 22 17C22 13.134 18.866 10 15 10C11.134 10 8 13.134 8 17C8 20.866 11.134 24 15 24Z"
          fill="currentColor"
        ></path>
        <path
          d="M49.0005 54C52.8665 54 56.0005 50.866 56.0005 47C56.0005 43.134 52.8665 40 49.0005 40C45.1345 40 42.0005 43.134 42.0005 47C42.0005 50.866 45.1345 54 49.0005 54Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M49.0006 40L49.0002 29.9703C49.0001 26.7878 47.7358 23.7358 45.4855 21.4855L36 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M36 22V12H46"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M15 24C18.866 24 22 20.866 22 17C22 13.134 18.866 10 15 10C11.134 10 8 13.134 8 17C8 20.866 11.134 24 15 24Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M15 24L15.0004 34.0297C15.0005 37.2122 16.2648 40.2642 18.5151 42.5145L28.0006 52"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M28.0003 42V52H18.0003"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
  },
  {
    className: "no3",
    background: "#000",
    color: "#fff",
    title: "Partnerships",
    text: "We work with payers, providers, and pharma to help internal teams through ground-up builds, product optimizations, and streamlining data/analytics.",
    svgPath: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M50 38.2155L40.8007 47.4147C40.5565 47.659 40.2532 47.8358 39.9204 47.928C39.5875 48.0201 39.2365 48.0246 38.9014 47.9408L24.4122 44.3185C24.1404 44.2506 23.886 44.1263 23.6653 43.9537L10 33.268L18.1436 17.9475L30.9736 14.2071C31.4319 14.0735 31.9229 14.1082 32.3578 14.3051L41 18.2155H35.8284C35.5658 18.2155 35.3057 18.2672 35.0631 18.3677C34.8204 18.4682 34.5999 18.6155 34.4142 18.8012L24.6306 28.5848C24.428 28.7875 24.2713 29.0313 24.1711 29.2997C24.0709 29.5682 24.0295 29.855 24.0498 30.1408C24.0702 30.4267 24.1517 30.7048 24.2888 30.9564C24.426 31.208 24.6156 31.4271 24.8448 31.5991L26.2 32.6155C27.5848 33.654 29.269 34.2155 31 34.2155C32.731 34.2155 34.4152 33.654 35.8 32.6155L39 30.2155L50 38.2155Z"
          fill="currentColor"
        ></path>
        <path
          d="M60.1794 30.4462L54 33.5359L46 18.2154L52.2423 15.0942C52.7113 14.8597 53.2536 14.8188 53.7525 14.9802C54.2514 15.1416 54.6669 15.4925 54.9096 15.9573L61.0578 27.7316C61.1808 27.967 61.2556 28.2246 61.2779 28.4892C61.3002 28.7539 61.2696 29.0204 61.1878 29.2702C61.106 29.52 60.9749 29.7481 60.801 29.9461C60.6273 30.1443 60.4135 30.3064 60.1794 30.4462Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M8.356 21.1813L12 28.2154L20.4 43.6632L8.356 21.1813Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M46 18.2155L39 30.2155L31 34.2155C29.269 34.2155 27.5848 33.654 26.2 32.6155L24.8432 31.5991C24.6149 31.4271 24.4258 31.208 24.2887 30.9564C24.1516 30.7048 24.0701 30.4267 24.0497 30.1408C24.0294 29.855 24.0708 29.5682 24.171 29.2997C24.2712 29.0313 24.4279 28.7875 24.6305 28.5848L34.4142 18.8012C34.5999 18.6155 34.8204 18.4682 35.0631 18.3677C35.3057 18.2672 35.5658 18.2155 35.8284 18.2155H41L32.3578 14.3051C31.9229 14.1082 31.4319 14.0735 30.9736 14.2071L18.1436 17.9475L10 33.268L23.6653 43.9537C23.886 44.1263 24.1404 44.2506 24.4122 44.3185L38.9014 47.9408C39.2365 48.0246 39.5875 48.0201 39.9204 47.928C40.2532 47.8358 40.5565 47.659 40.8007 47.4147L50 38.2155V30.4462Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
  },
  {
    className: "no4",
    background: "#000",
    color: "#fff",
    title: "Client-Centric",
    text: "Our clients come first, and we take pride in our reputation for communication, transparency, and partnership.",
    svgPath: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M49 56H15C14.4477 56 14 55.5523 14 55V13C14 12.4477 14.4477 12 15 12H49C49.5523 12 50 12.4477 50 13V55C50 55.5523 49.5523 56 49 56Z"
          fill="currentColor"
        ></path>
        <path
          d="M49 56H15C14.4477 56 14 55.5523 14 55V13C14 12.4477 14.4477 12 15 12H49C49.5523 12 50 12.4477 50 13V55C50 55.5523 49.5523 56 49 56Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14 23H50"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14 33H50"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14 43H50"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
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
  }, []);

  return (
    <div
      data-color="cyan"
      className="craft section justify-between items-start w-full flex md:flex-row flex-col gap-10 px-10 relative"
    >
      <div ref={ref} className="ltext section w-[40%] sticky -top-10 left-0">
        <p className="text-2xl hidden md:flex font-light leading-[2rem] pt-10">
          <RoughNotation
            type="underline"
            color="#000"
            animate
            animationDelay={900}
            strokeWidth={2}
            show={inView}
          >
            Be Found Online is a custom health software developer founded on the
            belief that technology can transform healthcare to put people first.
            We put humanity back at the center of healthcare by simplifying
            complexity, accelerating capacity, and improving outcomes.
          </RoughNotation>
        </p>
        <h1 className="text-[4.5rem] leading-[6rem]">
          We Craft Human-Centric
          <AnimatedText text={"Health Software"} />
        </h1>
        <div className="w-fit px-10 hidden md:flex py-5 border-[1px] border-black">
          <div className="texthover masker h-[1.5rem] overflow-hidden">
            <h1 className="text-xl">
              <GibberishText className="cursor-pointer" text="OUR SOLUTIONS" />
            </h1>
          </div>
        </div>
      </div>
      <div className="cards md:w-1/2 w-full py-10">
        <div className="cardlist pt-[38.59rem] pb-[22.09rem]">
          {cardConfigs.map((config, index) => (
            <div
              key={index}
              className={`card ${config.className} border-[2px] border-black w-[30rem] py-5 px-5 h-[15rem] flex justify-between gap-10 mb-10`}
            >
              <div className="cardelem w-[18.75rem]">
                <h1 className="text-xl font-semibold">{config.title}</h1>
                <p className="pt-5 text-l">{config.text}</p>
              </div>
              <div className="logo w-[5rem]">{config.svgPath}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
