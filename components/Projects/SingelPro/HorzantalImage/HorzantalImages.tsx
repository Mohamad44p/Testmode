'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

interface CardData {
    id: string;
    image: string;
}

interface MainImagesCardProps {
    project: {
        custom_fields: {
            sub_images: string[];
        };
    };
}

export default function FixedHorizontalScroll({ project }: MainImagesCardProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const slidesRef = useRef<HTMLDivElement>(null)
    const [imagesLoaded, setImagesLoaded] = useState(false)
    const ctxRef = useRef<gsap.Context | null>(null)

    const cardsData: CardData[] = project.custom_fields.sub_images.map(
        (image, index) => ({
            id: (index + 1).toString(),
            image: image,
        })
    );

    useLayoutEffect(() => {
        if (!containerRef.current || !slidesRef.current || !imagesLoaded) return

        const setupAnimations = () => {
            if (ctxRef.current) {
                ctxRef.current.revert()
            }

            ctxRef.current = gsap.context(() => {
                const slides = gsap.utils.toArray<HTMLElement>('.panel')
                const totalWidth = slides.reduce((acc, slide) => acc + slide.offsetWidth, 0)

                gsap.set(slidesRef.current, { width: totalWidth })

                const animation = gsap.to(slides, {
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

                slides.forEach((slide) => {
                    const img = slide.querySelector('img')
                    const content = slide.querySelector('.slide-content')

                    gsap.fromTo(img,
                        { scale: 1.3, filter: 'blur(5px)' },
                        {
                            scale: 1,
                            filter: 'blur(0px)',
                            duration: 0.5,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: slide,
                                containerAnimation: animation,
                                start: "left center",
                                end: "right center",
                                toggleActions: "play reverse play reverse",
                            },
                        }
                    )

                    if (content) {
                        gsap.fromTo(content,
                            { opacity: 0, y: 50 },
                            {
                                opacity: 1,
                                y: 0,
                                duration: 0.5,
                                ease: 'power2.out',
                                scrollTrigger: {
                                    trigger: slide,
                                    containerAnimation: animation,
                                    start: "left center",
                                    end: "right center",
                                    toggleActions: "play reverse play reverse",
                                },
                            }
                        )
                    }
                })
            }, containerRef)
        }

        setupAnimations()

        const handleResize = () => {
            if (ctxRef.current) {
                ctxRef.current.revert()
            }
            setupAnimations()
        }

        window.addEventListener('resize', handleResize)

        return () => {
            if (ctxRef.current) {
                ctxRef.current.revert()
            }
            window.removeEventListener('resize', handleResize)
        }
    }, [imagesLoaded, cardsData])

    useLayoutEffect(() => {
        let loadedCount = 0
        const totalImages = cardsData.length

        const onImageLoad = () => {
            loadedCount++
            if (loadedCount === totalImages) {
                setImagesLoaded(true)
            }
        }

        const imageElements = document.querySelectorAll('.panel img')
        imageElements.forEach(img => {
            if ((img as HTMLImageElement).complete) {
                onImageLoad()
            } else {
                img.addEventListener('load', onImageLoad)
            }
        })

        return () => {
            imageElements.forEach(img => img.removeEventListener('load', onImageLoad))
        }
    }, [cardsData])

    return (
        <div ref={containerRef} className="w-full h-screen overflow-hidden bg-purple-600">
            <div ref={slidesRef} className="flex h-full">
                {cardsData.map((image, index) => (
                    <div key={index} className="panel w-screen flex items-center justify-center h-full flex-shrink-0 p-8">
                        <div className="slide-content w-[70vw] h-[70%] bg-blue-200 rounded-3xl overflow-hidden relative">
                            <Image
                                src={image.image}
                                alt={image.id}
                                width={1900}
                                height={2000}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}