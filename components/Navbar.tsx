"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScroll } from "framer-motion";
import MegaMenu from "./MegaMenu";
import Uiux from "./Uiux";

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
        case "Black":
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
          <div className="hidden lg:flex items-center space-x-8">
            <MegaMenu />
            <Uiux />
            <NavLink href="/Solutions" textColor={textColor}>
              Solutions <ChevronDown className="inline-block ml-1 w-4 h-4" />
            </NavLink>
            <NavLink href="/About" textColor={textColor}>
              About
            </NavLink>
            <NavLink href="/projects" textColor={textColor}>
              Projects
            </NavLink>
            <NavLink href="/insights" textColor={textColor}>
              Insights
            </NavLink>
            <NavLink href="/team" textColor={textColor}>
              Team
            </NavLink>
            <NavLink href="/webinars" textColor={textColor}>
              Webinars
            </NavLink>
            <NavLink href="/Careers" textColor={textColor}>
              Careers
            </NavLink>
            <button className="bg-orange-500 hover:bg-orange-600 text-sm text-black font-bold py-1 px-3 rounded">
              <Link href="/Contact">Contact Us</Link>
            </button>
          </div>
          <div className="lg:hidden">
            <motion.button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                textColor === "white" ? "text-white" : "text-black"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Toggle menu</span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-x-0 top-[60px] bg-white shadow-lg rounded-b-2xl overflow-hidden"
          >
            <motion.div
              className="flex flex-col py-4"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.1 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
            >
              {[
                "Solutions",
                "About",
                "Projects",
                "Insights",
                "Team",
                "Webinars",
                "Careers",
              ].map((item, index) => (
                <MobileNavLink
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={toggleMenu}
                  index={index}
                >
                  {item}
                </MobileNavLink>
              ))}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
                transition={{ duration: 0.3 }}
                className="px-4 mt-4"
              >
                <Link
                  href="/Contact"
                  onClick={toggleMenu}
                  className="block w-full text-center bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
  onClick,
  index,
}: {
  href: string;
  children: string;
  onClick: () => void;
  index: number;
}) => (
  <motion.div
    variants={{
      open: { opacity: 1, y: 0 },
      closed: { opacity: 0, y: -10 },
    }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
  >
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-2 text-lg font-medium text-gray-800 hover:bg-orange-100 transition-colors duration-300"
    >
      {children}
    </Link>
  </motion.div>
);

export default Navbar;
