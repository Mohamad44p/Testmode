"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRightIcon, ExternalLinkIcon } from "lucide-react";

interface Project {
  id: number;
  title: {
    rendered: string;
  };
  link: string;
  acf: {
    project_title: string;
    description: string;
    projectimage: string;
  };
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-[1400px] mx-auto px-4 py-16"
    >
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h2>
        <p className="text-xl text-gray-600">Discover our latest work and innovations</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });
  const controls = useAnimation();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setPosition({ x: x * 15, y: y * 15 });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.1,
      },
    },
  };

  const imageVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.05,
      rotate: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const buttonVariants = {
    rest: { x: 0 },
    hover: {
      x: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="flex flex-col group bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
    >
      <motion.div
        className="relative overflow-hidden aspect-[16/9]"
        variants={imageVariants}
        initial="rest"
        whileHover="hover"
      >
        <motion.div
          className="w-full h-full"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setPosition({ x: 0, y: 0 })}
          style={{
            x: position.x,
            y: position.y,
            transition: "x 0.2s ease-out, y 0.2s ease-out",
          }}
        >
          <img
            src={project.acf.projectimage}
            alt={project.acf.project_title}
            className="w-full h-full object-cover transition-transform duration-300 ease-out transform group-hover:scale-110"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
      <motion.div
        className="flex flex-col space-y-4 p-6"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2,
            },
          },
        }}
      >
        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
          {project.acf.project_title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.acf.description.split("•").map((category, idx) => (
            <span
              key={idx}
              className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700 transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              {category.trim()}
            </span>
          ))}
        </div>
        <motion.a
          href={project.link}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary mt-2 transition-colors duration-300"
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
        >
          View Project <ExternalLinkIcon className="ml-1 h-4 w-4" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}