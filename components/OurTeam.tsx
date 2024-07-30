/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurTeam() {
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const element = event.currentTarget as HTMLElement;
      gsap.to(element.querySelector(".picture"), {
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, event.clientX),
        opacity: 1,
        ease: "power4",
        duration: 0.5,
      });
    };

    const handleMouseLeave = (event: MouseEvent) => {
      const element = event.currentTarget as HTMLElement;
      gsap.to(element.querySelector(".picture"), {
        opacity: 0,
        ease: "power4",
        duration: 0.5,
      });
    };

    const elements = listRef.current?.querySelectorAll(".listelem") || [];

    elements.forEach(
      (el: {
        addEventListener: (
          arg0: string,
          arg1: { (event: MouseEvent): void; (event: MouseEvent): void }
        ) => void;
      }) => {
        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseleave", handleMouseLeave);
      }
    );

     return () => {
      elements.forEach(
        (el: {
          removeEventListener: (
            arg0: string,
            arg1: { (event: MouseEvent): void; (event: MouseEvent): void }
          ) => void;
        }) => {
          el.removeEventListener("mousemove", handleMouseMove);
          el.removeEventListener("mouseleave", handleMouseLeave);
        }
      );
    };
  }, []);

  return (
    <div ref={listRef} data-color="white" className="team section w-full h-[200vh] relative">
      <h1 className="text-center text-6xl tracking-tight">Our Team</h1>
      <div className="list w-full h-32 mt-10 px-10">
        <div className="listelem w-full py-[3rem] border-b-2 border-black px-10 text-[2.5rem] relative">
          <div className="relative z-[3] flex justify-around items-center">
            <div className="left w-full flex items-center gap-10">
              <h3>01</h3>
              <h1>Dr. Rick McCartney</h1>
            </div>
            <div className="right">
              <h1 className="text-[1.5rem] text-end w-full">CEO</h1>
            </div>
          </div>
          <div className="picture opacity-0 w-[15rem] h-[15rem] rounded-full overflow-hidden z-[4] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div className="bluelayer top-0 left-0 w-full h-0 bg-[#2544EE] absolute z-[2]"></div>
        </div>
        <div className="listelem w-full py-[3rem] border-b-2 border-black px-10 text-[2.5rem] relative">
          <div className="relative z-[3] flex justify-around items-center">
            <div className="left w-full flex items-center gap-10">
              <h3>02</h3>
              <h1>Chris Koha</h1>
            </div>
            <div className="right">
              <h1 className="text-[1.5rem] text-end w-full">COO</h1>
            </div>
          </div>
          <div className="picture opacity-0 w-[15rem] h-[15rem] rounded-full overflow-hidden z-[4] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="bluelayer top-0 left-0 w-full h-0 bg-[#2544EE] absolute z-[2]"></div>
        </div>
        <div className="listelem w-full py-[3rem] border-b-2 border-black px-10 text-[2.5rem] relative">
          <div className="relative z-[3] flex justify-around items-center">
            <div className="left w-full flex items-center gap-10">
              <h3>03</h3>
              <h1>Caroline Nieto</h1>
            </div>
            <div className="right">
              <h1 className="text-[1.5rem] text-end w-full">
                Chief Product Officer
              </h1>
            </div>
          </div>
          <div className="picture opacity-0 w-[15rem] h-[15rem] rounded-full overflow-hidden z-[4] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBvcnRyYWl0fGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <div className="bluelayer top-0 left-0 w-full h-0 bg-[#2544EE] absolute z-[2]"></div>
        </div>
        <div className="listelem w-full py-[3rem] border-b-2 border-black px-10 text-[2.5rem] relative">
          <div className="relative z-[3] flex justify-around items-center">
            <div className="left w-full flex items-center gap-10">
              <h3>04</h3>
              <h1>Victor Albertos</h1>
            </div>
            <div className="right">
              <h1 className="text-[1.5rem] text-end w-full">CTO</h1>
            </div>
          </div>
          <div className="picture opacity-0 w-[15rem] h-[15rem] rounded-full overflow-hidden z-[4] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <div className="bluelayer top-0 left-0 w-full h-0 bg-[#2544EE] absolute z-[2]"></div>
        </div>
        <div className="listelem w-full py-[3rem] border-b-2 border-black px-10 text-[2.5rem] relative">
          <div className="relative z-[3] flex justify-around items-center">
            <div className="left w-full flex items-center gap-10">
              <h3>05</h3>
              <h1>Dr. Jana Schmidt</h1>
            </div>
            <div className="right">
              <h1 className="text-[1.5rem] text-end w-full">
                Chief Innovation Officer
              </h1>
            </div>
          </div>
          <div className="picture opacity-0 w-[15rem] h-[15rem] rounded-full overflow-hidden z-[4] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1587397845856-e6cf49176c70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHBvcnRyYWl0fGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <div className="bluelayer top-0 left-0 w-full h-0 bg-[#2544EE] absolute z-[2]"></div>
        </div>
        <div className="listelem w-full py-[3rem] border-b-2 border-black px-10 text-[2.5rem] relative">
          <div className="relative z-[3] flex justify-around items-center">
            <div className="left w-full flex items-center gap-10">
              <h3>06</h3>
              <h1>Adrian Rubio</h1>
            </div>
            <div className="right">
              <h1 className="text-[1.5rem] text-end w-full">
                VP of Engineering
              </h1>
            </div>
          </div>
          <div className="picture opacity-0 w-[15rem] h-[15rem] rounded-full overflow-hidden z-[4] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHBvcnRyYWl0fGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <div className="bluelayer top-0 left-0 w-full h-0 bg-[#2544EE] absolute z-[2]"></div>
        </div>
      </div>
    </div>
  );
}
