"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GlitchTransition = () => {
  const squareCount = 8;
  const squares = Array.from({ length: squareCount * squareCount }, (_, i) => i);
  const [randomValues, setRandomValues] = useState<number[]>([]);

  useEffect(() => {
    setRandomValues(squares.map(() => Math.random()));
  }, []);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5, delay: 2 }
    }
  };

  const squareVariants = {
    initial: { scale: 1, rotate: 0 },
    animate: (i: number) => ({
      scale: 0,
      rotate: randomValues[i] * 360,
      transition: { 
        duration: 0.7 + randomValues[i] * 0.3,
        ease: [0.645, 0.045, 0.355, 1]
      }
    }),
    exit: { 
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }
    }
  };

  const pixelVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } }
  };

  const slideVariants = {
    initial: (direction: string) => ({
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'top' ? '-100%' : direction === 'bottom' ? '100%' : 0,
    }),
    animate: {
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }
    },
    exit: (direction: string) => ({
      x: direction === 'left' ? '100%' : direction === 'right' ? '-100%' : 0,
      y: direction === 'top' ? '100%' : direction === 'bottom' ? '-100%' : 0,
      transition: { duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }
    })
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="absolute inset-0 grid" style={{ 
        gridTemplateColumns: `repeat(${squareCount}, 1fr)`,
        gridTemplateRows: `repeat(${squareCount}, 1fr)`
      }}>
        {squares.map((index) => (
          <motion.div
            key={index}
            className="bg-black"
            variants={squareVariants}
            custom={index}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              delay: (index % squareCount + Math.floor(index / squareCount)) * 0.03,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 grid grid-cols-[repeat(32,1fr)] grid-rows-[repeat(32,1fr)]">
        {Array.from({ length: 1024 }, (_, i) => (
          <motion.div
            key={i}
            className="bg-white"
            variants={pixelVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: Math.random() * 1.5 }}
          />
        ))}
      </div>
      <motion.div
        className="absolute inset-y-0 left-0 w-1/4 bg-primary"
        variants={slideVariants}
        custom="left"
        initial="initial"
        animate="animate"
        exit="exit"
      />
      <motion.div
        className="absolute inset-y-0 right-0 w-1/4 bg-primary"
        variants={slideVariants}
        custom="right"
        initial="initial"
        animate="animate"
        exit="exit"
      />
      <motion.div
        className="absolute inset-x-0 top-0 h-1/4 bg-secondary"
        variants={slideVariants}
        custom="top"
        initial="initial"
        animate="animate"
        exit="exit"
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/4 bg-secondary"
        variants={slideVariants}
        custom="bottom"
        initial="initial"
        animate="animate"
        exit="exit"
      />
      <motion.h1
        className="text-white text-6xl font-bold glitch-text z-10"
        data-text="BefoundOnline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        BefoundOnline
      </motion.h1>
    </motion.div>
  );
};

export default GlitchTransition;