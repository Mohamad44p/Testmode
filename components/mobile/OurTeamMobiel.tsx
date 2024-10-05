import React from "react";
import { Button } from "../ui/button";
import { TextReveal } from "../ui/typography";

/* eslint-disable @next/next/no-img-element */
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
export default function OurTeamMobiel({ membersData }: OurTeamProps) {
  return (
    <>
      <h1 className="text-center mb-12 text-4xl sm:text-6xl tracking-tight">
        Our Team
      </h1>
      <div className="list w-full mt-10 px-4 sm:px-10">
        {membersData.map((member) => (
          <div
            key={member.id}
            className="listelem w-full py-6 sm:py-[3rem] border-b-2 border-black px-4 sm:px-10 text-xl sm:text-[2.5rem] relative"
          >
            <div className="relative z-10 flex flex-row justify-between items-center gap-4">
              <div className="flex md:items-center gap-4 md:gap-10">
                <h3>{member.id}</h3>
                <div className="flex flex-col items-center md:items-start">
                  <h1 className="cursor-pointer">{member.name}</h1>
                  <h1 className="text-base sm:text-[1.5rem] text-center md:text-start">
                    {member.position}
                  </h1>
                </div>
              </div>
              <div className="md:hidden">
                <img
                  className="object-cover w-20 h-20 rounded-full"
                  src={member.imgSrc}
                  alt={member.name}
                />
              </div>
            </div>
            <div className="picture z-[100] opacity-0 w-32 sm:w-[15rem] h-32 sm:h-[15rem] rounded-full overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:opacity-100">
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
          className="border flex items-center justify-center gap-x-3 bg-[#F5F19C] hover:bg-[#F5F19C] border-black text-black rounded-lg font-bold transition"
        >
          <TextReveal>Meet the Team &#8594;</TextReveal>
        </Button>
      </div>
    </>
  );
}
