"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Image from "next/image"

const colorSchemes = [
  { bg: 'from-[#3a7e7d] to-[#aedee0]', text: 'text-[#f2efe4]' },
  { bg: 'from-[#f5f19c] to-[#f4a261]', text: 'text-[#262526]' },
  { bg: 'from-[#262526] to-[#3a7e7d]', text: 'text-[#f2efe4]' },
  { bg: 'from-[#aedee0] to-[#f5f19c]', text: 'text-[#262526]' },
  { bg: 'from-[#f4a261] to-[#3a7e7d]', text: 'text-[#f2efe4]' },
]

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [colorIndex, setColorIndex] = useState(0)

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
      setColorIndex((prevIndex) => (prevIndex + 1) % colorSchemes.length)
    }, 5000)

    return () => {
      clearInterval(colorTimer)
    }
  }, [])

  const { bg: backgroundColor, text: textColor } = colorSchemes[colorIndex]

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

  const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0, 
      transition: { 
        duration: 1.5, 
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }
    },
    exit: { 
      scale: 0, 
      rotate: 180, 
      transition: { 
        duration: 0.5 
      }
    }
  }

  const textContainerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { 
        delayChildren: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01]
      }
    },
    exit: { 
      y: -20, 
      opacity: 0, 
      transition: { 
        duration: 0.5 
      }
    }
  }

  const underlineVariants = {
    initial: { scaleX: 0 },
    animate: { 
      scaleX: 1,
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    exit: { 
      scaleX: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="transition"
            className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-r ${backgroundColor}`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={overlayVariants}
          >
            <div className="flex flex-col items-center justify-center">
              <motion.div
                className="mb-8"
                variants={logoVariants}
              >
                <Image
                  src="/BeFoundLogo.png"
                  alt="Be Found Online Logo"
                  width={100}
                  height={100}
                  className={`rounded-full ${textColor === 'text-[#f2efe4]' ? 'bg-[#f2efe4]' : 'bg-[#262526]'}`}
                />
              </motion.div>
              <motion.div
                variants={textContainerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.h1 
                  className={`text-4xl md:text-6xl lg:text-8xl font-bold ${textColor} mb-4 text-center`}
                  variants={textVariants}
                >
                  Be Found Online
                </motion.h1>
                <motion.div 
                  className={`w-full h-1 ${textColor === 'text-[#f2efe4]' ? 'bg-[#f2efe4]' : 'bg-[#262526]'}`}
                  variants={underlineVariants}
                />
                <motion.p
                  className={`text-lg md:text-xl lg:text-2xl ${textColor} mt-4 text-center`}
                  variants={textVariants}
                >
                  Transforming your digital presence
                </motion.p>
              </motion.div>
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