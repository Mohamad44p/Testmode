/* eslint-disable react/no-unescaped-entities */
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const teamMembers = [
  {
    id: "01",
    name: "Adrienne Lindsey-Carr",
    role: "Campaign & Content Marketing Manager",
    image: "/images/Carecter1.jpeg",
  },
  {
    id: "02",
    name: "Adrián Rubio",
    role: "VP of Engineering",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "03",
    name: "Akhil Tak",
    role: "Senior Backend Engineer",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "04",
    name: "Alex Blair",
    role: "Director of Brand Strategy",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "05",
    name: "Alexander Jäkel",
    role: "Director of Finance and Controlling",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "06",
    name: "Allison Palmer",
    role: "Product Manager",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "07",
    name: "Babatunde Ogunyede",
    role: "Junior System Administrator",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "07",
    name: "Babatunde Ogunyede",
    role: "Junior System Administrator",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "08",
    name: "Babatunde Ogunyede",
    role: "Junior System Administrator",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "09",
    name: "Babatunde Ogunyede",
    role: "Junior System Administrator",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "10",
    name: "Babatunde Ogunyede",
    role: "Junior System Administrator",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "11",
    name: "Babatunde Ogunyede",
    role: "Junior System Administrator",
    image: "/placeholder.svg?height=400&width=400",
  },
];

export default function Component() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerRect, setContainerRect] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerRect({ width: rect.width, height: rect.height });
    }
  }, []);

  return (
    <div
      className="container mx-auto px-4 py-16 overflow-hidden"
      ref={containerRef}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="inline-block rounded-full bg-black text-white text-xs px-3 py-1 mb-4"
        >
          MEET THE VISIONARIES
        </motion.div>
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          The Significo Team
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          We saw a need in healthcare. To craft technology that puts people at
          the center. We are a team of technologists, artists, rule-breakers,
          and dreamers that set out to build better technology, and a better
          company while we're at it.
        </p>
      </motion.div>

      <div className="relative">
        <AnimatePresence>
          {hoveredMember && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                translateX: "-50%",
                translateY: "-50%",
                zIndex: 10,
              }}
            >
              <motion.img
                src={teamMembers.find((m) => m.id === hoveredMember)?.image}
                alt="Team member"
                className="w-80 h-80 rounded-full object-cover shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center justify-between p-4 mb-4 rounded-lg transition-all duration-300 ease-in-out ${
                hoveredMember === member.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white transform scale-105 shadow-lg"
                  : "bg-white hover:bg-gray-100 shadow"
              }`}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="flex items-center">
                <span className="text-2xl font-bold mr-4 opacity-50">
                  {member.id}
                </span>
                <div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p
                    className={`${
                      hoveredMember === member.id
                        ? "text-blue-200"
                        : "text-gray-600"
                    }`}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold"
              >
                {member.name.charAt(0)}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
