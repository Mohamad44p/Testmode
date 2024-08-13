/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useWindowSize } from "@/lib/useWindowSize";

export default function Story() {
  return (
    <div 
      data-color="Almond"
    className="flex flex-col h-screen my-[10vh] items-center justify-center py-20">
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <p className="uppercase tracking-wide font-semibold">
            From vision to reality
          </p>
        </div>
        <h1 className="text-4xl sm:text-5xl font-light leading-tight text-center">
          The Be Found Online Story
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
      <div className="flex h-[500px] w-full overflow-hidden rounded-lg border border-gray-200">
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
  description: string;
  color: string;
}

const Panel = ({
  open,
  setOpen,
  id,
  title,
  subtitle,
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const items = [
  {
    id: 1,
    title: "Be Found Online Bold Beginnings",
    subtitle: "Be Found Online Bold Beginnings",
    description:
      "Founded in 2022, Be Found Online was born from a bold, yet simple idea: technology, when thoughtfully harnessed, can bring a human touch back to business . This belief fuels our mission to create digital solutions that genuinely address real-world challenges, making business and marketing more empowering and personal. At Be Found Online, our passion lies in giving companies the strategies and tactics to boost their business, while reimagining business to be more human-centered, just as it should be.",
    color: "#a8dadc",
  },
  {
    id: 2,
    title: "Brave Ventures",
    subtitle: "Brave Ventures",
    description:
      "Be Found Online has spent years perfecting its craft before evolving into the dynamic agency it is today. We identified a gap in the digital marketing landscape: many strategies focused on broad, impersonal metrics, leaving the true needs of clients unmet. So, we partnered with industry leaders across various sectors to develop tailored marketing strategies and custom digital solutions. In 2022, we expanded our expertise by acquiring a specialized marketing firm, strengthening our ability to deliver impactful results for our clients.",
    color: "#f4a261",
  },
  {
    id: 3,
    title: "Product Launches",
    subtitle: "Product Launches",
    description:
      "What matters to us is not just what we’ve done in the past, but what we’ll be doing next. We believe in looking towards the future with our clients Our creative digital agency creates engaging and intuitive website designs to establish your online presence. We’ve found brands are like people; they need to breathe, grow and evolve.",
    color: "#e9c8fa",
  },
  {
    id: 4,
    title: "The Future",
    subtitle: "The Future",
    description:
      "At Be Found Online we are dedicated to pushing boundaries and innovating alongside our clients to anticipate and adapt to emerging trends. Our forward-thinking approach ensures that every website design we create isn’t just engaging and intuitive but also future-proof, allowing brands to breathe, grow, and evolve in an ever-changing digital landscape. We’re committed to crafting solutions that not only meet today’s needs but also set the stage for tomorrow’s opportunities.",
    color: "#fefae0",
  },
];
