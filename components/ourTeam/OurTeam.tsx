"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/typography";
import React from "react";
import OurTeamMobiel from "../mobile/OurTeamMobiel";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  id: string;
  name: string;
  position: string;
  imgSrc: string;
  bg: string;
}

interface OurTeamProps {
  membersData: TeamMember[];
}

export default function OurTeam({ membersData }: OurTeamProps) {
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const element = event.currentTarget as HTMLElement;
      const picture = element.querySelector(".picture") as HTMLElement;
      gsap.to(picture, {
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
    <>
      <div
        ref={listRef}
        data-color="Almond"
        className="team hidden md:inline-block section overflow-y-hidden w-full mt-[30vh] relative"
      >
        <h1 className="text-center mb-12 text-4xl sm:text-6xl tracking-tight">
          Our Team
        </h1>
        <div className="list w-full mt-10 px-4 sm:px-10">
          {membersData.map((member) => (
            <div
              key={member.id}
              className="listelem w-full py-6 sm:py-[3rem] border-b-2 border-black px-4 sm:px-10 text-xl sm:text-[2.5rem] relative"
            >
              <div className="relative z-10 flex justify-between sm:justify-around items-center">
                <div className="left w-full flex items-center gap-4 sm:gap-10">
                  <h3 className="opacity-[0.3]">{member.id}</h3>
                  <h1 className="cursor-pointer">{member.name}</h1>
                </div>
                <div className="right">
                  <h1 className="text-base sm:text-[1.5rem] text-end w-[400px]">
                    {member.position}
                  </h1>
                </div>
              </div>
              <div className="picture z-[100] opacity-0 w-32 sm:w-[15rem] h-32 sm:h-[15rem] rounded-full overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  width={1900}
                  height={2000}
                  className="object-cover"
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
          <Link href="/team">
            <Button className="border text-2xl w-[300px] h-[50px] flex items-center justify-center gap-x-3 bg-orange-500 rounded-2xl hover:bg-orange-500 border-black text-white font-bold transition">
              <TextReveal>Meet the Team &#8594;</TextReveal>
            </Button>
          </Link>
        </div>
      </div>
      <div
        data-color="white"
        className="team section block md:hidden overflow-y-hidden w-full mt-[30vh] mb-[30vh] relative"
      >
        <OurTeamMobiel membersData={membersData} />
      </div>
    </>
  );
}