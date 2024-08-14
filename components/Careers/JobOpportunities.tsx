"use client";

/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Component() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-100 to-white opacity-50" />
      <div className=" px-4 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 justify-between items-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:sticky md:top-24"
          >
            <motion.div
              className="flex items-center gap-2 mb-8"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-2 h-2 bg-black rounded-full" />
              <p className="text-sm uppercase tracking-widest text-gray-600">
                Your next big chapter
              </p>
            </motion.div>
            <motion.h1
              className="text-7xl font-extralight mb-8 leading-none tracking-tight"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Job
              <br />
              Opportunities
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 leading-relaxed"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Explore our available job openings and join our team. We're always
              looking for talented individuals to help us shape the future.
            </motion.p>
          </motion.div>
          <motion.div
            className="space-y-8 border-t border-b border-black"
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="openings" className="border-t-0 border-b-2">
                <AccordionTrigger className="text-3xl font-extralight py-6 hover:no-underline">
                  Openings
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-8">
                  <p className="text-xl text-gray-600">
                    There are no open positions at this time.
                  </p>
                  <p className="text-lg text-gray-500 mt-4">
                    Check back later or follow us on social media for updates on
                    new opportunities.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-gray-200 to-transparent opacity-30" />
    </div>
  );
}
