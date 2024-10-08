'use client'

import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

interface CardData {
    id: string
    image: string
}

interface MainImagesCardProps {
    project: {
        custom_fields: {
            sub_images: string[]
        }
    }
}

export default function FixedHorizontalScroll({ project }: MainImagesCardProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const slidesRef = useRef<HTMLDivElement>(null)

    const cardsData: CardData[] = project.custom_fields.sub_images.map((image, index) => ({
        id: (index + 1).toString(),
        image: image,
    }))

    useEffect(() => {
        if (!containerRef.current || !slidesRef.current) return

        const slides = gsap.utils.toArray<HTMLElement>(slidesRef.current.children)

        const calculateTotalWidth = () => {
            return slides.reduce((acc, slide) => acc + slide.offsetWidth, 0)
        }

        let totalWidth = calculateTotalWidth()

        gsap.set(slidesRef.current, { width: totalWidth })

        const animation = gsap.to(slidesRef.current, {
            x: () => `-${totalWidth - window.innerWidth}`,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                end: () => `+=${totalWidth}`,
                invalidateOnRefresh: true,
            },
        })

        const handleResize = () => {
            totalWidth = calculateTotalWidth()
            gsap.set(slidesRef.current, { width: totalWidth })
            ScrollTrigger.refresh()
        }

        window.addEventListener("resize", handleResize)

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div className="h-screen overflow-hidden" ref={containerRef}>
            <motion.div className="flex h-full" ref={slidesRef}>
                {cardsData.map((image, index) => (
                    <ImagePanel key={index} image={image} index={index} />
                ))}
            </motion.div>
        </div>
    )
}

function ImagePanel({ image, index }: { image: CardData; index: number }) {
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    useEffect(() => {
        if (isInView) {
            controls.start('visible')
        }
    }, [controls, isInView])

    const variants = {
        hidden: {
            opacity: 0,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut'
            }
        }
    }

    return (
        <motion.div
            className="panel w-screen flex items-center justify-center h-full flex-shrink-0 p-4"
            ref={ref}
        >
            <motion.div
                className="rounded-lg overflow-hidden relative shadow-lg w-[50vw] h-[65vh]"
                initial="hidden"
                animate={controls}
                variants={variants}
            >
                <Image
                    src={image.image}
                    alt={image.id}
                    width={1900}
                    height={2000}
                    className="rounded-xl w-full h-full object-cover"
                />
            </motion.div>
        </motion.div>
    )
}