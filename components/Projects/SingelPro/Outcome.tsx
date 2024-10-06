"use client";

import { motion } from "framer-motion";

interface Project {
  custom_fields: {
    outcome_title: string;
    outcome_description: string;
  };
}

export default function Outcome({ project }: { project: Project }) {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="flex flex-col md:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/3"
        >
          <h2 className="text-4xl font-light text-gray-800 mb-6">The Result</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-2/3"
        >
          <h3 className="text-3xl font-semibold text-indigo-600 mb-4">{project.custom_fields.outcome_title}</h3>
          <p className="text-lg text-gray-600 leading-relaxed">{project.custom_fields.outcome_description}</p>
        </motion.div>
      </div>
    </div>
  );
}