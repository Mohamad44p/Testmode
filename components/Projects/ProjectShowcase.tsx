"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useSWR from "swr";
import CardProject from "./CardProject";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: { rendered: string };
  acf: {
    project_title: string;
    description: string;
    projectimage: string;
    color: string;
    textcolor: string;
    category_: string[];
  };
}

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
};

const PAGE_SIZE = 6;

export default function Component() {
  const [page, setPage] = useState(1);
  const [animationDirection, setAnimationDirection] = useState(0);
  const { data, error } = useSWR<Project[]>(
    `https://befoundonline.ps/wp-json/wp/v2/project?acf_format=standard&per_page=${PAGE_SIZE}&page=${page}`,
    fetcher
  );

  const isLoading = !data && !error;

  const handlePrevPage = () => {
    setAnimationDirection(-1);
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setAnimationDirection(1);
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevPage();
      if (e.key === "ArrowRight") handleNextPage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (error) return <div>Failed to load projects</div>;

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-slate-950 to-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Projects
        </motion.h2>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center h-96"
            >
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </motion.div>
          ) : (
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 100 * animationDirection }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 * animationDirection }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {data?.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CardProject
                    id={project.id} // Add this line
                    title={project.acf.project_title}
                    description={project.acf.description}
                    imageUrl={project.acf.projectimage}
                    color={project.acf.color}
                    textColor={project.acf.textcolor}
                    categories={project.acf.category_}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className="flex justify-center mt-12 space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            onClick={handlePrevPage}
            disabled={page === 1 || isLoading}
            variant="outline"
            className="flex items-center px-6 py-3 text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <ChevronLeft className="mr-2 h-5 w-5" /> Previous
          </Button>
          <Button
            onClick={handleNextPage}
            disabled={!data || data.length < PAGE_SIZE || isLoading}
            variant="outline"
            className="flex items-center px-6 py-3 text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Next <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
