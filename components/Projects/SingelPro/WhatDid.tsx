'use client'

import { motion } from 'framer-motion'

export default function WhatDid({
  projects
}: {
  projects: {
    whatWeDid: string;
  };
}) {
  const opportunities = [
    {
      title: "User Engagement:",
      description: "Personalized Recommendations: Personalized recommendations based on users’ unique needs, health behavior, status (gathered from assessments), and preferences. This ensures that the guidance they receive aligns perfectly with their individual goals."
    },
    {
      title: "Nutrition Guidance:",
      description: "The app's nutrition tasks, cookbook, and nutrient calculator address the need for reliable and easy-to-access nutrition guidance. This can attract users seeking dietary solutions and contribute to the app's popularity."
    },
    {
      title: "Complete Health Approach:",
      description: "The coach app's focus on combining fitness, nutrition, and relaxation activities aligns with the growing interest in holistic health and well-being. This approach can attract a broader audience looking for comprehensive wellness solutions."
    },
    {
      title: "Data Insights:",
      description: "The app collects data on user activities and achievements. Players can leverage this data to gain insights into user behavior, preferences, and trends in health and wellness, enabling data-driven decision-making and resource allocation."
    },
    {
      title: "Integration Opportunities:",
      description: "Integration with the client's bonus program creates opportunities for cross-promotion and collaborative efforts with health insurance providers or other businesses interested in incentivizing healthy lifestyles."
    }
  ]

  return (
    <div className="p-6 flex flex-col md:flex-row gap-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/3"
      >
        <h2 className="text-5xl font-light leading-tight mb-6">What we did</h2>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:w-2/3"
      >
        <ul className="space-y-6">
          {opportunities.map((opportunity, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex"
            >
              <span className="mr-2 text-xl font-semibold" aria-hidden="true">•</span>
              <div>
                <span className="text-xl font-semibold">{opportunity.title}</span>{' '}
                <span className="text-gray-700">{opportunity.description}</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}