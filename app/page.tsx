"use client";

import {
  motion,
  MotionValue,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  }) as MotionValue<number>;

  const divRadius = useTransform(scrollYProgressSpring, [0, 1], [100, 0]);
  const divClip = useMotionTemplate`circle(${divRadius}% at 50% 50%)`;

  return (
    <main>
      <div ref={ref} className="relative top-0 z-10 h-[200vh] w-full">
        <motion.div
          style={{ clipPath: divClip }}
          className="sticky hero w-full left-0 top-0 grid  origin-[50%_50%] gap-2"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
            src="/Y2meta.app-THIS IS 4K MARVEL (Ultra HD)-(1080p60).mp4"
          />
        </motion.div>
      </div>
      <div className="mt-[-200vh] h-[190vh] overflow-clip pb-20">
        <motion.p
          className="relative top-1/2 mx-auto md:flex items-center justify-center block aspect-video w-[1600px] max-w-[90%] rounded-[60px] shadow-2xl md:top-1/4"
        >
          some text
        </motion.p>
      </div>
    </main>
  );
}
