/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import {
  useMotionTemplate,
  useScroll,
  useTransform,
  motion,
  useInView,
} from "framer-motion";
import { HeartIcon, PenToolIcon, RocketIcon, SmileIcon } from "lucide-react";
import React, { useRef } from "react";
import { TextReveal } from "../ui/typography";
import { Button } from "../ui/button";

export default function CircleSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const coreValues = [
    {
      icon: <SmileIcon className="w-16 h-16 mb-6" />,
      title: "Keep it Human",
      description:
        "From design to partnerships, our commitment is to positively impact all the real lives we touch.",
    },
    {
      icon: <PenToolIcon className="w-16 h-16 mb-6" />,
      title: "Hone Your Craft",
      description:
        "We view our work as an ongoing practice, driven by a relentless commitment to quality and excellence.",
    },
    {
      icon: <RocketIcon className="w-16 h-16 mb-6" />,
      title: "Innovate Boldly",
      description:
        "We push boundaries and challenge conventions to create groundbreaking solutions.",
    },
    {
      icon: <HeartIcon className="w-16 h-16 mb-6" />,
      title: "Embrace Empathy",
      description:
        "Understanding and addressing the needs of others is at the core of everything we do.",
    },
  ];

  return (
    <div data-color="yellow" className="h-[140vh]" ref={containerRef}>
      <div className="max-w-7xl mx-auto sticky top-0 h-screen flex items-start px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col items-start justify-start mt-24 px-4">
            <motion.div
              className="text-left mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <p className="uppercase tracking-wide font-semibold">
                  Empowering humanity through innovation
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl font-light leading-tight">
                Our Core Values
              </h1>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {coreValues.map((value, index) => {
                const y = useTransform(
                  scrollYProgress,
                  [0, 1],
                  [0, (index + 1) * -50]
                );
                return (
                  <motion.div
                    key={index}
                    className={`
                      bg-black text-yellow-100 rounded-full p-8 sm:p-10 flex flex-col items-center text-center
                      ${index % 2 === 1 ? "md:mt-16" : ""}
                    `}
                    style={{
                      width: "280px",
                      height: "280px",
                      y,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      scale: isInView ? 1 : 0.8,
                      rotate: isInView ? [0, 10, 0] : 0,
                    }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: isInView ? 1 : 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                    >
                      {value.icon}
                    </motion.div>
                    <motion.h2
                      className="text-xl font-semibold mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isInView ? 1 : 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                    >
                      {value.title}
                    </motion.h2>
                    <motion.p
                      className="text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isInView ? 1 : 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                    >
                      {value.description}
                    </motion.p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex  items-center justify-start my-10 mt-16">
        <Button className="border border-black text-xl ml-9 w-[200px] h-[50px] flex items-center justify-center gap-x-3 bg-[#f5f19c] hover:bg-[#f5f19c] text-black font-bold transition">
          <TextReveal>CONNECT</TextReveal>
        </Button>
      </div>
    </div>
  );
}
