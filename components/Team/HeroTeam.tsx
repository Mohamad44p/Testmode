"use client";

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedText = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      className="inline-block"
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: index * 0.1 },
            },
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function HeroTeam() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div data-color="Blond" className="container section mx-auto px-4 py-12">
      <div className="border-t border-black pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-black rounded-full mr-2" />
              <div className="text-sm font-semibold uppercase tracking-wider">
                <AnimatedText text="teamwork makes the dream work" />
              </div>
            </div>
            <motion.h1 className="text-5xl lg:text-6xl font-medium mb-6 leading-tight">
              <AnimatedText text="Passionate about making health more human." />
            </motion.h1>
          </div>
          <motion.p
            className="text-gray-600 text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <AnimatedText text="Our global team of experts and creative thinkers are dedicated to making empowering, engaging, and empathetic technology that impacts as many lives as possible. We are experts in data, design, healthcare, engineering, software, and more. And we're committed to creating a company culture around perpetual curiosity, relentlessly pushing boundaries, and pursuit of the highest standards of craft." />
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <motion.h2
              className="text-3xl font-light leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <AnimatedText text="A Diverse and Skilled Team of Problem-Solvers" />
            </motion.h2>
            <motion.p
              className="text-gray-600 text-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <AnimatedText text="Our team brings together a wide range of expertise and backgrounds, enabling us to tackle even the most complex challenges with curiosity and excellence." />
            </motion.p>
            <ul className="space-y-2">
              {[
                "Innovative Thinkers",
                "Collaborative Experts",
                "Solution-Oriented Professionals",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3 text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div ref={ref} className="flex justify-end items-start">
            <div className="w-4/5 aspect-square rounded-full overflow-hidden">
              <motion.img
                src="/images/TeamImage.jpeg"
                alt="Colorful abstract representation of diverse team"
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                drag
                dragConstraints={{
                  left: 100,
                  right: 100,
                  top: 100,
                  bottom: 100,
                }}
                dragSnapToOrigin={true}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                dragMomentum={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
