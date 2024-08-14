"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const colorPalette = {
  Ming: "#3a7e7d",
  RaisinBlack: "#262526",
  Black: "#000000",
  LightBlue: "#aedee0",
  SoftOrange: "#f4a261",
};

export default function TransitionEffect() {
  const [accentColor, setAccentColor] = useState(colorPalette.Ming);

  useEffect(() => {
    const colors = Object.values(colorPalette);
    const newAccentColor = colors[Math.floor(Math.random() * colors.length)];
    setAccentColor(newAccentColor);
  }, []);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const circleVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
    },
    exit: {
      scale: 0,
      rotate: 180,
      transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const lineVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-[1000000000] flex items-center justify-center bg-white"
    >
      <motion.div
        variants={circleVariants}
        className="relative w-80 h-80 rounded-full flex items-center justify-center overflow-hidden"
        style={{ boxShadow: `0 0 40px ${accentColor}` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100 opacity-50" />
        <motion.div variants={textVariants} className="text-center z-10">
          <div
            className="text-4xl font-light mb-2"
            style={{ color: accentColor }}
          >
            Be Found
          </div>
          <div className="text-5xl font-bold" style={{ color: accentColor }}>
            Online
          </div>
        </motion.div>
      </motion.div>
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="50%"
          cy="50%"
          r="35%"
          stroke={accentColor}
          strokeWidth="1"
          fill="none"
          variants={lineVariants}
        />
        <motion.circle
          cx="50%"
          cy="50%"
          r="35.5%"
          stroke={accentColor}
          strokeWidth="0.5"
          fill="none"
          variants={lineVariants}
          transition={{ delay: 0.2 }}
        />
      </svg>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: accentColor,
            top: `${50 + 45 * Math.sin((i * Math.PI) / 3)}%`,
            left: `${50 + 45 * Math.cos((i * Math.PI) / 3)}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.7] }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        />
      ))}
    </motion.div>
  );
}
