/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Register the ScrollTrigger plugin if it's not already registered
gsap.registerPlugin(ScrollTrigger);

const TestimonialAr = [
  {
    text: "Working with BeFoundOnline and their recommendation service has been a game-changer for our occupational prevention efforts. Our customers are extremely satisfied with the tool's impressive technical.",
    img: "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d3483253_EmekAltun.jpg",
    name: "Emek Altun",
  },
  {
    text: "The tool's impressive technical capabilities have been a game-changer for our prevention efforts. Our customers are extremely satisfied.",
    img: "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d3483253_EmekAltun.jpg",
    name: "John Doe",
  },
  {
    text: "BeFoundOnline's recommendation service has revolutionized our approach to occupational prevention. Our customers love it.",
    img: "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d3483253_EmekAltun.jpg",
    name: "Jane Smith",
  },
  {
    text: "Our customers are extremely satisfied with the tool's impressive technical capabilities and the service provided by BeFoundOnline.",
    img: "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d3483253_EmekAltun.jpg",
    name: "Alex Johnson",
  },
];

const NextArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

export default function Testimonial() {
  const sliderRef = useRef<Slider | null>(null);
  const infoRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => sliderRef.current?.slickNext()} />,
    prevArrow: <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />,
    appendDots: (
      dots:
        | string
        | number
        | bigint
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | Promise<React.AwaitedReactNode>
        | null
        | undefined
    ) => (
      <div style={{ position: "relative", bottom: "-50px" }}>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid",
          borderRadius: "50%",
          padding: "5px",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  useEffect(() => {
    infoRefs.current.forEach((ref) => {
      if (ref) {
        const text = ref.textContent || "";
        let clutter = "";

        text.split("").forEach((char) => {
          if (char === " ") clutter += `<span>&nbsp;</span>`;
          else clutter += `<span>${char}</span>`;
        });

        ref.innerHTML = clutter;

        gsap.set(".info span", { opacity: 0.1 });
        gsap.to(".info span", {
          opacity: 1,
          stagger: 0.03,
          ease: "Power4.easeOut",
          scrollTrigger: {
            trigger: ".slider-container",
            scrub: 2,
            start: "top 70%",
            end: "bottom 90%",
          },
        });
      }
    });
  }, []);

  return (
    <div
      data-color="white"
      className="flex flex-col slider-container justify-center items-center h-screen w-full"
    >
      <Slider ref={sliderRef} {...settings}>
        {TestimonialAr.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center border-2 border-black w-3/4 py-8 px-8 text-center"
          >
            <h3
              ref={(el) => {
                infoRefs.current[index] = el;
              }}
              className="info text-center font-semibold w-full"
            >
              {item.text}
            </h3>
            <div className="img w-24 h-24 rounded-full mt-10 overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={item.img}
                alt={item.name}
              />
            </div>
            <h1 className="mt-8">{item.name}</h1>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center items-center mt-4">
        <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
        <div className="mx-4">{/* Dots will be appended here */}</div>
        <NextArrow onClick={() => sliderRef.current?.slickNext()} />
      </div>
    </div>
  );
}
