"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Image from "next/image"

const backgroundColors = [
  'bg-gray-100',
  'bg-blue-100',
  'bg-green-100',
  'bg-yellow-100',
  'bg-pink-100',
]

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [bgColorIndex, setBgColorIndex] = useState(0)

  useEffect(() => {
    setIsTransitioning(true)
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false)
    }, 2000)

    return () => {
      clearTimeout(transitionTimer)
    }
  }, [pathname])

  useEffect(() => {
    const colorTimer = setInterval(() => {
      setBgColorIndex((prevIndex) => (prevIndex + 1) % backgroundColors.length)
    }, 5000)

    return () => {
      clearInterval(colorTimer)
    }
  }, [])

  const currentBgColor = backgroundColors[bgColorIndex]

  const overlayVariants = {
    initial: { 
      clipPath: 'circle(0% at 50% 50%)',
    },
    animate: { 
      clipPath: 'circle(150% at 50% 50%)',
      transition: {
        duration: 1.5,
        ease: [0.76, 0, 0.24, 1],
      }
    },
    exit: { 
      clipPath: 'circle(0% at 50% 50%)',
      transition: {
        duration: 1.5,
        ease: [0.76, 0, 0.24, 1],
      }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 3, duration: 0.5 } },
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="transition"
            className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden ${currentBgColor}`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={overlayVariants}
          >
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/gif/BeFoundTranstion.gif"
                alt="Be Found Online Animated Logo"
                width={600}
                height={600}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        key={pathname}
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        {children}
      </motion.div>
    </>
  )
}