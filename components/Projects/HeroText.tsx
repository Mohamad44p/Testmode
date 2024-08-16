"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function HeroText() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[16rem] font-bold text-textprimary tracking-tighter"
        >
          PROJECTS
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute top-60 right-16 md:top-52 md:right-12 lg:top-32 lg:right-12 text-4xl sm:text-5xl font-bold text-textprimary"
      >
        14
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-72 right-12 md:bottom-56 md:right-6 lg:bottom-56 lg:right-9"
      >
        <ArrowDownRight className="w-8 h-8 sm:w-12 sm:h-12 text-textprimary" />
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute -left-24 -top-24 w-48 h-48 bg-gradient-to-br from-primary to-secondary opacity-30 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute -right-24 -bottom-24 w-64 h-64 bg-gradient-to-tr from-secondary to-primary opacity-30 rounded-full blur-3xl"
      />
    </div>
  );
}
