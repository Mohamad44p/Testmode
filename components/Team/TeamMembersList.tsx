/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const teamMembers = [
  {
    id: "01",
    name: "Adrienne Lindsey-Carr",
    role: "Campaign & Content Marketing Manager",
    image: "/images/Carecter1.jpeg",
  },
  {
    id: "02",
    name: "Adrián Rubio",
    role: "VP of Engineering",
    image: "/images/Carecter2.jpeg",
  },
  {
    id: "03",
    name: "Akhil Tak",
    role: "Senior Backend Engineer",
    image: "/images/Carecter3.jpeg",
  },
  {
    id: "04",
    name: "Alex Blair",
    role: "Director of Brand Strategy",
    image: "/images/Carecter4.jpeg",
  },
  {
    id: "05",
    name: "Alexander Jäkel",
    role: "Director of Finance and Controlling",
    image: "/images/Carecter5.jpeg",
  },
  {
    id: "06",
    name: "Allison Palmer",
    role: "Product Manager",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "07",
    name: "Babatunde Ogunyede",
    role: "Junior System Administrator",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "08",
    name: "Benjamin White",
    role: "Sales Development Representative",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "09",
    name: "Caitlyn Stedman",
    role: "Operations Specialist",
    image: "/placeholder.svg?height=400&width=400",
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
        <h1 className="text-5xl font-bold mb-6">The Significo Team</h1>
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
                <td className="py-4 text-right pr-4">{member.role}</td>
                <td className="w-0 p-0">
                  <div className="picture z-[100] opacity-0 w-32 sm:w-[15rem] h-32 sm:h-[15rem] rounded-full overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <img
                      className="object-cover w-full h-full"
                      src={member.image}
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
