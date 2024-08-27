"use client"

import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const cursorAnimation = useAnimation()

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    const mouseEnter = () => setIsVisible(true)
    const mouseLeave = () => setIsVisible(false)

    document.addEventListener("mousemove", mouseMove)
    
    const projectCards = document.querySelectorAll('.project-card')
    projectCards.forEach(card => {
      card.addEventListener("mouseenter", mouseEnter)
      card.addEventListener("mouseleave", mouseLeave)
    })

    return () => {
      document.removeEventListener("mousemove", mouseMove)
      projectCards.forEach(card => {
        card.removeEventListener("mouseenter", mouseEnter)
        card.removeEventListener("mouseleave", mouseLeave)
      })
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      cursorAnimation.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, ease: "easeOut" }
      })
    } else {
      cursorAnimation.start({
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.3, ease: "easeIn" }
      })
    }
  }, [isVisible, cursorAnimation])

  return (
    <motion.div
      className="custom-cursor pointer-events-none fixed top-0 left-0 z-50 mix-blend-difference"
      animate={cursorAnimation}
      style={{
        translateX: mousePosition.x - 48,
        translateY: mousePosition.y - 48,
      }}
    >
      <motion.div 
        className="bg-white rounded-full w-24 h-24 flex items-center justify-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowUpRight className="text-black w-8 h-8" />
        <svg className="absolute w-full h-full" viewBox="0 0 100 100">
          <path
            id="circlePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <motion.text 
            className="text-black text-[9px] uppercase font-medium"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <textPath href="#circlePath" startOffset="0%">
              Click to view • Click to view • Click to view •
            </textPath>
          </motion.text>
        </svg>
      </motion.div>
    </motion.div>
  )
}