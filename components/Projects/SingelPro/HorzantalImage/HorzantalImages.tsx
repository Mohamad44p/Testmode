'use client'

import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

interface MediaItem {
    id: string
    type: 'image' | 'video'
    src: string
}

interface MainImagesCardProps {
    project: {
        custom_fields: {
            sub_images?: string[]
            images?: string[]
            video?: string
        }
    }
}

export default function FixedHorizontalScroll({ project }: MainImagesCardProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const slidesRef = useRef<HTMLDivElement>(null)

    const mediaItems: MediaItem[] = [
        ...(project.custom_fields.sub_images || []).map((image, index) => ({
            id: `sub_${index + 1}`,
            type: 'image' as 'image',
            src: image,
        })),
        ...(project.custom_fields.images || []).filter(Boolean).map((image, index) => ({
            id: `main_${index + 1}`,
            type: 'image' as 'image',
            src: image,
        }))
    ]

    if (project.custom_fields.video) {
        mediaItems.push({
            id: 'video',
            type: 'video',
            src: project.custom_fields.video,
        })
    }

    useEffect(() => {
        if (!containerRef.current || !slidesRef.current) return

        const slides = gsap.utils.toArray<HTMLElement>(slidesRef.current.children)

        const calculateTotalWidth = () => {
            return slides.reduce((acc, slide) => acc + slide.offsetWidth, 0) - window.innerWidth
        }

        let totalWidth = calculateTotalWidth()

        gsap.set(slidesRef.current, { width: totalWidth })

        const animation = gsap.to(slidesRef.current, {
            x: () => `-${totalWidth}`,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 0.5,
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

    if (mediaItems.length === 0) {
        return <div className="text-center py-10">No media available for this project.</div>
    }

    return (
        <div className="h-screen overflow-hidden" ref={containerRef}>
            <motion.div className="flex h-full" ref={slidesRef}>
                {mediaItems.map((item, index) => (
                    <MediaPanel key={item.id} item={item} index={index} />
                ))}
            </motion.div>
        </div>
    )
}

function MediaPanel({ item, index }: { item: MediaItem; index: number }) {
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
                duration: 0.3,
                delay: index * 0.05,
                ease: 'easeOut'
            }
        }
    }

    return (
        <motion.div
            className="panel w-[70vw] flex items-center justify-center h-full flex-shrink-0 p-4"
            ref={ref}
        >
            <motion.div
                className="rounded-lg overflow-hidden relative shadow-lg w-[40vw] h-[55vh] mx-4"
                initial="hidden"
                animate={controls}
                variants={variants}
            >
                {item.type === 'image' ? (
                    <Image
                        src={item.src}
                        alt={`Project image ${item.id}`}
                        width={1900}
                        height={2000}
                        className="rounded-xl w-full h-full object-cover"
                    />
                ) : (
                    <video
                        src={item.src}
                        controls
                        className="rounded-xl w-full h-full object-cover"
                    />
                )}
            </motion.div>
        </motion.div>
    )
}