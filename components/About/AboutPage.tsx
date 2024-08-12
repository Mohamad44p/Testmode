/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { PlayIcon, PauseIcon, VolumeIcon, Volume2Icon } from "lucide-react";

export default function Component() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
  }, [controls]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSliderChange = (value: number[]) => {
    if (videoRef.current) {
      const newTime = (value[0] / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(value[0]);
    }
  };

  const updateProgress = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  return (
    <section
      ref={containerRef}
      data-color="white"
      className="section relative min-h-screen"
    >
      <motion.div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
        style={{ width: lineWidth }}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid md:grid-cols-3 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
            >
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <p className="uppercase tracking-wide">
                  We turn ideas into reality
                </p>
              </div>
            </motion.div>
            <h1 className="text-5xl flex flex-col items-center justify-center font-light leading-tight mb-8">
              Meet
              <span>Be Found Online</span>
            </h1>
          </motion.div>
          <motion.div
            className="space-y-6 w-[780px] text-justify"
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg">
              At Be Found Online, we specialize in creating tailored digital
              marketing strategies that align perfectly with each client’s
              unique goals. Our team of marketing& Tech experts, designers, and
              developers delivers results that matter—whether it's driving
              leads, boosting revenue, or increasing visibility. We believe that
              true success is measured by our clients' growth, and we focus on
              the metrics that push businesses forward.
            </p>
            <p className="text-lg">
              With years of expertise, we've learned that digital channels work
              best when integrated strategically. That’s why we craft
              full-service solutions, combining various digital channels to
              maximize conversions, visibility, and revenue for every client we
              serve.
            </p>
            <p className="text-lg">
              At Be Found Online, we live and breathe the web, and our passion
              lies in helping businesses achieve their goals. When you partner
              with us, you won’t receive a one-size-fits-all approach—instead,
              you'll get a personalized strategy crafted specifically for your
              company, its needs, and its objectives.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="my-24"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ delay: 0.6 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              loop
              className="w-full h-full"
              src="https://cdn.significo.com/videos/significo-main-hero.mp4"
              onTimeUpdate={updateProgress}
            ></video>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={togglePlay}
                  className="bg-white text-black hover:bg-gray-200 transition-colors duration-200"
                >
                  {isPlaying ? (
                    <PauseIcon className="h-5 w-5" />
                  ) : (
                    <PlayIcon className="h-5 w-5" />
                  )}
                </Button>
                <div className="flex-grow">
                  <Slider
                    value={[progress]}
                    max={100}
                    step={0.1}
                    onValueChange={handleSliderChange}
                    className="w-full"
                  />
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleMute}
                  className="bg-white text-black hover:bg-gray-200 transition-colors duration-200"
                >
                  {isMuted ? (
                    <VolumeIcon className="h-5 w-5" />
                  ) : (
                    <Volume2Icon className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
