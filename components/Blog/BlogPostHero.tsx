"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  main_image: string;
  small_description: string;
  categories: string[];
  tags: string[];
}

export default function BlogPostHero({ latestPost, recentPosts }: { latestPost: BlogPost; recentPosts: BlogPost[] }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div
      className="container mt-16 border-t border-black mx-auto px-4 py-12 md:py-16"
      ref={ref}
    >
      <motion.div
        className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={stagger}
      >
        <motion.div variants={fadeInUp}>
          <div className="text-sm font-semibold uppercase flex items-center gap-x-3 tracking-wide text-gray-600">
            <span
              className="bg-black rounded-full h-3 w-3"
              aria-hidden="true"
            />
            <span>Welcome to the future</span>
          </div>
          <motion.h1
            className="mt-2 text-5xl md:text-6xl font-normal tracking-tight text-gray-900"
            style={{ fontFamily: "'Courier Prime', monospace" }}
            variants={fadeInUp}
          >
            Insights
          </motion.h1>
        </motion.div>
        <motion.p
          className="mt-4 max-w-2xl text-lg text-gray-600"
          style={{ fontFamily: "'Inter', sans-serif" }}
          variants={fadeInUp}
        >
          Explore insightful articles, comprehensive resources, and the latest
          in industry news, all offering distinctive viewpoints on healthcare
          technology. Our team, driven by a relentless pursuit of knowledge and
          excellence in every role, gathers here to share our discoveries and
          learnings.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid gap-8 md:grid-cols-3"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={stagger}
      >
        <motion.div className="md:col-span-2" variants={fadeInUp}>
          <motion.article
            className="overflow-hidden rounded-3xl bg-white shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div className="relative h-72 w-full" variants={fadeInUp}>
              <Image
                src={latestPost.main_image}
                alt="Featured article image"
                layout="fill"
                objectFit="cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-purple-400 px-3 py-1 text-sm font-semibold text-white">
                {latestPost.categories[0]}
              </span>
            </motion.div>
            <div className="p-6">
              <motion.h2
                className="mb-2 text-2xl font-bold text-black"
                style={{ fontFamily: "'Inter', sans-serif" }}
                variants={fadeInUp}
              >
                {latestPost.title}
              </motion.h2>
              <motion.p
                className="mb-4 text-black"
                style={{ fontFamily: "'Inter', sans-serif" }}
                variants={fadeInUp}
              >
                {latestPost.small_description}
              </motion.p>
              <Link href={`/insights/${latestPost.id}`}>
                <motion.button
                  className="inline-flex items-center text-sm font-semibold text-black hover:text-gray-300 transition-colors duration-200"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  whileHover={{ x: 5 }}
                >
                  READ NOW
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </motion.button>
              </Link>
            </div>
          </motion.article>
        </motion.div>

        <motion.div className="space-y-8" variants={stagger}>
          {recentPosts.map((post: BlogPost) => (
            <motion.article
              key={post.id}
              className="rounded-3xl bg-[#f8f7f4] p-6 shadow-sm"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <motion.h3
                className="mb-2 text-xl font-bold text-gray-900"
                style={{ fontFamily: "'Inter', sans-serif" }}
                variants={fadeInUp}
              >
                {post.title}
              </motion.h3>
              <motion.p
                className="mb-4 text-sm text-gray-600"
                style={{ fontFamily: "'Inter', sans-serif" }}
                variants={fadeInUp}
              >
                {post.small_description}
              </motion.p>
              <Link href={`/insights/${post.id}`}>
                <motion.button
                  className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-200"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  whileHover={{ x: 5 }}
                >
                  READ NOW
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </motion.button>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}