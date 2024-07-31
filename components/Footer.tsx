"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

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
      <div className="top w-full h-[50%] flex justify-between px-10 py-10 text-xl font-semibold leading-10">
        <div className="left">
          <h1>Home</h1>
          <h1>Solutions</h1>
          <h1>About</h1>
          <h1>Team</h1>
        </div>
        <div className="mid text-2xl">
          <h1>
            Join our mailing list for <br />
            the latest updates.
          </h1>
        </div>
        <div className="right text-end">
          <h1>Insights</h1>
          <h1>Newsroom</h1>
          <h1>Resources</h1>
          <h1>Contact</h1>
          <h1>Careers</h1>
        </div>
      </div>
      <div className="bottom w-full sticky bottom-0">
        <div className="footertext w-full relative overflow-hidden">
          <h1
            ref={footerH1Ref}
            className="w-full h-fit text-[10rem] my-28 -tracking-[2rem] leading-none"
          >
            B e {"  "} F o u n d {"  "} O n l i n e
          </h1>
          <div className="cover w-full h-[7rem] px-10 flex justify-between items-center border-white border-t-2 bg-black absolute bottom-0">
            <div className="fleft flex justify-between items-center gap-5 text-[.9rem]">
              <h1 className="font-light border-b-2 border-white">
                Privacy Policy
              </h1>
              <h1 className="font-light border-b-2 border-white">
                Terms of Use
              </h1>
              <h1 className="font-light border-b-2 border-white">Trust</h1>
            </div>
            <div className="fmid">
              <h1 className="text-[.8rem] font-light">
                © 2024 BeFoundOnline. All rights reserved.
              </h1>
            </div>
            <div className="fright text-2xl">
              <i className="ri-instagram-line"></i>
              <i className="ri-linkedin-box-fill"></i>
              <i className="ri-github-fill"></i>
              <i className="ri-youtube-fill"></i>
              <i className="ri-facebook-box-fill"></i>
              <i className="ri-twitter-x-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
