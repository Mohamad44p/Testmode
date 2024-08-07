/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GibberishText from "./ui/GibberishText";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { TextReveal } from "./ui/typography";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    id: "01",
    name: "BASHAR AL-BAKRI",
    position: "CEO",
    imgSrc: "/BA.jpeg",
    bg: "#DAB78F",
  },
  {
    id: "02",
    name: "MOHAMMAD LEILA",
    position: "COO",
    imgSrc: "/Testme.jpeg",
    bg: "#FC5529",
  },
  {
    id: "03",
    name: "Caroline Nieto",
    position: "Chief Product Officer",
    imgSrc:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    id: "04",
    name: "Victor Albertos",
    position: "CTO",
    imgSrc:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    id: "05",
    name: "Dr. Jana Schmidt",
    position: "Chief Innovation Officer",
    imgSrc:
      "https://images.unsplash.com/photo-1587397845856-e6cf49176c70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    id: "06",
    name: "Adrian Rubio",
    position: "VP of Engineering",
    imgSrc:
      "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
];

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
    <div
      ref={listRef}
      data-color="white"
      className="team section overflow-y-hidden w-full mt-[30vh] mb-[30vh] relative"
    >
      <h1 className="text-center mb-12 text-4xl sm:text-6xl tracking-tight">
        Our Team
      </h1>
      <div className="list w-full mt-10 px-4 sm:px-10">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="listelem w-full py-6 sm:py-[3rem] border-b-2 border-black px-4 sm:px-10 text-xl sm:text-[2.5rem] relative"
          >
            <div className="relative z-10 flex justify-between sm:justify-around items-center">
              <div className="left w-full flex items-center gap-4 sm:gap-10">
                <h3>{member.id}</h3>
                <h1 className="cursor-pointer">{member.name}</h1>
              </div>
              <div className="right">
                <h1 className="text-base sm:text-[1.5rem] text-end w-full">
                  {member.position}
                </h1>
              </div>
            </div>
            <div className="picture z-[100] opacity-0 w-32 sm:w-[15rem] h-32 sm:h-[15rem] rounded-full overflow-hidden  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img
                className="object-cover w-full h-full"
                src={member.imgSrc}
                alt={member.name}
              />
            </div>
            <div
              className="bluelayer top-0 left-0 w-full h-0 absolute z-5"
              style={{ backgroundColor: member.bg }}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center my-10 mt-16">
        <Button
          size={"lg"}
          className="border flex items-center justify-center gap-x-3 bg-[#FC5529] rounded-2xl hover:bg-[#FC5529] border-black text-white font-bold transition"
        >
          <TextReveal>Meet the Team &#8594;</TextReveal>
        </Button>
      </div>
    </div>
  );
}
