import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import {
  ChevronRightIcon,
  Users,
  BarChart,
  Globe,
  Star,
  Zap,
  Target,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import { TbBrandNextjs } from "react-icons/tb";

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

    slides.forEach((slide) => {
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
      className="overflow-hidden section text-black section"
    >
      <div ref={slidesRef} className="flex">
        {slides.map((slide, index) => (
          <SlideContent key={index} {...slide} />
        ))}
      </div>
      <div className="fixed button bottom-8 left-8 z-50">
        <Link href="/Contact">
          <Button className="group h-14 rounded-full bg-black px-6 text-white transition-all hover:bg-gray-800">
            <span className="mr-2 text-lg font-semibold">Partner with us</span>
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
  images: Array<{
    src: string;
    position: { top: string; left: string };
    size?: string;
  }>;
  stat?: { value: string; label: string };
  icons?: Array<{
    icon: React.ReactNode;
    position: { top: string; left: string };
    size: string;
  }>;
  backgroundColor?: string;
}

function SlideContent({
  title,
  subtitle,
  description,
  images,
  stat,
  icons,
  backgroundColor,
}: SlideProps) {
  const isFirstSlide = title === "Real Talk, Real Impact";

  return (
    <div className="relative section flex h-screen w-screen flex-shrink-0 items-center justify-center p-8 overflow-hidden">
      <div className="relative max-w-3xl z-10">
        <div className="space-y-4 text-center">
          <h2
            className={`animate-in text-5xl md:text-8xl font-light leading-tight tracking-wide ${
              isFirstSlide ? "text-black" : "font-bold"
            }`}
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            {isFirstSlide ? (
              <>
                Real Talk,
                <br />
                Real Impact
              </>
            ) : (
              title
            )}
          </h2>
          {!isFirstSlide && (
            <>
              <p
                className="animate-in text-2xl text-black font-semibold"
                style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
              >
                {subtitle}
              </p>
              <p
                className="animate-in text-gray-200 text-base"
                style={{
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  maxWidth: "500px",
                  margin: "0 auto",
                }}
              >
                {description}
              </p>
              {stat && (
                <div className="animate-in space-y-1 py-6">
                  <p
                    className="text-6xl font-bold sm:text-7xl md:text-8xl"
                    style={{
                      fontFamily: '"Helvetica Neue", Arial, sans-serif',
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xl text-gray-800"
                    style={{
                      fontFamily: '"Helvetica Neue", Arial, sans-serif',
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {!isFirstSlide &&
        images.map((image, index) => (
          <div
            key={index}
            className="absolute rounded-full overflow-hidden animate-in"
            style={{
              width: image.size || "150px",
              height: image.size || "150px",
              top: image.position.top,
              left: image.position.left,
              transform: "translate(-50%, -50%)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={image.src}
              alt={`Slide image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      {icons &&
        icons.map((iconData, index) => (
          <div
            key={index}
            className="absolute animate-in"
            style={{
              top: iconData.position.top,
              left: iconData.position.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div style={{ width: iconData.size, height: iconData.size }}>
              {iconData.icon}
            </div>
          </div>
        ))}
    </div>
  );
}

const slides: SlideProps[] = [
  {
    title: "Real Talk, Real Impact",
    subtitle: "",
    description: "",
    images: [],
  },
  {
    title: "20.4M",
    subtitle:
      "Real people — real lives — we have built products and solutions for.",
    description:
      "We're on a mission to impact as many lives as possible and build a better company while we do it. Here's our progress.",
    images: [
      {
        src: "/images/HorImage1.jpg",
        position: { top: "15%", left: "5%" },
        size: "250px",
      },
      {
        src: "/images/HorImage2.jpg",
        position: { top: "70%", left: "25%" },
        size: "180px",
      },
      {
        src: "/images/HorImage3.jpg",
        position: { top: "45%", left: "85%" },
        size: "200px",
      },
    ],
    icons: [
      {
        icon: <Globe size={60} color="#000000" />,
        position: { top: "15%", left: "75%" },
        size: "60px",
      },
      {
        icon: <Zap size={40} color="#000000" />,
        position: { top: "85%", left: "80%" },
        size: "40px",
      },
    ],
  },
  {
    title: "Global & Diverse Team",
    subtitle: "Strength in Diversity",
    description:
      "Our team brings creative ideas from all corners of the world to fuel your growth and innovation.",
    images: [
      {
        src: "/images/HorImage4.jpg",
        position: { top: "20%", left: "10%" },
        size: "220px",
      },
    ],
    stat: { value: "50+", label: "Countries Represented" },
    icons: [
      {
        icon: <TbBrandNextjs size={60} color="#FFFFFF" />,
        position: { top: "70%", left: "15%" },
        size: "60px",
      },
      {
        icon: <Users size={80} color="#FFFFFF" />,
        position: { top: "20%", left: "80%" },
        size: "80px",
      },
      {
        icon: <Globe size={60} color="#FFFFFF" />,
        position: { top: "70%", left: "85%" },
        size: "60px",
      },
      {
        icon: <Target size={40} color="#FFFFFF" />,
        position: { top: "40%", left: "70%" },
        size: "40px",
      },
    ],
  },
  {
    title: "Client Success Stories",
    subtitle: "Real Results, Real Testimonials",
    description:
      "Our clients have experienced transformative growth. Hear their stories and see the impact of our partnership.",
    images: [
      {
        src: "/images/HorImage1.jpg",
        position: { top: "20%", left: "10%" },
        size: "200px",
      },
      {
        src: "/images/HorImage2.jpg",
        position: { top: "65%", left: "20%" },
        size: "160px",
      },
    ],
    stat: { value: "850+", label: "Satisfied Clients" },
    icons: [
      {
        icon: <Star size={50} color="#FFD700" />,
        position: { top: "15%", left: "70%" },
        size: "50px",
      },
      {
        icon: <BarChart size={60} color="#000000" />,
        position: { top: "75%", left: "50%" },
        size: "60px",
      },
      {
        icon: <Rocket size={40} color="#FF4500" />,
        position: { top: "40%", left: "40%" },
        size: "40px",
      },
    ],
  },
];
