/* eslint-disable react-hooks/rules-of-hooks */
import {
  useScroll,
  useTransform,
  motion,
  useInView,
  useAnimate,
  stagger,
} from "framer-motion";
import { HeartIcon, PenToolIcon, RocketIcon, SmileIcon } from "lucide-react";
import React, { useRef, useEffect } from "react";
import { TextReveal } from "../ui/typography";
import { Button } from "../ui/button";

export default function CircleSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isInView) {
      animate(
        "h1",
        { scale: [0.5, 1.2, 1], rotate: [0, -10, 10, 0] },
        { duration: 0.8, ease: "easeInOut" }
      );
      animate(
        ".core-value",
        { scale: [0, 1.2, 1], rotate: [0, 15, -15, 0] },
        { duration: 0.8, delay: stagger(0.1), ease: "easeInOut" }
      );
    }
  }, [isInView, animate]);

  const coreValues = [
    {
      icon: <SmileIcon className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6" />,
      title: "We Measure Success by the “WOW” Factor",
      description:
        "We step into our clients’ shoes, and our success is defined by how much we exceed their expectations and leave them genuinely impressed.",
    },
    {
      icon: <PenToolIcon className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6" />,
      title: "Setting the Standard with Integrity",
      description:
        "We lead by setting an example, upholding integrity in all we do, and striving to make a positive impact on the world.",
    },
    {
      icon: <RocketIcon className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6" />,
      title: "Relentless and Results-Driven",
      description:
        "We’re driven, persistent, and committed to getting the job done, no matter what it takes.",
    },
    {
      icon: <HeartIcon className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6" />,
      title: "Driving Real Results Where It Matters",
      description:
        "We create meaningful business impact, delivering measurable results that benefit both our clients and their teams.",
    },
  ];

  const floatY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <motion.div
        data-color="Blond"
        className="absolute inset-0 z-0"
        style={{
          background: useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            ["#f5f19c", "#ffd700", "#f5f19c"]
          ),
        }}
      />
      <div
        ref={scope}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row items-start justify-between">
          <motion.div
            className="w-full md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-center space-x-2 text-sm text-gray-600 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="w-2 h-2 bg-black rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <p className="uppercase tracking-wide font-semibold">
                Empowering humanity through innovation
              </p>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-light leading-tight mb-8">
              Our Core Values
            </h1>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button className="border border-black text-xl w-full sm:w-[200px] h-[50px] flex items-center justify-center gap-x-3 bg-black hover:bg-black/90 text-[#f5f19c] font-bold transition-colors duration-300">
                <TextReveal>CONNECT</TextReveal>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div className="w-full md:w-1/2" style={{ y: floatY }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
              {coreValues.map((value, index) => {
                const rotateZ = useTransform(
                  scrollYProgress,
                  [0, 1],
                  [0, 360 * (index % 2 === 0 ? 1 : -1)]
                );
                return (
                  <motion.div
                    key={index}
                    className={`
                      core-value bg-black text-[#f5f19c] rounded-full p-6 sm:p-8 flex flex-col items-center text-center
                      ${index % 2 === 1 ? "sm:mt-12" : ""}
                    `}
                    style={{ rotateZ }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(255,215,0,0.5)",
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      {value.icon}
                    </motion.div>
                    <motion.h2
                      className="text-lg md:text-xl font-semibold mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      {value.title}
                    </motion.h2>
                    <motion.p
                      className="text-xs md:text-[12x]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      {value.description}
                    </motion.p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
