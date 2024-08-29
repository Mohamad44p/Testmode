"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  MotionValue,
} from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Code,
  Palette,
  ChartBar,
  Cpu,
} from "lucide-react";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=160&width=160",
    bio: "Crafting intuitive interfaces with a minimalist aesthetic.",
    github: "alicejohnson",
    twitter: "alicejohnsonux",
    linkedin: "alicejohnsonux",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    name: "Bob Smith",
    role: "Full Stack Developer",
    image: "/placeholder.svg?height=160&width=160",
    bio: "Bridging the gap between design and functionality with elegant code.",
    github: "bobsmith",
    twitter: "bobsmithdev",
    linkedin: "bobsmithdev",
    icon: <Code className="w-6 h-6" />,
  },
  {
    name: "Carol Williams",
    role: "Product Manager",
    image: "/placeholder.svg?height=160&width=160",
    bio: "Orchestrating the fusion of user needs and cutting-edge technology.",
    github: "carolwilliams",
    twitter: "carolwilliamspm",
    linkedin: "carolwilliamspm",
    icon: <ChartBar className="w-6 h-6" />,
  },
  {
    name: "David Brown",
    role: "AI Specialist",
    image: "/placeholder.svg?height=160&width=160",
    bio: "Pushing the boundaries of artificial intelligence and human potential.",
    github: "davidbrown",
    twitter: "davidbrownai",
    linkedin: "davidbrownai",
    icon: <Cpu className="w-6 h-6" />,
  },
];

const AnimatedPath = ({
  d,
  progress,
  index,
  total,
  treeWidth,
}: {
  d: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
  treeWidth: number;
}) => {
  const pathLength = useMemo(() => treeWidth / total, [treeWidth, total]);
  const pathOffset = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [pathLength, 0]
  );

  return (
    <motion.path
      d={d}
      fill="none"
      stroke="white"
      strokeWidth="1"
      strokeDasharray={pathLength}
      filter="url(#glow)"
      style={{ strokeDashoffset: pathOffset }}
    />
  );
};

const AnimatedCircle = ({
  cx,
  cy,
  index,
  total,
}: {
  cx: number;
  cy: number;
  index: number;
  total: number;
}) => {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r="3"
      fill="white"
      filter="url(#glow)"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.5, 1] }}
      transition={{
        delay: (index * 0.1) / total,
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};

const MonochromeTree = ({
  progress,
  memberCount,
}: {
  progress: MotionValue<number>;
  memberCount: number;
}) => {
  const treeWidth = memberCount * 500;
  const branchCount = memberCount * 5;

  const mainPathOffset = useTransform(progress, [0, 1], [treeWidth, 0]);

  return (
    <svg
      className="absolute top-1/2 transform -translate-y-1/2"
      width={treeWidth}
      height="300"
      viewBox={`0 0 ${treeWidth} 300`}
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.path
        d={`M0 150 L${treeWidth} 150`}
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeDasharray={treeWidth}
        filter="url(#glow)"
        style={{ strokeDashoffset: mainPathOffset }}
      />
      {[...Array(branchCount)].map((_, i) => (
        <AnimatedPath
          key={i}
          d={`M${(treeWidth / branchCount) * i} 150 Q${
            (treeWidth / branchCount) * (i + 0.5)
          } ${150 + (i % 2 ? 75 : -75)} ${
            (treeWidth / branchCount) * (i + 1)
          } 150`}
          progress={progress}
          index={i}
          total={branchCount}
          treeWidth={treeWidth}
        />
      ))}
      {[...Array(branchCount * 2)].map((_, i) => (
        <AnimatedCircle
          key={`node-${i}`}
          cx={(treeWidth / (branchCount * 2)) * i}
          cy={150 + (i % 2 ? 75 : -75)}
          index={i}
          total={branchCount * 2}
        />
      ))}
    </svg>
  );
};

const Particle = ({ index }: { index: number }) => {
  const randomX = useRef(Math.random() * 60 - 30);
  const randomY = useRef(Math.random() * 60 - 30);

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full shadow-lg shadow-white"
      animate={{
        x: [0, randomX.current, 0],
        y: [0, randomY.current, 0],
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: index * 0.2,
      }}
    />
  );
};

const SkillIcon = ({
  icon,
  isVisible,
}: {
  icon: React.ReactNode;
  isVisible: boolean;
}) => (
  <motion.div
    className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg"
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: isVisible ? 1 : 0, rotate: isVisible ? 0 : -180 }}
    transition={{ type: "spring", stiffness: 260, damping: 20, duration: 0.5 }}
  >
    {icon}
  </motion.div>
);

export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const smoothProgress = useSpring(scrollXProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft = 0;
    }
  }, []);

  return (
    <div className="bg-black h-screen overflow-hidden relative">
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
      <div
        ref={containerRef}
        className="h-full overflow-x-auto overflow-y-hidden whitespace-nowrap hide-scrollbar"
        style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
      >
        <div className="inline-block h-full">
          <motion.h2
            className="text-6xl font-bold text-center mb-24 text-white p-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            Our Visionary Team
          </motion.h2>
        </div>
        <MonochromeTree
          progress={smoothProgress}
          memberCount={teamMembers.length}
        />
        {teamMembers.map((member, index) => {
          const xProgress = useTransform(
            smoothProgress,
            [index / teamMembers.length, (index + 1) / teamMembers.length],
            [100, 0]
          );
          const opacity = useTransform(xProgress, [100, 60, 0], [0, 1, 1]);
          const scale = useTransform(xProgress, [100, 60, 0], [0.8, 1, 1]);
          const rotate = useTransform(xProgress, [100, 0], [45, 0]);

          return (
            <motion.div
              key={member.name}
              className="inline-block h-full w-screen align-top"
              style={{ scrollSnapAlign: "start" }}
            >
              <motion.div
                className="flex items-center justify-center h-full"
                style={{ opacity, scale, x: xProgress, rotate }}
              >
                <motion.div
                  className="bg-white p-0.5 rounded-2xl shadow-xl overflow-hidden w-80 h-96"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(255,255,255,0.2)",
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <div className="bg-black h-full rounded-xl p-6 flex flex-col justify-between relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0"
                      initial={false}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div>
                      <motion.div
                        className="relative w-40 h-40 mx-auto mb-6"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 20,
                          duration: 1.5,
                          delay: index * 0.2,
                        }}
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover border-2 border-white"
                        />
                        {[...Array(15)].map((_, i) => (
                          <Particle key={i} index={i} />
                        ))}
                      </motion.div>
                      <motion.h3
                        className="text-2xl font-semibold text-center mb-2 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                      >
                        {member.name}
                      </motion.h3>
                      <motion.p
                        className="text-sm text-center text-gray-400 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
                      >
                        {member.role}
                      </motion.p>
                    </div>
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.p
                          className="text-sm text-gray-300 text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                        >
                          {member.bio}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <motion.div
                      className="flex justify-center space-x-4 mt-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.9 + index * 0.2 }}
                    >
                      {["github", "twitter", "linkedin"].map((platform) => (
                        <motion.a
                          key={platform}
                          href={`https://${platform}.com/${
                            member[platform as keyof typeof member]
                          }`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-300 transition-colors"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {platform === "github" && <Github size={20} />}
                          {platform === "twitter" && <Twitter size={20} />}
                          {platform === "linkedin" && <Linkedin size={20} />}
                        </motion.a>
                      ))}
                    </motion.div>
                    <SkillIcon
                      icon={member.icon}
                      isVisible={hoveredIndex === index}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
