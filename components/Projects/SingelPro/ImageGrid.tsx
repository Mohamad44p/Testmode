'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ImageGrid({ projects }:{
  projects: {
    image: string;
  };
}) {
  const images = [
    '/images/HorImage2.jpeg',
    '/images/HorImage3.jpeg',
    '/images/HorImage4.jpeg',
    '/images/HorImage5.jpeg',
  ]

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative aspect-[3/5] rounded-3xl overflow-hidden shadow-lg"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
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