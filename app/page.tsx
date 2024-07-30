/* eslint-disable jsx-a11y/alt-text */
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
  const scale = useTransform(scrollYProgress, [0, 0.05], [0.8, 1]);
  const xRow1 = useTransform(scrollYProgress, [0.15, 0.83], [0, -300]);
  const xRow2 = useTransform(scrollYProgress, [0.15, 0.83], [0, 300]);
  const xRow3 = useTransform(scrollYProgress, [0.15, 0.83], [0, -400]);

  return (
    <main className="main w-full">
      <div ref={ref} className="home section w-full h-[200vh] relative">
        <div className="w-full sticky top-0 left-0">
          <div className="btntext absolute bottom-[5%] left-[3%] z-[4]">
            <h1>
              We build big ideas. <br />
              Software. Apps. Tools. <br />
              For real people. Real <br />
              lives.
            </h1>
          </div>
          <motion.div
            style={{ clipPath: divClip }}
            className="videos z-[3] w-full h-screen absolute top-0 left-0 overflow-hidden"
          >
            <video
              muted
              loop
              autoPlay
              className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="/Y2meta.app-THIS IS 4K MARVEL (Ultra HD)-(1080p60).mp4"
            />
          </motion.div>
          <div className="marquees w-full h-screen relative overflow-hidden">
            <div className="heading absolute top-[5%] left-1/2 -translate-x-1/2">
              <h1 className="text-xl font-regular text-center">
                Crafting a new paradigm of <br />
                healthcare, one that is
              </h1>
            </div>
              <div ref={ref} className="h-[300vh]">
                <div className="sticky top-1/2 -translate-y-1/2 text-[68px] text-white overflow-clip space-y-4">
                  <motion.div
                    style={{ scale, x: xRow1}}
                    className="flex gap-6 justify-center items-center"
                  >
                    <p>HTML</p>
                    <Image id={1} />
                    <p>CSS</p>
                    <Image id={2} />
                    <p>JavaScript</p>
                    <Image id={3} />
                    <p>TypeScript</p>
                    <Image id={4} />
                  </motion.div>
                  <motion.div
                    style={{ scale, x: xRow2}}
                    className="flex gap-6 justify-center items-center"
                  >
                    <p>Svelte</p>
                    <Image id={5} />
                    <p>Vue</p>
                    <Image id={6} />
                    <p>React</p>
                    <Image id={7} />
                    <p>Angular</p>
                    <Image id={8} />
                  </motion.div>
                  <motion.div
                    style={{ scale, x: xRow3}}
                    className="flex gap-6 justify-center items-center"
                  >
                    <p>Accessibility</p>
                    <Image id={9} />
                    <p>Performance</p>
                    <Image id={10} />
                    <p>SEO</p>
                    <Image id={11} />
                    <p>Semantics</p>
                    <Image id={12} />
                  </motion.div>
                </div>
              <div className="h-screen" />
            </div>
          </div>
          <div className="button-container absolute bottom-[10%] left-[3%] z-[4]">
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </main>
  );
}

const Image = ({ id }: { id: number }) => (
  <img
    className="w-16 h-16 shrink-0 rounded-full"
    src={`https://randomuser.me/api/portraits/women/${id}.jpg`}
    alt="Random user picture"
  />
);
