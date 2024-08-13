import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { TextReveal } from "./ui/typography";

interface HeroBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export default function Banner({
  title,
  description,
  ctaText,
  ctaLink,
}: HeroBannerProps) {
  const controls = useAnimation();
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, [controls]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      ref={bannerRef}
      className="relative overflow-hidden bg-[#FFFF99] py-16 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        <motion.div className="lg:w-1/2 space-y-6" variants={itemVariants}>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-black"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.div variants={itemVariants}>
            <Link href={ctaLink}>
              <span className="inline-block bg-black text-white px-6 py-3 rounded-none font-semibold hover:bg-gray-800 transition-colors duration-300">
                <TextReveal>{ctaText}</TextReveal>
              </span>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="lg:w-1/2 mt-8 lg:mt-0 flex items-center justify-end space-x-4"
          variants={itemVariants}
        >
          <p className="text-lg md:text-xl text-black  text-start max-w-xs">
            {description}
          </p>
          <div className="relative w-32 h-32">
            <motion.div
              className="w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[8px]">
                  <textPath href="#circlePath" className="uppercase">
                    Welcome to a new era of care • Welcome to a new era of care
                    •
                  </textPath>
                </text>
              </svg>
            </motion.div>
            <button
              onClick={scrollToTop}
              className="absolute border-black text-black border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-transparent flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
