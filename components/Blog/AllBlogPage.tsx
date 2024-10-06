/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useCallback, useState } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
import Banner from "../Banner";

gsap.registerPlugin(ScrollTrigger);

interface BlogPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  yoast_head_json: {
    og_image: [{ url: string }];
  };
  content: { rendered: string };
  date: string;
  categories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  tags: number[];
}

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

export default function AllBlogPage({ BlogPosts }: { BlogPosts: BlogPost[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  const [filteredPosts, setFilteredPosts] = useState(BlogPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFiltering, setIsFiltering] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const categories = ["All", ...Array.from(new Set(BlogPosts.flatMap(post => post.categories.map(cat => cat.name))))];

  const handleFilter = useCallback(() => {
    setIsFiltering(true);
    const filtered = BlogPosts.filter((post) => {
      const matchesSearch =
        post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.rendered.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || post.categories.some(category => category.name === selectedCategory);
      return matchesSearch && matchesCategory;
    });
    setFilteredPosts(filtered);
    setTimeout(() => setIsFiltering(false), 300);
  }, [searchTerm, selectedCategory, BlogPosts]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleFilter();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, selectedCategory, handleFilter]);

  const handleClearSearch = useCallback(() => {
    setSearchTerm("");
    setSelectedCategory("All");
    setFilteredPosts(BlogPosts);
  }, [BlogPosts]);

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

  const latestPost = BlogPosts[0];
  const recentPosts = BlogPosts.slice(1, 3);

  return (
    <div
      data-color="White"
      className="bg-gray-50 min-h-screen section">
      <BlogPostHero latestPost={latestPost} recentPosts={recentPosts} />
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
                    className={`text-xs transition-all duration-200 ${selectedCategory === category
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
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.yoast_head_json.og_image[0]?.url || '/placeholder.jpg'}
                      alt={post.title.rendered}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
                        {post.categories[0]?.name || 'Uncategorized'}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-xl font-bold leading-tight text-gray-800 hover:text-blue-600 transition-colors duration-200">
                      {post.title.rendered}
                    </h3>
                    <div
                      className="mb-4 text-sm text-gray-600"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8 border-2 border-blue-200">
                          <AvatarFallback>
                            {post.title.rendered.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-gray-800">
                            Author Name
                          </span>
                          <div className="text-xs text-gray-500">
                            {mounted && (
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            )}
                            <span className="mx-1">•</span>
                            <span>5 min read</span>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ x: shouldReduceMotion ? 0 : 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={`/insights/${post.id}`}
                          passHref
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
          {filteredPosts.length === 0 && (
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
      </motion.div>
      <Banner
        ctaLink="/team"
        ctaText="Meet the Team"
        description="Learn more about the people behind the scenes."
        title="Our Team"
      />
    </div>
  );
}