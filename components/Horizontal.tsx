/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/typography";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Horizontal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !slidesRef.current) return;

    const slides = gsap.utils.toArray<HTMLElement>(slidesRef.current.children);
    const totalWidth = slides.reduce(
      (acc, slide) => acc + slide.offsetWidth,
      0
    );

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
    });

    gsap.fromTo(
      ".button",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      }
    );

    slides.forEach((slide, index) => {
      gsap.fromTo(
        slide.querySelectorAll(".animate-in"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: slide,
            containerAnimation: animation,
            start: "left center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      data-color="Ming"
      ref={containerRef}
      className="overflow-hidden section text-black"
    >
      <div ref={slidesRef} className="flex">
        {slides.map((slide, index) => (
          <SlideContent key={index} {...slide} />
        ))}
      </div>
      <div className="fixed button bottom-8 left-8 z-50">
        <Link href="/About">
          <Button className="group h-14 rounded-full bg-orange-500 px-6 text-white transition-all hover:bg-orange-600">
            <span className="mr-2 text-lg font-semibold">
              Learn More About Us
            </span>
            <ChevronRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

interface SlideProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats?: { value: string; label: string };
}

function SlideContent({
  title,
  subtitle,
  description,
  image,
  stats,
}: SlideProps) {
  return (
    <div className="flex h-screen w-screen flex-shrink-0 items-center justify-center p-16">
      <div className="grid max-w-6xl gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="animate-in text-4xl font-bold sm:text-5xl md:text-6xl">
            {title}
          </h2>
          <p className="animate-in text-xl font-semibold text-white">
            {subtitle}
          </p>
          <p className="animate-in text-lg text-gray-300">{description}</p>
          {stats && (
            <div className="animate-in space-y-2">
              <p className="text-5xl font-bold sm:text-6xl md:text-7xl">
                {stats.value}
              </p>
              <p className="text-xl text-gray-300">{stats.label}</p>
            </div>
          )}
        </div>
        <div className="relative aspect-square overflow-hidden rounded-full">
          <img
            src={image}
            alt={title}
            className="animate-in absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

const slides: SlideProps[] = [
  {
    title: "Real Talk, Real Impact",
    subtitle: "Transforming Businesses",
    description:
      "We're on a mission to impact as many businesses as possible and build a better company while we do it.",
    image: "/images/TestHor.jpg",
  },
  {
    title: "Profit-Boosting Tactics",
    subtitle: "For over 500 clients",
    description: "Digital Campinas — Delivering results that matter.",
    image: "/images/HorImage3.jpeg",
    stats: { value: "10K+", label: "Digital Strategies Implemented" },
  },
  {
    title: "Global & Diverse Team",
    subtitle: "Strength in Diversity",
    description: "Our team brings creative ideas to fuel your growth.",
    image: "/images/HorImage4.jpeg",
    stats: { value: "20+", label: "Marketing & Tech Experts" },
  },
  {
    title: "Client Success Stories",
    subtitle: "Real Results, Real Testimonials",
    description:
      "Hear from our satisfied clients about their transformative experiences.",
    image: "/images/HorImage6.jpeg",
    stats: { value: "850+", label: "Client Testimonials" },
  },
];
