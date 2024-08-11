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
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
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
      <div className="container mx-auto px-4 py-12 max-w-6xl">
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
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl font-light leading-tight mb-8">
              Meet Significo
            </h1>
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg">
              We're a collective of passionate visionaries, crafting powerful
              health technology to make an impact on the lives of the people
              using our tools.
            </p>
            <p className="text-lg">
              Our expert designers and technologists have decades of experience
              in tech, health, and data. We build tools that solve real problems
              and make managing health an empowering and intuitive experience.
            </p>
            <p className="text-lg">
              We believe that technology that puts people first will make
              healthcare more human.
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