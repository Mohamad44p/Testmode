/* eslint-disable @next/next/no-img-element */
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
  Coffee,
  Heart,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { TbBrandNextjs } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

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
}

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

    slides.forEach((slide, index) => {
      const content = slide.querySelector(".slide-content");
      const images = slide.querySelectorAll(".slide-image");
      const icons = slide.querySelectorAll(".slide-icon");

      gsap.fromTo(
        content,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: slide,
            containerAnimation: animation,
            start: "left center",
            end: "right center",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        images,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: slide,
            containerAnimation: animation,
            start: "left center",
            end: "right center",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        icons,
        { rotation: -45, opacity: 0 },
        {
          rotation: 0,
          opacity: 1,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: slide,
            containerAnimation: animation,
            start: "left center",
            end: "right center",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        containerRef.current?.scrollBy({
          left: window.innerWidth,
          behavior: "smooth",
        });
      } else if (e.key === "ArrowLeft") {
        containerRef.current?.scrollBy({
          left: -window.innerWidth,
          behavior: "smooth",
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-x-hidden font-neue-Light text-black relative h-screen bg-[#FFA07A]"
    >
      <div ref={slidesRef} className="flex h-full">
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

function SlideContent({
  title,
  subtitle,
  description,
  images,
  stat,
  icons,
}: SlideProps) {
  const isFirstSlide = title === "Real Talk, Real Impact";

  return (
    <div className="relative font-neue-Light flex h-full w-screen flex-shrink-0 items-center justify-center p-8 overflow-hidden">
      {" "}
      <div className="relative max-w-3xl z-10 slide-content">
        <div className="space-y-4 text-center">
          <h2
            className={`text-5xl  md:text-8xl font-light leading-tight tracking-wide ${
              isFirstSlide ? "text-black" : "font-bold"
            }`}
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
                className="text-2xl  text-black font-semibold"
                style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
              >
                {subtitle}
              </p>
              <p
                className="text-gray-800 text-base"
                style={{
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  maxWidth: "500px",
                  margin: "0 auto",
                }}
              >
                {description}
              </p>
              {stat && (
                <div className="space-y-1 py-6">
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
            className="absolute rounded-full overflow-hidden slide-image"
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
            className="absolute slide-icon"
            style={{
              top: iconData.position.top,
              left: iconData.position.left,
              transform: "translate(-50%, -5  0%)",
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
    subtitle: "Lives Impacted",
    description:
      "Real people, real lives — we've built products and solutions that make a difference.",
    images: [
      {
        src: "/images/HorImage1.jpg",
        position: { top: "15%", left: "15%" },
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
    title: "13",
    subtitle: "Nationalities",
    description:
      "Our global team brings diverse perspectives and innovative solutions.",
    images: [
      {
        src: "/images/HorImage4.jpg",
        position: { top: "20%", left: "10%" },
        size: "220px",
      },
    ],
    icons: [
      {
        icon: <TbBrandNextjs size={60} color="#000000" />,
        position: { top: "70%", left: "15%" },
        size: "60px",
      },
      {
        icon: <Users size={80} color="#000000" />,
        position: { top: "20%", left: "80%" },
        size: "80px",
      },
      {
        icon: <Globe size={60} color="#000000" />,
        position: { top: "70%", left: "85%" },
        size: "60px",
      },
      {
        icon: <Target size={40} color="#000000" />,
        position: { top: "40%", left: "70%" },
        size: "40px",
      },
    ],
  },
  {
    title: "49%",
    subtitle: "Women in Tech",
    description: "Empowering diversity and inclusion in the tech industry.",
    images: [
      {
        src: "/images/HorImage2.jpg",
        position: { top: "20%", left: "10%" },
        size: "200px",
      },
      {
        src: "/images/HorImage1.jpg",
        position: { top: "65%", left: "20%" },
        size: "160px",
      },
    ],
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
  {
    title: "24/7",
    subtitle: "Global Support",
    description:
      "Round-the-clock assistance for our clients, anytime, anywhere.",
    images: [
      {
        src: "/images/HorImage4.jpg",
        position: { top: "30%", left: "15%" },
        size: "180px",
      },
      {
        src: "/images/HorImage2.jpg",
        position: { top: "60%", left: "80%" },
        size: "220px",
      },
    ],
    icons: [
      {
        icon: <Coffee size={50} color="#8B4513" />,
        position: { top: "20%", left: "60%" },
        size: "50px",
      },
      {
        icon: <Heart size={40} color="#FF69B4" />,
        position: { top: "70%", left: "30%" },
        size: "40px",
      },
      {
        icon: <Sparkles size={60} color="#FFD700" />,
        position: { top: "40%", left: "90%" },
        size: "60px",
      },
    ],
  },
];
