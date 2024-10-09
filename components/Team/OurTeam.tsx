"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  imgSrc: string;
}

interface TeamShowcaseProps {
  members: TeamMember[];
}

export default function TeamShowcase({ members }: TeamShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextMember = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
  };

  const prevMember = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + members.length) % members.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevMember();
      if (e.key === "ArrowRight") nextMember();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const getAdjacentIndex = (offset: number) =>
    (currentIndex + offset + members.length) % members.length;

  if (!members || members.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-xl text-gray-600">No team members available</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden flex flex-col items-center justify-center">
      <div className="relative w-full max-w-6xl aspect-[16/9]">
        <AnimatePresence initial={false} custom={direction}>
          {[-1, 0, 1].map((offset) => {
            const member = members[getAdjacentIndex(offset)];
            return (
              <motion.div
                key={`${member.id}-${offset}`}
                custom={direction}
                initial={{
                  scale: offset === 0 ? 1 : 0.8,
                  x: `${offset * 40}%`,
                  y: offset === 0 ? 0 : "5%",
                  zIndex: offset === 0 ? 2 : 1,
                  rotate: offset * -5,
                  opacity: offset === 0 ? 1 : 0.8,
                }}
                animate={{
                  scale: offset === 0 ? 1 : 0.8,
                  x: `${offset * 40}%`,
                  y: offset === 0 ? 0 : "5%",
                  zIndex: offset === 0 ? 2 : 1,
                  rotate: offset * -5,
                  opacity: offset === 0 ? 1 : 0.8,
                }}
                exit={{
                  scale: 0.8,
                  x: `${-direction * 40}%`,
                  y: "5%",
                  zIndex: 1,
                  rotate: direction * 5,
                  opacity: 0.8,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-0 w-full h-full flex flex-col items-center"
              >
                <div
                  className={`relative w-full h-full ${
                    offset !== 0 ? "overflow-hidden" : ""
                  }`}
                >
                  <Image
                    src={member.imgSrc}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="grayscale"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full text-center pb-4">
                  <h2 className="text-3xl font-bold">{member.name}</h2>
                  <p className="text-xl">{member.position}</p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
          <span className="text-white text-sm">SWIPE</span>
        </div>
      </div>
      <div className="w-full max-w-6xl h-px bg-gray-300 mt-8"></div>
    </div>
  );
}
