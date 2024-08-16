"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowDownRight, ChevronDown } from "lucide-react";

export default function Component() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.2,
      transition: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 5,
      },
    },
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 1.5,
      },
    },
  };

  return (
    <div
      ref={ref}
      data-color="RaisinBlack"
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white"
    >
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate={controls}
        className="absolute inset-0 bg-[url('/pattern-image.jpg')] opacity-10"
      />

      <motion.div
        className="flex items-baseline z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <h1 className="text-[8rem] sm:text-[12rem] font-bold  tracking-tighter mr-4 drop-shadow-lg">
          {"PROJECTS".split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <motion.div
          variants={numberVariants}
          className="text-6xl sm:text-8xl font-normal self-start mt-4 drop-shadow-lg"
        >
          14
        </motion.div>
      </motion.div>

      <motion.div
        variants={arrowVariants}
        initial="hidden"
        animate={controls}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown
          className="w-12 h-12 text-white animate-bounce"
          strokeWidth={1.5}
        />
      </motion.div>
    </div>
  );
}
