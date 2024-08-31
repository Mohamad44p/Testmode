/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const teamMembers = [
  {
    id: "01",
    name: "BASHAR AL-BAKRI",
    position: "CEO, Marketing Strategist",
    imgSrc: "/BA.jpeg",
  },
  {
    id: "02",
    name: "ANAS AL-MUHTASEB",
    position: "Digital Solutions Architect",
    imgSrc: "/images/Anas.jpeg",
  },
  {
    id: "03",
    name: "MOHAMMAD LEILA",
    position: "ART DIRECTOR",
    imgSrc: "/Testme.jpeg",
  },
  {
    id: "04",
    name: "MOHAMMAD AL-WAKEEL",
    imgSrc:
      "https://images.unsplash.com/photo-1587397845856-e6cf49176c70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    position: "SENIOR GRAPHIC DESIGNER",
  },
  {
    id: "05",
    name: "MOHAMMAD MARQA",
    position: "FULL STACK MANAGER",
    imgSrc: "/images/MohammadMar.jpeg",
  },
  {
    id: "06",
    name: "ASEEL AL-MUHTASEB",
    position: "MOBILE DEVELOPER",
    imgSrc: "/images/AsselImage.png",
  },
  {
    id: "07",
    name: "MOHAMMAD ABU-OMAR",
    position: "FRONT-END DEVELOPER",
    imgSrc: "/images/Mohammad.png",
  },
];

export default function Component() {
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const element = event.currentTarget as HTMLElement;
      const picture = element.querySelector(".picture") as HTMLElement;
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;

      gsap.to(picture, {
        x: gsap.utils.mapRange(0, rect.width, -100, 100, x),
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
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-block rounded-full bg-black text-white text-xs px-3 py-1 mb-4">
          MEET THE VISIONARIES
        </div>
        <h1 className="text-5xl font-bold mb-6">The BE FOUND ONLINE Team</h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          We saw a need in healthcare. To craft technology that puts people at
          the center. We are a team of technologists, artists, rule-breakers,
          and dreamers that set out to build better technology, and a better
          company while we're at it.
        </p>
      </div>

      <div ref={listRef}>
        <table className="w-full border-collapse">
          <tbody>
            {teamMembers.map((member) => (
              <tr
                key={member.id}
                className="listelem border-b transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white relative overflow-hidden"
              >
                <td className="py-4 w-16 text-gray-400 pl-4">{member.id}</td>
                <td className="py-4 font-medium">{member.name}</td>
                <td className="py-4 text-right pr-4">{member.position}</td>
                <td className="w-0 p-0">
                  <div className="picture z-[100] opacity-0 w-32 sm:w-[15rem] h-32 sm:h-[15rem] rounded-full overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <img
                      className="object-cover w-full h-full"
                      src={member.imgSrc}
                      alt={member.name}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
