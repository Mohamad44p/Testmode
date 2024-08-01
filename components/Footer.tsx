"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import GibberishText from "./ui/GibberishText";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import Magnetic from "./ui/Magnetic";

export default function Footer() {
  const footerH1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (footerH1Ref.current) {
      const text = footerH1Ref.current.textContent || "";
      let clutter = "";

      text.split("").forEach((char) => {
        if (char === " ") clutter += `<span>&nbsp;</span>`;
        else clutter += `<span>${char}</span>`;
      });

      footerH1Ref.current.innerHTML = clutter;

      gsap.from(".footertext h1 span", {
        opacity: 0,
        stagger: 0.3,
        ease: "Power4.easeOut",
        scrollTrigger: {
          trigger: ".footer",
          scrub: 1,
          start: "70% 70%",
          end: "70% 90%",
        },
      });
    }
  }, []);

  return (
    <div data-color="black" className="footer section w-full h-screen">
      <div className="top w-full h-[50%] flex flex-col md:flex-row justify-between px-4 sm:px-10 py-4 sm:py-10 text-sm sm:text-xl font-semibold leading-6 sm:leading-10">
        <div className="left mb-4 md:mb-0">
          <h1>
            <GibberishText text="Home" className="cursor-pointer" />
          </h1>
          <h1>
            <GibberishText text="About" className="cursor-pointer" />
          </h1>
          <h1>
            <GibberishText text="Services" className="cursor-pointer" />
          </h1>
          <h1>
            <GibberishText text="Contact" className="cursor-pointer" />
          </h1>
        </div>
        <div className="mid text-lg sm:text-2xl mb-4 md:mb-0">
          <h1>
            Join our mailing list for <br className="hidden sm:block" />
            the latest updates.
          </h1>
        </div>
        <div className="right text-end">
          <h1>
            <GibberishText text="Blog" className="cursor-pointer" />
          </h1>
          <h1>
            <GibberishText text="Resources" className="cursor-pointer" />
          </h1>
          <h1>
            <GibberishText text="Careers" className="cursor-pointer" />
          </h1>
          <h1>
            <GibberishText text="Privacy Policy" className="cursor-pointer" />
          </h1>
          <h1>
            <GibberishText text="Terms of Use" className="cursor-pointer" />
          </h1>
        </div>
      </div>
      <div className="bottom w-full sticky bottom-0">
        <div className="footertext w-full relative overflow-hidden">
          <h1
            ref={footerH1Ref}
            className="w-full h-fit hidden md:flex text-4xl sm:text-[10rem] my-10 sm:my-28 tracking-tighter sm:-tracking-[2rem] leading-none"
          >
            B e {"  "} F o u n d {"  "} O n l i n e
          </h1>
          <div className="cover w-full h-16 sm:h-[7rem] px-4 sm:px-10 flex flex-col sm:flex-row justify-between items-center border-white border-t-2 bg-black absolute bottom-0">
            <div className="fleft flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-5 text-xs sm:text-[.9rem]">
              <h1 className="font-light border-b-2 border-white">
                Privacy Policy
              </h1>
              <h1 className="font-light border-b-2 border-white">
                Terms of Use
              </h1>
              <h1 className="font-light border-b-2 border-white">Trust</h1>
            </div>
            <div className="fmid mt-2 sm:mt-0">
              <h1 className="text-xs sm:text-[.8rem] font-light">
                © 2024 BeFoundOnline. All rights reserved.
              </h1>
            </div>
            <div className="fright flex items-center justify-center gap-x-32 text-xl sm:text-2xl mt-2 sm:mt-0">
              <Magnetic>
                <SiInstagram />
              </Magnetic>
              <Magnetic>
                <SiLinkedin />
              </Magnetic>
              <Magnetic>
                <SiGithub />
              </Magnetic>
              <Magnetic>
                <SiFacebook />
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
