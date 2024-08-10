import { Button } from "../ui/button";
import { TextReveal } from "../ui/typography";

/* eslint-disable @next/next/no-img-element */
const teamMembers = [
  {
    id: "01",
    name: "BASHAR AL-BAKRI",
    position: "CEO, Marketing Strategist",
    imgSrc: "/BA.jpeg",
    bg: "#DAB78F",
  },
  {
    id: "02",
    name: "ANAS AL-MUHTASEB",
    position: "Digital Solutions Architect",
    imgSrc: "/images/Anas.jpeg",
    bg: "#A1B3CB",
  },
  {
    id: "03",
    name: "MOHAMMAD LEILA",
    position: "ART DIRECTOR",
    imgSrc: "/Testme.jpeg",
    bg: "#FC5529",
  },
  {
    id: "04",
    name: "MOHAMMAD AL-WAKEEL",
    imgSrc:
      "https://images.unsplash.com/photo-1587397845856-e6cf49176c70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    position: "SENIOR GRAPHIC DESIGNER",
    bg: "#000",
  },
  {
    id: "05",
    name: "RAHAF DWEIK",
    position: "Chief Innovation Officer",
    imgSrc: "/images/Rahaf.jpeg",
    bg: "#C7B691",
  },
  {
    id: "06",
    name: "MOHAMMAD MARQA",
    position: "FULL STACK MANAGER",
    imgSrc: "/images/MohammadMar.jpeg",
    bg: "#9FA4C4",
  },
  {
    id: "07",
    name: "ASEEL AL-MUHTASEB",
    position: "MOBILE DEVELOPER",
    imgSrc:
      "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    id: "08",
    name: "MOHAMMAD ABU-OMAR",
    position: "FRONT-END DEVELOPER",
    imgSrc: "/images/Mohammad.png",
    bg: "#749675",
  },
];

export default function OurTeamMobiel() {
  return (
    <>
      <h1 className="text-center mb-12 text-4xl sm:text-6xl tracking-tight">
        Our Team
      </h1>
      <div className="list w-full mt-10 px-4 sm:px-10">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="listelem w-full py-6 sm:py-[3rem] border-b-2 border-black px-4 sm:px-10 text-xl sm:text-[2.5rem] relative"
          >
            <div className="relative z-10 flex flex-col md:flex-row md:justify-between items-center md:items-start gap-4">
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
