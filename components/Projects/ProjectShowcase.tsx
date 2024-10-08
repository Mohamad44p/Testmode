"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardProject from "./CardProject";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: {
    rendered: string;
  };
  link: string;
  custom_fields: {
    short_description: string;
    bg_color: string;
    text_color: string;
  };
  featured_image: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
  totalPages: number;
  currentPage: number;
  loading: boolean;
  fetchMoreProjects: () => Promise<void>;
}

const PAGE_SIZE = 4;

export default function ProjectShowcase({
  projects,
  totalPages,
  currentPage,
  loading,
  fetchMoreProjects,
}: ProjectShowcaseProps) {
  const [animationDirection, setAnimationDirection] = useState(0);
  const [page, setPage] = useState(1);

  const handlePrevPage = () => {
    setAnimationDirection(-1);
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = async () => {
    setAnimationDirection(1);
    const nextPage = page + 1;
    setPage(nextPage);

    if (nextPage > projects.length / PAGE_SIZE && currentPage < totalPages) {
      await fetchMoreProjects();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevPage();
      if (e.key === "ArrowRight") handleNextPage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const paginatedProjects = projects.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

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
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 100 * animationDirection }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 * animationDirection }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {paginatedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CardProject
                  id={project.id}
                  title={project.title.rendered}
                  description={project.custom_fields.short_description}
                  imageUrl={project.featured_image}
                  color={project.custom_fields.bg_color}
                  textColor={project.custom_fields.text_color}
                  categories={[]}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        <motion.div
          className="flex justify-center mt-12 space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            onClick={handlePrevPage}
            disabled={page === 1}
            variant="outline"
            className="flex items-center px-6 py-3 text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <ChevronLeft className="mr-2 h-5 w-5" /> Previous
          </Button>
          <Button
            onClick={handleNextPage}
            disabled={
              (page * PAGE_SIZE >= projects.length &&
                currentPage >= totalPages) ||
              loading
            }
            variant="outline"
            className="flex items-center px-6 py-3 text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            {loading ? "Loading..." : "Next"}{" "}
            {!loading && <ChevronRight className="ml-2 h-5 w-5" />}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
