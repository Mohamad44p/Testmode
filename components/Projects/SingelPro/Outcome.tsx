"use client";

import { motion } from "framer-motion";

export default function Outcome({
  projects,
}: {
  projects: {
    outcome: string;
  };
}) {
  return (
    <div className="p-6 flex flex-col md:flex-row gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/3"
      >
        <h2 className="text-5xl font-light leading-tight mb-6">The Outcome</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:w-2/3"
      >
        <ul className="space-y-6">
          After launching the app, our client saw 3x growth in customer
          engagement on their digital platform. Not only does the Coach app
          offer valuable services to individuals seeking to manage their health
          and well-being, but it also helps our payer partner engage their
          members, make data-driven decisions, and monetize their content. ‍
        </ul>
      </motion.div>
    </div>
  );
}
