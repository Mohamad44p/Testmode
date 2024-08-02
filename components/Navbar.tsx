"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import GibberishText from "./ui/GibberishText";
import { RoughNotation } from "react-rough-notation";
import { TextReveal } from "./ui/typography";

const navItems = [
  { title: "Digital Marketing Services", href: "/digital-marketing-services" },
  { title: "UI/UX", href: "/ui-ux" },
  { title: "WEBINARS", href: "/webinars" },
  { title: "PROJECTS", href: "/projects" },
  { title: "BLOG", href: "/blog" },
  { title: "ABOUT US", href: "/about" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 180) {
      setHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <motion.nav
      animate={hidden ? "hidden" : "visible"}
      initial="visible"
      onHoverStart={() => setHidden(false)}
      onHoverEnd={() => setHidden(true)}
      variants={{
        visible: { y: "0%" },
        hidden: { y: "-90%" },
      }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 z-[1000] w-full backdrop-blur-md bg-white/30 border-b border-white/30 shadow-md"
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black">
          <RoughNotation type="box" color="#000" show>
            BE FOUND ONLINE
          </RoughNotation>
        </h1>
        <div className="hidden md:flex items-center gap-x-8 text-black">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <span
                className="font-bold cursor-pointer py-2 relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <RoughNotation
                  type="underline"
                  color="#000"
                  strokeWidth={2}
                  show={hoveredIndex === index}
                >
                  <TextReveal>{item.title}</TextReveal>
                </RoughNotation>
              </span>
            </Link>
          ))}
        </div>
        <button className="hidden md:block px-6 py-2 border border-black text-black rounded-lg font-bold hover:bg-white hover:text-black transition">
          <GibberishText text="Let's Start" />
        </button>
      </div>
    </motion.nav>
  );
}
