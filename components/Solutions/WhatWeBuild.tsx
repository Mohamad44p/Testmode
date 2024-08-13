import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const projects = [
  {
    title: "A Smart Health And Wellness Coach For A Large Insurance Company",
    description:
      "Significo developed a digital personal coach providing tailored fitness, nutrition, and relaxation advice, all based on scientific principles to enhance health and wellbeing.",
    image: "/images/DSPPU.png",
  },
  {
    title: "AI-Powered Financial Advisor",
    description:
      "We created an intelligent financial advisor that uses machine learning to provide personalized investment strategies and financial planning advice.",
    image: "/images/BR.jpeg",
  },
  {
    title: "Smart City Traffic Management System",
    description:
      "Our team developed an innovative traffic management system that uses real-time data and AI to optimize traffic flow and reduce congestion in urban areas.",
    image: "/images/Flick.jpeg",
  },
  {
    title: "Sustainable Energy Consumption Tracker",
    description:
      "We built a platform that helps businesses and individuals track and optimize their energy consumption, promoting sustainability and reducing carbon footprints.",
    image: "/images/Liner.png",
  },
];

export default function WhatWeBuild() {
  return (
    <div data-color="Almond" className="w-full py-24">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl font-bold text-center mb-40"
      >
        What we&apos;ve built
      </motion.h2>
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} index={index} />
      ))}
    </div>
  );
}

function ProjectItem({
  project,
  index,
}: {
  project: {
    title: string;
    description: string;
    image: string;
  };
  index: number;
}) {
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

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={`flex flex-col lg:flex-row items-center justify-between w-full mb-80 ${
        index % 2 === 0 ? "" : "lg:flex-row-reverse"
      }`}
    >
      <ProjectImage src={project.image} index={index} />
      <ProjectContent {...project} index={index} />
    </motion.div>
  );
}

function ProjectImage({ src, index }: { src: string; index: number }) {
  return (
    <motion.div
      className={`w-full mx-4 lg:w-1/2 px-8 ${
        index % 2 === 0 ? "lg:pl-0" : "lg:pr-0"
      }`}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      }}
    >
      <div className="overflow-hidden rounded-2xl shadow-2xl">
        <Image
          src={src}
          alt="Project image"
          width={1200}
          height={800}
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </motion.div>
  );
}

function ProjectContent({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const AnimatedText = ({ text }: { text: string }) => (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="inline-block"
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <motion.div
      className={`w-full lg:w-1/2 space-y-8 px-8 ml-5 ${
        index % 2 === 0 ? "lg:pr-0" : "lg:pl-0"
      }`}
      variants={{
        hidden: { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      }}
    >
      <motion.h3 className="text-5xl font-bold leading-tight">
        <AnimatedText text={title} />
      </motion.h3>
      <motion.p className="text-2xl text-gray-600 leading-relaxed">
        <AnimatedText text={description} />
      </motion.p>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: "easeOut",
            },
          },
        }}
      >
        <Button className="bg-orange-500 hover:bg-orange-600 transition-colors duration-300 text-xl py-6 px-8 rounded-xl">
          LEARN MORE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-3 h-6 w-6"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Button>
      </motion.div>
      <motion.div
        className="flex space-x-4 mt-8"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              },
            }}
          >
            <Avatar className="h-16 w-16">
              <AvatarImage
                src={`https://i.pravatar.cc/150?img=${i}`}
                alt={`Avatar ${i}`}
              />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
