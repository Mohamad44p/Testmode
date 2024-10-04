/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useEffect, useRef } from "react"
import { Button } from "./ui/button"
import { TextReveal } from "./ui/typography"
import { Users, BarChart, Star } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function ImprovedHorizontal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const slidesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !slidesRef.current) return

    const slides = gsap.utils.toArray<HTMLElement>(slidesRef.current.children)
    
    const calculateTotalWidth = () => {
      return slides.reduce((acc, slide) => acc + slide.offsetWidth, 0)
    }

    let totalWidth = calculateTotalWidth()

    const animation = gsap.to(slides, {
      x: () => `-${totalWidth - window.innerWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 0.5,
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          totalWidth = calculateTotalWidth()
          self.end = `+=${totalWidth}`
        },
      },
    })

    slides.forEach((slide) => {
      const content = slide.querySelector(".slide-content")
      const images = slide.querySelectorAll(".slide-image")
      const icons = slide.querySelectorAll(".slide-icon")

      gsap.fromTo(
        content,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5, // Reduced from 1 to 0.5 for faster animation
          ease: "power2.out", // Changed to a faster easing function
          scrollTrigger: {
            trigger: slide,
            containerAnimation: animation,
            start: "left center",
            end: "right center",
            toggleActions: "play reverse play reverse",
          },
        }
      )

      gsap.fromTo(
        images,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5, // Reduced from 1 to 0.5 for faster animation
          ease: "back.out(1.5)", // Adjusted for faster animation
          stagger: 0.1, // Reduced from 0.2 to 0.1 for faster staggering
          scrollTrigger: {
            trigger: slide,
            containerAnimation: animation,
            start: "left center",
            end: "right center",
            toggleActions: "play reverse play reverse",
          },
        }
      )

      gsap.fromTo(
        icons,
        { rotation: -45, opacity: 0 },
        {
          rotation: 0,
          opacity: 1,
          duration: 0.5, // Reduced from 1 to 0.5 for faster animation
          ease: "back.out(1.5)", // Changed to a faster easing function
          stagger: 0.05, // Reduced from 0.1 to 0.05 for faster staggering
          scrollTrigger: {
            trigger: slide,
            containerAnimation: animation,
            start: "left center",
            end: "right center",
            toggleActions: "play reverse play reverse",
          },
        }
      )
    })

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        containerRef.current?.scrollBy({
          left: window.innerWidth,
          behavior: "smooth",
        })
      } else if (e.key === "ArrowLeft") {
        containerRef.current?.scrollBy({
          left: -window.innerWidth,
          behavior: "smooth",
        })
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div
      data-color="Ming"
      ref={containerRef}
      className="overflow-hidden section my-[20vh] h-screen bg-[#4089c1]"
    >
      <div ref={slidesRef} className="flex h-full">
        <div className="slide w-[1200px] h-screen flex-shrink-0 flex flex-col items-center justify-center relative">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
            Real Talk,<br />Real Impact
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl text-center">
            We're on a mission to impact as many lives as possible and build a better company while we do it.
          </p>
          <div className="absolute top-1/4 -right-52 w-[21rem] h-[21rem] rounded-full overflow-hidden">
            <img src="/images/HorImage4.jpg" alt="Team member" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="slide w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center relative">
          <Users className="text-white w-24 h-24 mb-8 slide-icon" />
          <h2 className="text-8xl md:text-9xl font-bold text-white mb-4 slide-content">10K</h2>
          <p className="text-2xl md:text-3xl text-white mb-8 slide-content">Digital Campinas — Profit-Boosting Tactics</p>
          <p className="text-xl text-white slide-content">For over 500 clients</p>
          <div className="absolute top-1/4 left-60 text-white max-w-[400px] slide-content">
            <p>
              We're on a mission to impact as many lives as possible and build a better company while we do it. Here's our progress.
            </p>
          </div>
          <div className="absolute top-1/4 -right-52 w-[21rem] h-[21rem] rounded-full overflow-hidden slide-image">
            <img src="/images/HorImage3.jpg" alt="Client" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="slide w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center relative">
          <BarChart className="text-white w-24 h-24 mb-8 slide-icon" />
          <h2 className="text-8xl md:text-9xl font-bold text-white mb-4 slide-content">20</h2>
          <p className="text-2xl md:text-3xl text-white mb-4 slide-content">Marketing & Tech Experts</p>
          <p className="text-xl text-white max-w-2xl text-center slide-content">
            Our global and diverse team brings creative ideas to fuel your growth.
          </p>
          <div className="absolute top-1/4 left-60 text-white max-w-[400px] slide-content">
            <p>
              We're on a mission to impact as many lives as possible and build a better company while we do it. Here's our progress.
            </p>
          </div>
        </div>
        
        <div className="slide w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center relative">
          <Star className="text-white w-24 h-24 mb-8 slide-icon" />
          <h2 className="text-8xl md:text-9xl font-bold text-white mb-4 slide-content">850</h2>
          <p className="text-2xl md:text-3xl text-white mb-8 slide-content">Client Testimonials</p>
          <p className="text-xl text-white max-w-2xl text-center slide-content">
            Our clients love the results we deliver. Here's what they have to say.
          </p>
          <div className="absolute top-40 left-40 w-28 h-28 rounded-full overflow-hidden slide-image">
            <img src="/images/HorImage3.jpg" alt="Client" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-40 right-40 w-32 h-32 rounded-full overflow-hidden slide-image">
            <img src="/images/HorImage2.jpg" alt="Client" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="fixed button bottom-[40px] left-[40px] z-50">
        <Button className="w-[290px] h-[50px] px-5 md:px-10 rounded-2xl bg-white text-[#4089c1] md:flex py-5 border-[1px] hover:bg-[#2b6087] hover:text-white transition-colors duration-300">
          <div className="texthover masker h-[1.5rem] overflow-hidden">
            <h1 className="text-lg md:text-xl">
              <TextReveal className="cursor-pointer">
                Discover Our Story
              </TextReveal>
            </h1>
          </div>
        </Button>
      </div>
    </div>
  )
}