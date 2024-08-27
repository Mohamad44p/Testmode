"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SecSection() {
  const teamMembers = Array(9)
    .fill(0)
    .map((_, i) => `/placeholder.svg?height=40&width=40`);

  return (
    <div className="max-w-screen-xl mx-auto my-[20vh] p-6 space-y-8">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
        className="border-t border-gray-200"
      />

      <div className="flex justify-between items-center">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-light"
        >
          Industry:
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl"
        >
          Insurance
        </motion.p>
      </div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, delay: 1 }}
        className="border-t border-gray-200"
      />

      <div className="flex justify-between items-center">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="text-3xl font-light"
        >
          Team:
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex -space-x-2 overflow-hidden"
        >
          {teamMembers.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + index * 0.1 }}
            >
              <Image
                src={src}
                alt={`Team member ${index + 1}`}
                width={40}
                height={40}
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
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
