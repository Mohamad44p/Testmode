/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useWindowSize } from "@/lib/useWindowSize";

export default function Story() {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white">
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <p className="uppercase tracking-wide font-semibold">
            From vision to reality
          </p>
        </div>
        <h1 className="text-4xl sm:text-5xl font-light leading-tight text-center">
          The Significo Story
        </h1>
      </div>

      <VerticalAccordion />
    </div>
  );
}

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="w-full max-w-6xl mx-auto">
      <div className="flex h-[600px] w-full overflow-hidden rounded-lg border border-gray-200">
        {items.map((item) => (
          <Panel key={item.id} open={open} setOpen={setOpen} {...item} />
        ))}
      </div>
    </section>
  );
};

interface PanelProps {
  open: number;
  setOpen: React.Dispatch<React.SetStateAction<number>>;
  id: number;
  title: string;
  subtitle: string;
  imgSrc: string;
  description: string;
  color: string;
}

const Panel = ({
  open,
  setOpen,
  id,
  title,
  subtitle,
  imgSrc,
  description,
  color,
}: PanelProps) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <div
      className={`relative h-full transition-all duration-500 ease-in-out ${
        isOpen ? "w-[70%]" : "w-[10%]"
      }`}
      style={{ backgroundColor: color }}
      onClick={() => setOpen(id)}
    >
      <div className="absolute top-0 left-0 p-4 flex items-start">
        <span className="text-4xl font-bold mr-2">
          {id.toString().padStart(2, "0")}
        </span>
        <span
          className={`text-lg font-semibold writing-mode-vertical ${
            isOpen ? "hidden" : ""
          }`}
        >
          {subtitle}
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 p-8 flex flex-col"
          >
            <div>
              <h2 className="text-4xl font-bold mt-14 mb-4">{title}</h2>
              <p className="text-lg mb-8">{description}</p>
            </div>
            <div className="mt-auto">
              <img
                src={imgSrc}
                alt={title}
                className="w-1/3 h-auto object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const items = [
  {
    id: 1,
    title: "Significo's Bold Beginnings",
    subtitle: "Significo's Bold Beginnings",
    imgSrc: "/images/Carecter1.jpeg",
    description:
      "Significo was founded in 2014 based on a seemingly paradoxical belief: it is technology, handled thoughtfully, that will recenter humanity in healthcare. This belief drives our mission to build technology that solves real problems and makes managing health a more empowering experience. At the heart of everything we do is a passion to give people back control of their health and reimagine healthcare to be more human.",
    color: "#a8dadc",
  },
  {
    id: 2,
    title: "Brave Ventures",
    subtitle: "Brave Ventures",
    imgSrc: "/images/Carecter2.jpeg",
    description:
      "As we grew, we ventured into new territories, always keeping our core mission in mind. We expanded our services, partnered with leading healthcare providers, and continued to innovate in the field of health technology.",
    color: "#f4a261",
  },
  {
    id: 3,
    title: "Product Launches",
    subtitle: "Product Launches",
    imgSrc: "/images/Carecter3.jpeg",
    description:
      "Over the years, we've launched several groundbreaking products that have revolutionized patient care and health management. Each product is a testament to our commitment to making healthcare more accessible and user-friendly.",
    color: "#e9c8fa",
  },
  {
    id: 4,
    title: "The Future",
    subtitle: "The Future",
    imgSrc: "/images/Carecter4.jpeg",
    description:
      "Looking ahead, we're excited about the possibilities that emerging technologies offer. We're constantly exploring new ways to improve healthcare delivery and patient outcomes, always with our mission of recentering humanity in healthcare at the forefront.",
    color: "#fefae0",
  },
];
