"use client"

import { useState } from "react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'
import Image from "next/image"

interface TeamMember {
  id: string
  name: string
  position: string
  imgSrc: string
  bg: string
}

interface TeamShowcaseProps {
  members: TeamMember[]
}

export default function TeamShowcase({ members }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="container mx-auto px-4 py-3">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {members.map((member) => (
          <motion.div
            key={member.id}
            className="mb-6 break-inside-avoid relative group"
            onHoverStart={() => setHoveredId(member.id)}
            onHoverEnd={() => setHoveredId(null)}
          >
            <motion.div
              className="absolute -inset-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(90deg, ${member.bg}, ${member.bg}00)`,
              }}
              initial={false}
              animate={{
                background: [
                  `linear-gradient(0deg, ${member.bg}, ${member.bg}00)`,
                  `linear-gradient(90deg, ${member.bg}, ${member.bg}00)`,
                  `linear-gradient(180deg, ${member.bg}, ${member.bg}00)`,
                  `linear-gradient(270deg, ${member.bg}, ${member.bg}00)`,
                  `linear-gradient(360deg, ${member.bg}, ${member.bg}00)`,
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "linear",
              }}
            />
            <Card className="flex flex-col h-full relative z-10 bg-background shadow-md group-hover:shadow-xl transition-shadow duration-300">
              <CardTitle className="overflow-hidden relative">
                <motion.div
                  className="w-full h-0 pb-[100%] relative"
                  initial={{ filter: 'brightness(0.5) blur(0px)' }}
                  animate={{ filter: hoveredId === member.id ? 'brightness(1) blur(0px)' : 'brightness(0.5) blur(0px)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-black" style={{ mixBlendMode: 'color' }} />
                  <motion.div
                    className="absolute inset-0 bg-pixelated"
                    style={{
                      backgroundImage: `url(${member.imgSrc})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === member.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Image
                    src={member.imgSrc}
                    alt={member.name}
                    width={500}
                    height={500}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </motion.div>
              </CardTitle>
              <CardContent className="flex-grow p-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.position}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}