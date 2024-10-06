'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Project {
  custom_fields: {
    sub_images: string[];
  };
}

export default function ImageGrid({ project }: { project: Project }) {
  const images = project.custom_fields.sub_images || [
    '/images/HorImage2.jpeg',
    '/images/HorImage3.jpeg',
    '/images/HorImage4.jpeg',
    '/images/HorImage5.jpeg',
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-gray-800 mb-12"
      >
        Project Showcase
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg"
          >
            <Image
              src={src}
              alt={`Project image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}