"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TypewriterEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
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
  acf: {
    project_title: string;
    description: string;
    projectimage: string;
    category_: string[];
    services: string[];
    client: string;
  };
}

export default function FirstSec({ project }: { project: Project }) {
  useEffect(() => {
    console.log("Project data:", project);
    console.log("ACF data:", project.acf);
    console.log("Services:", project.acf?.services);
    console.log("Client:", project.acf?.client);
  }, [project]);

  if (!project || !project.acf) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
        className="border-t border-gray-200 mb-8"
      />
      <div className="flex flex-col lg:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm font-semibold tracking-wider text-gray-600"
            >
              • {project.acf.category_?.[0] || "Case Study"}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-5xl font-bold leading-tight"
            >
              {project.acf.project_title || project.title.rendered}
            </motion.h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              <TypewriterEffect text={project.acf.description} />
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-xl font-semibold">Services:</p>
            <div className="flex flex-wrap gap-3">
              {project.acf.services?.map((service, index) => (
                <motion.span
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2 + index * 0.2 }}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-purple-100 text-purple-800 transition-all hover:bg-purple-200"
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
          >
            <p className="text-xl font-semibold">Client:</p>
            {project.acf.client}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1"
        >
          <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={project.acf.projectimage}
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