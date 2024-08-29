/* eslint-disable react/no-unescaped-entities */
"use client";

import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useCallback, useState } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Search, X } from "lucide-react";
import BlogPostHero from "@/components/Blog/BlogPostHero";
import TestOne from "@/components/Blog/TestOne";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import BlogPostPage from "./[id]/page";

gsap.registerPlugin(ScrollTrigger);

interface ArticleProps {
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

const allArticles: ArticleProps[] = [
  {
    image: "/images/Image1.webp",
    tag: "Thought Leadership",
    title:
      "Design with a Purpose: An Interview with Significo's Human-Centric Design Team",
    author: {
      name: "Adrienne Lindsey-Carr",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AL",
    },
    date: "Aug 22, 2024",
    readTime: "2 min",
    excerpt:
      "Dive into the world of human-centric design with Significo's innovative team. Learn how they're reshaping the future of user experiences.",
  },
  {
    image: "/images/Image2.png",
    tag: "Healthcare",
    title: "Personalizing Healthcare Technology",
    author: {
      name: "Dr. Jana Schmidt",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JS",
    },
    date: "Aug 5, 2024",
    readTime: "2 min",
    excerpt:
      "Explore the latest advancements in personalized healthcare technology and how it's revolutionizing patient care and treatment outcomes.",
  },
  {
    image: "/images/Image3.webp",
    tag: "Digital Therapeutics",
    title: "Insights into Digital Therapeutics from Significo's DTx Team",
    author: {
      name: "Matthew Preston",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MP",
    },
    date: "Aug 6, 2024",
    readTime: "2 min",
    excerpt:
      "Uncover the potential of digital therapeutics with Significo's DTx team. Learn how technology is transforming traditional approaches to healthcare.",
  },
];

const categories = [
  "All",
  "Thought Leadership",
  "Healthcare",
  "Digital Therapeutics",
  "Technology",
  "Design",
];

const changeBodyBackgroundColor = () => {
  gsap.utils
    .toArray<HTMLElement>(".section")
    .forEach((section: HTMLElement) => {
      const sectionElement = section as HTMLElement;
      const color = sectionElement.dataset.color;

      ScrollTrigger.create({
        trigger: sectionElement,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          if (color) {
            document.body.setAttribute("theme", color);
          }
        },
        onEnterBack: () => {
          if (color) {
            document.body.setAttribute("theme", color);
          }
        },
      });
    });
};

export default function AllBlogPage() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    changeBodyBackgroundColor();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.clearMatchMedia();
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.update();
      ScrollTrigger.refresh();
    };
  }, []);

  const [filteredArticles, setFilteredArticles] = useState(allArticles);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFiltering, setIsFiltering] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleFilter = useCallback(() => {
    setIsFiltering(true);
    const filtered = allArticles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || article.tag === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredArticles(filtered);
    setTimeout(() => setIsFiltering(false), 300);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleFilter();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, selectedCategory, handleFilter]);

  const handleClearSearch = useCallback(() => {
    setSearchTerm("");
    setSelectedCategory("All");
    setFilteredArticles(allArticles);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div
      data-color="White "
    className="bg-gray-50 min-h-screen section">
      <BlogPostHero />
      <motion.div
        className="container mx-auto px-4 py-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          variants={itemVariants}
        >
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">
              Featured Articles
            </h2>
            <p className="text-gray-600 mb-6">
              Explore our curated selection of thought-provoking content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-10 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                />
                {searchTerm && (
                  <motion.button
                    onClick={handleClearSearch}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="h-4 w-4" />
                  </motion.button>
                )}
              </div>
              <Select
                onValueChange={setSelectedCategory}
                value={selectedCategory}
              >
                <SelectTrigger className="w-full sm:w-[150px] transition-all duration-300 focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleFilter}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  <Search className="mr-2 h-4 w-4" /> Search
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={itemVariants}
            >
              {categories.map((category) => (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`text-xs transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "hover:bg-blue-100"
                    }`}
                  >
                    {category}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={isFiltering ? "filtering" : "not-filtering"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6"
            >
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
                        {article.tag}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-xl font-bold leading-tight text-gray-800 hover:text-blue-600 transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-600">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8 border-2 border-blue-200">
                          <AvatarImage
                            alt={article.author.name}
                            src={article.author.avatar}
                          />
                          <AvatarFallback>
                            {article.author.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-gray-800">
                            {article.author.name}
                          </span>
                          <div className="text-xs text-gray-500">
                            <span>{article.date}</span>
                            <span className="mx-1">•</span>
                            <span>{article.readTime} read</span>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ x: shouldReduceMotion ? 0 : 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={`/blog/${index}`}
                          className="inline-flex items-center justify-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200 group"
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <h3 className="text-2xl font-semibold text-gray-700">
                No articles found
              </h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
            </motion.div>
          )}
        </motion.div>
        <TestOne />
        <BlogPostPage/>
      </motion.div>
    </div>
  );
}
