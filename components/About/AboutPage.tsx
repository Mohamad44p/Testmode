/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function AboutPage() {
  return (
    <section
      data-color="white"
      className="section"
    >
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <p className="uppercase tracking-wide">
              We turn ideas into reality
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-5xl font-light leading-tight mb-8">
              Meet Significo
            </h1>
          </div>
          <div className="space-y-6">
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
          </div>
        </div>
        <div className="my-24">
          <video
            muted
            loop
            autoPlay
            controls
            className="w-full h-full rounded-2xl"
            src="/Y2meta.app-THIS IS 4K MARVEL (Ultra HD)-(1080p60).mp4"
          ></video>
        </div>
      </div>
    </section>
  );
}
