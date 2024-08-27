"use client";

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


export default function TestOne() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });


  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);


  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      const offset = 15;
      document.documentElement.style.setProperty(
        "--move-x",
        `${moveX / offset}px`
      );
      document.documentElement.style.setProperty(
        "--move-y",
        `${moveY / offset}px`
      );
    };


    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden mt-[20vh] mb-[20vh] bg-gradient-to-b from-background to-muted py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Explore Our Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay up-to-date on the latest healthcare innovations and thought
            leadership.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            style={{ y: y1, rotate }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative bg-card rounded-3xl p-6 shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl"></div>
            <img
              src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/664e2389903487ba78a7ec53_Untitled%20design-13.png"
              alt="Digital Therapeutics"
              className="w-full h-48 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Digital Therapeutics Decoded
            </h3>
            <p className="text-sm text-muted-foreground">
              A Guide to Understanding DTx and Why They're Worth Your Attention
            </p>
            <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mt-2">
              Thought Leadership
            </span>
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative bg-card rounded-3xl p-6 shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl"></div>
            <img
              src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/66327831c53bb8c459a9b605_Untitled%20design-7.webp"
              alt="Equity in Tech"
              className="w-full h-48 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Equity in Tech</h3>
            <p className="text-sm text-muted-foreground">
              An International Women's Day Conversation with Caroline Nieto,
              Significo's CPO
            </p>
            <span className="inline-block bg-secondary/10 text-secondary text-xs px-2 py-1 rounded-full mt-2">
              Thought Leadership
            </span>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            className="inline-block bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW ALL ARTICLES
          </motion.a>
        </motion.div>
      </div>
      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #000 1px, transparent 1px);
          background-size: 20px 20px;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .container {
          perspective: 1000px;
        }
        .bg-card {
          transform-style: preserve-3d;
          transform: translate3d(var(--move-x), var(--move-y), 0);
          transition: transform 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}



