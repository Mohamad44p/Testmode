"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TypewriterEffect = ({ text }: { text?: string }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!text) return;

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [text]);

  return <span>{displayText}</span>;
};

interface Project {
  title: {
    rendered: string;
  };
  featured_image: string;
  custom_fields: {
    project_title?: string;
    short_description?: string;
    category_?: string[];
    services?: string[];
    client_name?: string;
  };
}

export default function FirstSec({ project }: { project: Project }) {
  if (!project || !project.custom_fields) {
    return <div>Loading...</div>;
  }

  const imageUrl = project.featured_image || '/placeholder.svg?height=1800&width=1400';

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
        className="border-t border-gray-200 mb-12"
      />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 space-y-10"
        >
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm font-semibold tracking-wider text-indigo-600 uppercase"
            >
              {project.custom_fields.category_?.[0] || "Case Study"}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-5xl sm:text-6xl font-bold leading-tight text-gray-900"
            >
              {project.custom_fields.project_title || project.title.rendered}
            </motion.h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              <TypewriterEffect text={project.custom_fields.short_description} />
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-xl font-semibold text-gray-800">Services:</p>
            <div className="flex flex-wrap gap-3">
              {project.custom_fields.services?.map((service, index) => (
                <motion.span
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2 + index * 0.2 }}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-indigo-100 text-indigo-800 transition-all hover:bg-indigo-200"
                >
                  {service}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="space-y-2"
          >
            <p className="text-xl font-semibold text-gray-800">Client:</p>
            <p className="text-lg text-gray-600">{project.custom_fields.client_name}</p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1"
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <Image
              src={imageUrl}
              alt="Project featured image"
              width={1400}
              height={1800}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}