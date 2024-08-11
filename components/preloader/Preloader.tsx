"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const controls = useAnimation();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setMounted(true);
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    if (mounted) {
      const sequence = async () => {
        await controls.start("visible");
        await new Promise((resolve) => setTimeout(resolve, 5000));
        setLoading(false);
      };
      controls.start("hidden");

      sequence();
    }
  }, [mounted, controls]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="relative w-full h-full"
      >
        {/* Particle effect */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            animate={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Central logo animation */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="relative w-80 h-80"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border-4 border-blue-400 rounded-full"
                initial={{ scale: 0, rotate: 0 }}
                animate={{
                  scale: 1,
                  rotate: 360,
                  borderColor: ["#60A5FA", "#34D399", "#F87171", "#60A5FA"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Bouncing letters */}
        <motion.div className="absolute inset-0 flex items-center justify-center">
          {["B", "E", " ", "F", "O", "U", "N", "D"].map((letter, i) => (
            <motion.span
              key={i}
              className="text-6xl font-bold text-white mx-1"
              variants={{
                hidden: { y: -100, opacity: 0, rotateX: -180 },
                visible: {
                  y: 0,
                  opacity: 1,
                  rotateX: 0,
                  transition: {
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    delay: i * 0.1,
                  },
                },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Flying search icons */}
        <AnimatePresence>
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                scale: 0,
                rotate: 0,
              }}
              animate={{
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                scale: [0, 1, 1, 0],
                rotate: [0, 180, 360],
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                delay: i * 0.2,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-300"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Pulsating "ONLINE" text */}
        <motion.div
          className="absolute bottom-10 left-0 right-0 text-center text-4xl font-bold"
          animate={{
            color: ["#60A5FA", "#34D399", "#F87171", "#60A5FA"],
            textShadow: [
              "0 0 5px #60A5FA",
              "0 0 15px #34D399",
              "0 0 5px #F87171",
              "0 0 5px #60A5FA",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ONLINE
        </motion.div>

        {/* Radar effect */}
        <motion.div
          className="absolute inset-0 border-2 border-green-400 rounded-full"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{
            scale: [0, 1.5],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Loading progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 5, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
