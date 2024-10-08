"use client";

import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

export default function ProjectsHero() {
  const textRef = useRef<SVGTextElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = textRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [controls]);

  useEffect(() => {
    if (textRef.current && isVisible) {
      const text = textRef.current;
      let angle = 0;

      const animate = () => {
        angle = (angle + 0.5) % 360;
        text.setAttribute("transform", `rotate(${angle}, 50, 50)`);
        requestAnimationFrame(animate);
      };

      animate();
    }
  }, [isVisible]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <div className="max-w-[1400px] mx-auto my-[20vh] p-6">
      <div className="relative">
        <motion.h1
          className="text-8xl font-black leading-tight mb-4"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          Taking digital product to the next level
        </motion.h1>
        <motion.div
          className="border-t border-gray-300 mt-4"
          initial={{ scaleX: 0 }}
          animate={controls}
          variants={{
            visible: {
              scaleX: 1,
              transition: {
                delay: 0.4,
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
        ></motion.div>
        <div className="absolute -bottom-8 right-0">
          <motion.div
            className="relative w-32 h-32"
            initial="hidden"
            animate={controls}
            variants={circleVariants}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  fill="none"
                />
              </defs>
              <circle cx="50" cy="50" r="49" fill="#D1F55F" stroke="none" />
              <text
                ref={textRef}
                className="fill-black text-[7px] font-medium uppercase"
              >
                <textPath href="#circlePath" startOffset="0%">
                  Made with passion - Made with passion - Made with passion -
                  Made with passion -
                </textPath>
              </text>
            </svg>
            <Heart
              className="text-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              size={60}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
      <p className="text-xl max-w-[92%] mt-10">
        At Be Found Online, we offer a comprehensive range of services tailored to your needs, whether it’s SEO, PPC, web design, social media, email marketing, or more. Our portfolio showcases how our innovative digital marketing solutions have helped clients achieve remarkable results. Dive in to see how we can elevate your brand together!
      </p>
    </div>
  );
}
