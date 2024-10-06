"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  custom_fields: {
    industry: string;
    team_members: string[];
  };
}

export default function SecSection({ project }: { project: Project }) {
  const teamMembers = project.custom_fields.team_members || Array(5).fill("/placeholder.svg?height=40&width=40");

  return (
    <div className="max-w-7xl mx-auto my-20 p-6 space-y-12">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
        className="border-t border-gray-200"
      />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-light text-gray-800"
        >
          Project Details
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col items-end space-y-2"
        >
          <h3 className="text-2xl font-semibold text-indigo-600">Industry</h3>
          <p className="text-xl text-gray-600">{project.custom_fields.industry}</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, delay: 1 }}
        className="border-t border-gray-200"
      />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="text-4xl font-light text-gray-800"
        >
          Our Team
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex -space-x-4 overflow-hidden"
        >
          {teamMembers.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + index * 0.1 }}
            >
              <Image
                src={src || "/placeholder.svg?height=60&width=60"}
                alt={`Team member ${index + 1}`}
                width={60}
                height={60}
                className="inline-block h-16 w-16 rounded-full ring-4 ring-white"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, delay: 2.5 }}
        className="border-t border-gray-200"
      />
    </div>
  );
}