"use client";

/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";
import MegaMenu from "./MegaMenu";

const navItems = [
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
  const [textColor, setTextColor] = useState("black");

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 180) {
      setHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  useEffect(() => {
    const updateTextColor = () => {
      const currentTheme = document.body.getAttribute("theme");
      switch (currentTheme) {
        case "black":
          setTextColor("white");
          break;
        case "cyan":
        case "salmon":
          setTextColor("black");
          break;
        case "white":
          setTextColor("black");
          break;
        default:
          setTextColor("black");
      }
    };

    updateTextColor();

    const observer = new MutationObserver(updateTextColor);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["theme"],
    });

    return () => observer.disconnect();
  }, []);

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
      transition={{ duration: 0.2 }}
      className="fixed hidden md:block top-0 z-[1000] w-full backdrop-blur-md bg-white/30 border-b border-white/30 shadow-md"
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <h1 className={`text-3xl font-bold text-${textColor}`}>
          <RoughNotation type="box" color="#000" show>
            BE FOUND <span className="">ONLINE</span>
          </RoughNotation>
        </h1>
        <div
          className={`hidden md:flex items-center gap-x-8 text-${textColor}`}
        >
          <MegaMenu />
          {navItems.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <Link href={item.href}>
                <span
                  className={`font-bold cursor-pointer py-2 relative text-${textColor}`}
                >
                  <RoughNotation
                    type="underline"
                    color={textColor}
                    strokeWidth={2}
                    show={hoveredIndex === index}
                  >
                    {item.title}
                  </RoughNotation>
                </span>
              </Link>
            </div>
          ))}
        </div>
        <button
          className={`hidden md:block px-6 py-2 border border-${textColor} text-${textColor} rounded-lg font-bold hover:text-${textColor} transition`}
        >
          Let's Start
        </button>
      </div>
    </motion.nav>
  );
}
