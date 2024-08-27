"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Article {
  image: string;
  tag: string;
  title: string;
  author: {
    name: string;
    avatar: string;
    initials: string;
  };
  date: string;
  readTime: string;
  excerpt: string;
}

interface ThoughtLeadershipSectionProps {
  category: string;
  description: string;
  articles: Article[];
}

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-70" />
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-200"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            animation: `float ${Math.random() * 10 + 5}s linear infinite`,
            opacity: Math.random() * 0.5 + 0.25,
          }}
        />
      ))}
    </div>
  );
};

export default function Component({
  category,
  description,
  articles,
}: ThoughtLeadershipSectionProps) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 lg:py-48 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-800"
    >
      <ParticleBackground />
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-grid-blue-200/[0.2] -z-10"
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ y: textY }}
          className="flex flex-col justify-between gap-8 md:flex-row md:items-end mb-[20vh]"
        >
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {category}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
          <Link
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-full transition-all duration-200 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            href="#"
          >
            VIEW ALL <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
                    {article.tag}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-4 text-2xl font-bold leading-tight text-gray-800 hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="mb-4 text-gray-600">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-10 h-10 border-2 border-blue-200">
                      <AvatarImage
                        alt={article.author.name}
                        src={article.author.avatar}
                      />
                      <AvatarFallback>{article.author.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-800">
                        {article.author.name}
                      </span>
                      <div className="text-xs text-gray-500">
                        <span>{article.date}</span>
                        <span className="mx-1">•</span>
                        <span>{article.readTime} read</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
