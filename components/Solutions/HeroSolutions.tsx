"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { TextReveal } from "../ui/typography";

export default function HeroSolutions() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      data-color="Almond"
      className="flex flex-col lg:flex-row items-start justify-between min-h-screen bg-white p-8 lg:p-16"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div
        className="w-full lg:w-1/2 mb-8 lg:mb-0 pr-0 lg:pr-8"
        variants={itemVariants}
      >
        <motion.div
          className="border-t border-gray-200 pt-4 mb-8"
          variants={itemVariants}
        />
        <motion.div className="flex items-center mb-4" variants={itemVariants}>
          <div className="w-2 h-2 bg-black rounded-full mr-2" />
          <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
            Insurance Solutions
          </div>
        </motion.div>
        <motion.h1
          className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          variants={itemVariants}
        >
          Technology solutions for complex challenges
        </motion.h1>
        <motion.p
          className="text-gray-600 mb-8 text-lg"
          variants={itemVariants}
        >
          Significo is a product and software development agency on a mission to
          put humans back at the center of healthcare by simplifying complexity,
          accelerating capacity, and improving outcomes. We work with mid-size
          payers and insurers to help members manage and improve their health.
        </motion.p>
        <motion.div variants={itemVariants}>
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full text-sm uppercase tracking-wider transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">
              <TextReveal>Get in touch &#8594;</TextReveal>
            </Link>
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full lg:w-1/2"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.img
            src="/images/Solutions/ImageWOmen.webp"
            alt="Woman with curly hair"
            className="w-full h-auto object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
