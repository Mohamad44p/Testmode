"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScroll } from "framer-motion";

const Navbar = () => {
  const [textColor, setTextColor] = useState("black");
  const [bgColor, setBgColor] = useState("white");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      setIsScrolled(value > 0.0001);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    const updateTextColor = () => {
      const currentTheme = document.body.getAttribute("theme");
      switch (currentTheme) {
        case "RaisinBlack":
          setTextColor("white");
          setBgColor("RaisinBlack");
          break;
        case "Ming":
          setBgColor("Ming");
          setTextColor("black");
          break;
        case "Blond":
          setBgColor("Blond");
          setTextColor("black");
          break;
        case "Almond":
          setBgColor("Almond");
          setTextColor("black");
          break;
        case "White":
          setBgColor("White");
          setTextColor("black");
          break;
        case "light-blue":
          setBgColor("light-blue");
          setTextColor("black");
          break;
        case "soft-orange":
          setBgColor("soft-orange");
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

  return (
    <header
      className={cn(
        `fixed top-0 left-0 w-full py-3 z-[1000] backdrop-blur-md`,
        {
          [`bg-${bgColor} shadow-md`]: isScrolled,
          "bg-transparent": !isScrolled,
        }
      )}
    >
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className={`text-2xl font-bold ${
                textColor === "white" ? "text-white" : "text-black"
              }`}
            >
              Be Found Online
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/Solutions" textColor={textColor}>
              Solutions <ChevronDown className="inline-block ml-1 w-4 h-4" />
            </NavLink>
            <NavLink href="/About" textColor={textColor}>
              About
            </NavLink>
            <NavLink href="/insights" textColor={textColor}>
              Insights
            </NavLink>
            <NavLink href="/team" textColor={textColor}>
              Team
            </NavLink>
            <NavLink href="/careers" textColor={textColor}>
              Careers
            </NavLink>
            <button className="bg-orange-500 hover:bg-orange-600 text-sm text-black font-bold py-1 px-3 rounded">
              <Link href="/Contact">Contact Us</Link>
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                textColor === "white" ? "text-white" : "text-black"
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/Solutions" textColor={textColor}>
              Solutions
            </MobileNavLink>
            <MobileNavLink href="/About" textColor={textColor}>
              About
            </MobileNavLink>
            <MobileNavLink href="/insights" textColor={textColor}>
              Insights
            </MobileNavLink>
            <MobileNavLink href="/team" textColor={textColor}>
              Team
            </MobileNavLink>
            <MobileNavLink href="/careers" textColor={textColor}>
              Careers
            </MobileNavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-4 rounded">
              <Link href="/Contact">Contact Us</Link>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({
  href,
  children,
  textColor,
}: {
  href: string;
  children: React.ReactNode;
  textColor: string;
}) => (
  <Link
    href={href}
    className={`hover:text-gray-600 font-medium ${
      textColor === "white" ? "text-white" : "text-black"
    }`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  href,
  children,
  textColor,
}: {
  href: string;
  children: React.ReactNode;
  textColor: string;
}) => (
  <Link
    href={href}
    className={`block px-3 py-2 rounded-md text-base font-medium ${
      textColor === "white" ? "text-white" : "text-black"
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
