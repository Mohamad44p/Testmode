"use client";

/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";
import MegaMenu from "./MegaMenu";
import { Button } from "./ui/button";
import {
  FolderIcon,
  HomeIcon,
  LineChartIcon,
  Menu,
  Package2Icon,
  PackageIcon,
  PanelLeftIcon,
  SearchIcon,
  UsersIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const navItems = [
  { title: "UI/UX", href: "/ui-ux" },
  { title: "WEBINARS", href: "/webinars" },
  { title: "PROJECTS", href: "/projects" },
  { title: "BLOG", href: "/blog" },
  { title: "ABOUT US", href: "/about" },
];

const links = [
  { href: "#", icon: HomeIcon, label: "Dashboard" },
  {
    href: "#",
    icon: FolderIcon,
    label: "Recent Orders",
    sublinks: [
      { href: "#", icon: FolderIcon, label: "Recent Orders" },
      { href: "#", icon: FolderIcon, label: "Pending Orders" },
    ],
  },
  { href: "#", icon: PackageIcon, label: "Products" },
  {
    href: "#",
    icon: FolderIcon,
    label: "Active Products",
    sublinks: [
      { href: "#", icon: FolderIcon, label: "Active Products" },
      { href: "#", icon: FolderIcon, label: "Drafts" },
    ],
  },
  { href: "#", icon: UsersIcon, label: "Customers" },
  { href: "#", icon: LineChartIcon, label: "Analytics" },
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
        case "Ming":
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
      className="sticky top-0 left-0 w-full z-[1000] backdrop-blur-md bg-white/30 border-b border-white/30 shadow-md"
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <h1 className={`text-3xl font-bold text-${textColor}`}>
          <RoughNotation type="box" color="#000" show>
            BE FOUND <span className="">ONLINE</span>
          </RoughNotation>
        </h1>
        <div
          className={`lg:flex items-center hidden lg:gap-x-8 md:gap-x-4 text-${textColor}`}
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
                  className={`cursor-pointer py-2 relative text-${textColor}`}
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

        <div className="flex items-center gap-x-4">
          <Button
            className={`border border-${textColor} rounded-2xl text-${textColor} font-bold hover:text-${textColor} transition`}
          >
            Let's Start
          </Button>
          <div className="flex lg:hidden">
            <MobileNavbar />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

const MobileNavbar = () => {
  return (
    <div className="flex items-center gap-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="border-none">
            <Menu className="h-7 w-7" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="sm:max-w-xs z-[9000] bg-black text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold">BefoundOnline</span>
            </div>
          </div>
          <nav className="grid gap-6 text-lg font-medium">
            {links.map((link, index) => (
              <div key={index}>
                <Link
                  href={link.href}
                  className="flex items-center gap-4 px-2.5"
                  prefetch={false}
                >
                  <link.icon className="h-5 w-5" />
                  {link.label}
                </Link>
                {link.sublinks && (
                  <div className="grid gap-2 pl-8">
                    {link.sublinks.map((sublink, subindex) => (
                      <Link
                        key={subindex}
                        href={sublink.href}
                        className="flex items-center gap-4 text-muted-foreground hover:text-foreground"
                        prefetch={false}
                      >
                        <sublink.icon className="h-4 w-4" />
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
