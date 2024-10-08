/* eslint-disable react/no-unescaped-entities */
"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Horizontal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !slidesRef.current) return;

    const slides = gsap.utils.toArray<HTMLElement>(slidesRef.current.children);

    const calculateTotalWidth = () => {
      return slides.reduce((acc, slide) => acc + slide.offsetWidth, 0);
    };

    let totalWidth = calculateTotalWidth();

    gsap.set(slidesRef.current, { width: totalWidth });

    const animation = gsap.to(slides, {
      x: () => `-${totalWidth - window.innerWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 0.1,
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
      },
    });

    const handleResize = () => {
      totalWidth = calculateTotalWidth();
      gsap.set(slidesRef.current, { width: totalWidth });
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    slides.forEach((slide) => {
      const content = slide.querySelector(".slide-content");
      const images = slide.querySelectorAll(".slide-image");
      const icons = slide.querySelectorAll(".slide-icon");

      gsap.fromTo(
        content,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: slide,
            containerAnimation: animation,
            start: "left center",
            end: "right center",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        images,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.5)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: slide,
            containerAnimation: animation,
            start: "left center",
            end: "right center",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        icons,
        { rotation: -45, opacity: 0 },
        {
          rotation: 0,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.5)",
          stagger: 0.05,
          scrollTrigger: {
            trigger: slide,
            containerAnimation: animation,
            start: "left center",
            end: "right center",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        gsap.to(window, {
          duration: 0.5,
          scrollTo: `+=${window.innerWidth}`,
          ease: "power2.inOut",
        });
      } else if (e.key === "ArrowLeft") {
        gsap.to(window, {
          duration: 0.5,
          scrollTo: `-=${window.innerWidth}`,
          ease: "power2.inOut",
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-color="Ming"
      className="real section w-full h-screen overflow-hidden"
    >
      <div ref={slidesRef} className="cont h-full relative flex">
        <div className="slide w-screen h-screen flex-shrink-0 flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
          <div className="slide-content text-center z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5.5rem] font-bold leading-tight">
              Real Talk,
              <br />
              Real Impact
            </h1>
          </div>
          <div className="slide-image absolute top-1/2 overflow-hidden right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 bg-green-500 -translate-y-1/2 rounded-full translate-x-1/2">
            <Image
              src="/horzantly/HorzantlImage1.jpg"
              alt="Impactful image 1"
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="slide w-screen h-screen flex-shrink-0 flex flex-col justify-center items-center pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 relative px-4 sm:px-6 lg:px-8">
          <div className="slide-image absolute top-1/2 overflow-hidden right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 bg-green-500 -translate-y-1/2 rounded-full translate-x-1/2">
            <Image
              src="/horzantly/HoezantlyImage3.jpg"
              alt="Impactful image 3"
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="slide-image w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60 bg-blue-500 overflow-hidden absolute -translate-y-1/2 top-0 z-[3] left-1/2 rounded-full">
            <Image
              src="https://images.unsplash.com/photo-1512646605205-78422b7c7896?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Portrait image"
              width={240}
              height={240}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="slide-image w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-blue-500 overflow-hidden absolute top-3/4 z-[3] left-1/4 rounded-full">
            <Image
              src="/horzantly/HorzantlImage2.jpg"
              alt="Impactful image 2"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="slide-content w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] text-center relative z-10">
            <h3 className="absolute -top-28 -left-4 sm:-left-8 md:-left-12 lg:-left-16 xl:-left-20 text-justify w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
              We're passionate about transforming brands and shaping the future
              of digital experiences. Every project we take on helps businesses
              thrive and grow. Here's how we've made an impact so far.
            </h3>
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 text-white leading-tight">
              + 5K <br /> Projects
            </h1>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[2rem] mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 leading-snug">
              Real businesses — real results — we've crafted digital solutions
              that drive success and deliver measurable outcomes.
            </h3>
          </div>
        </div>
        <div className="slide w-screen h-screen flex-shrink-0 flex flex-col justify-center items-center pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 relative px-4 sm:px-6 lg:px-8">
          <div className="slide-image w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 overflow-hidden absolute top-2/3 z-[3] left-[30%] rounded-full">
            <Image
              src="/horzantly/icons/Icon1.png"
              alt="Icon 1"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="slide-image w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60 overflow-hidden absolute -translate-y-1/2 top-1/4 z-[3] left-[45%] rounded-full">
            <Image
              src="/horzantly/icons/Icon2.png"
              alt="Icon 2"
              width={240}
              height={240}
              className="object-cover rotate-45 w-full h-full"
            />
          </div>
          <div className="slide-image absolute top-3/4 overflow-hidden right-0 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 xl:w-68 xl:h-68 -translate-y-1/2 rounded-full translate-x-1/2">
            <Image
              src="/horzantly/icons/Icon3.png"
              alt="Icon 3"
              width={272}
              height={272}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="slide-content w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] text-center relative z-10">
            <h3 className="absolute -top-32 -left-4 sm:-left-8 md:-left-12 lg:-left-16 xl:-left-20 text-justify w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
              We specialize in profit-boosting tactics that help businesses
              thrive. With tailored strategies and innovative solutions, we
              drive measurable growth for our clients, maximizing revenue and
              success.
            </h3>
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 text-white leading-tight">
              500+ Clients
            </h1>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[2rem] mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 leading-snug">
              Real results — real growth — our strategies have helped businesses
              increase profits across various industries.
            </h3>
          </div>
        </div>
        <div className="slide special w-screen h-screen flex-shrink-0 flex flex-col justify-center items-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative px-4 sm:px-6 lg:px-8">
          <div className="slide-image w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-80 xl:h-80 overflow-hidden absolute bottom-0 translate-y-1/2 -translate-x-1/4 z-[3] left-1/4 rounded-full opacity-1 disappear">
            <Image
              src="https://images.unsplash.com/photo-1716907997192-5c9fcfcd8bbe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team member 1"
              width={320}
              height={320}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="slide-image w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-52 xl:h-52 overflow-hidden absolute -translate-y-1/2 top-0 z-[3] left-[25%] rounded-full disappear">
            <Image
              src="https://images.unsplash.com/photo-1716793165476-37ad6394472e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team  member 2"
              width={208}
              height={208}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="slide-image absolute top-[20%] overflow-hidden right-[7%] w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-80 xl:h-80 -translate-y-1/2 rounded-full translate-x-1/2 disappear">
            <Image
              src="https://images.unsplash.com/photo-1653580483678-f91fdd2abece?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team member 3"
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="slide-content w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] text-center relative z-10">
            <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[10rem] pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 text-white leading-tight">
              +20
            </h1>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[3rem] mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 leading-snug">
              Global & Diverse Team.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
