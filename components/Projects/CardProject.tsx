import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tag } from "lucide-react";
import Link from "next/link";

interface CardProjectProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  color: string;
  textColor: string;
  categories: string[];
}

export default function Component({
  id, // Add this line
  title,
  description,
  imageUrl,
  color,
  textColor,
  categories,
}: CardProjectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <Card
        className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl h-full flex flex-col"
        style={{ backgroundColor: color }}
      >
        <CardContent className="p-0 flex flex-col h-full">
          <div className="relative h-64 md:h-80 w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={`${title} project preview`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 transition-opacity duration-300"
              style={{ opacity: isHovered ? 0.7 : 0.5 }}
            />
          </div>
          <motion.div
            className="p-8 flex flex-col flex-grow"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((category, index) => (
                <motion.span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ease-in-out"
                  style={{
                    backgroundColor: `${textColor}10`,
                    color: textColor,
                    border: `1px solid ${textColor}40`,
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: `${textColor}20`,
                  }}
                >
                  <Tag size={12} className="mr-1" />
                  {category}
                </motion.span>
              ))}
            </div>
            <h3
              className="text-3xl font-bold mb-4"
              style={{ color: textColor }}
            >
              {title}
            </h3>
            <p
              className="text-base mb-6 flex-grow line-clamp-4"
              style={{ color: textColor }}
            >
              {description}
            </p>
            <Link href={`/projects/${id}`} passHref>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 ease-in-out mt-auto inline-block text-center"
                style={{
                  backgroundColor: textColor,
                  color: color,
                  boxShadow: isHovered
                    ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                    : "none",
                }}
              >
                View Project Details
              </motion.a>
            </Link>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
