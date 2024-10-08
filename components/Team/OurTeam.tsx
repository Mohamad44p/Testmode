"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  imgSrc: string;
}

interface TeamGridProps {
  membersData: TeamMember[];
}

const SvgPath = ({ progress }: { progress: number }) => (
  <svg
    className="absolute bottom-0 left-0 w-full h-24 pointer-events-none"
    style={{ zIndex: 1 }}
  >
    <motion.path
      d={`M0,24 C${50 + progress * 50},${48 - progress * 24} ${
        100 - progress * 50
      },${progress * 24} 100,24`}
      fill="none"
      stroke="rgba(59, 130, 246, 0.7)"
      strokeWidth="3"
      strokeDasharray="0 1"
      style={{
        pathLength: progress,
        strokeDashoffset: 1 - progress,
      }}
    />
  </svg>
);

const MemberCard = ({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const rotation = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity, y, rotate: rotation }}
      className="group relative"
    >
      <Card className="overflow-hidden transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl bg-gradient-to-br from-blue-100 to-purple-100">
        <CardContent className="p-0 relative">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={member.imgSrc}
              alt={member.name}
              className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-300 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            <Badge variant="secondary" className="mt-2">
              {member.position}
            </Badge>
          </div>
        </CardContent>
      </Card>
      <SvgPath progress={smoothProgress.get()} />
    </motion.div>
  );
};

export default function Component({ membersData }: TeamGridProps) {
  const [columns, setColumns] = useState(4);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 640) setColumns(2);
      else if (width < 1024) setColumns(3);
      else setColumns(4);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const updateLayout = () => {
      const children = Array.from(grid.children);
      children.forEach((child, index) => {
        const row = Math.floor(index / columns);
        const col = index % columns;
        const offset = row % 2 === 0 ? 0 : 0.5;
        const newCol = col + offset;
        const element = child as HTMLElement;
        element.style.gridColumn = `${newCol + 1} / span 1`;
        element.style.transform = `translateY(${row % 2 === 0 ? "0" : "2rem"})`;
      });
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [columns]);

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold mb-16 text-center text-gray-800">
          Meet our team
        </h1>
        <div
          ref={gridRef}
          className="grid gap-8 md:gap-12"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            gridAutoRows: "minmax(250px, auto)",
          }}
        >
          {membersData.map((member, index) => (
            <MemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
