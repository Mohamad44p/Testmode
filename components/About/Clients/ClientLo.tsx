"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ClientLogo() {
  const row1 = [
    "/Clients/Amaken.png",
    "/Clients/Bmw.png",
    "/Clients/Cocka-Cola.png",
    "/Clients/Flick.png",
    "/Clients/Lays.png",
    "/Clients/Marvello.png",
    "/Clients/Arabe.png",
    "/Clients/Shafo.png",
  ]

  const row2 = [
    "/Clients/Oreo.png",
    "/Clients/Paltel.png",
    "/Clients/Roadster.png",
    "/Clients/Sanad.png",
    "/Clients/zeita.png",
    "/Clients/Ard.png",
    "/Clients/TEach.png",
    "/Clients/Jabel.png",
    "/Clients/Yamay.png",
  ]

  return (
    <div
      data-color="Almond"
      className="w-full min-h-screen text-black relative flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20"
    >
      <div className="w-full h-fit flex items-center justify-center flex-col">
        <h2 className="text-3xl sm:text-4xl font-medium mb-4 text-primary text-center">
          Helping Brands Big and Small
        </h2>
        <p className="text-lg sm:text-xl font-light mb-8 sm:mb-12 text-muted-foreground text-center max-w-3xl">
          We are proud to have some of the most well-known and respected
          corporate clients – but we love to help start-ups and new brands too.
        </p>
        <div className="flex flex-col w-full max-w-[1400px] overflow-hidden select-none">
          <LogoRow images={row1} direction="left" />
          <LogoRow images={row2} direction="right" />
        </div>
      </div>
    </div>
  )
}

function LogoRow({ images, direction }: { images: string[]; direction: "left" | "right" }) {
  return (
    <div className="flex w-full overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] my-4">
      <motion.div
        className="flex flex-shrink-0 items-center justify-around whitespace-nowrap w-full"
        animate={{ x: direction === "left" ? [0, "-100%"] : ["-100%", 0] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {images.map((src, index) => (
          <LogoImage key={index} src={src} index={index} />
        ))}
      </motion.div>
      <motion.div
        className="flex flex-shrink-0 items-center justify-around whitespace-nowrap w-full"
        animate={{ x: direction === "left" ? [0, "-100%"] : ["-100%", 0] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {images.map((src, index) => (
          <LogoImage key={index} src={src} index={index} />
        ))}
      </motion.div>
    </div>
  )
}

function LogoImage({ src, index }: { src: string; index: number }) {
  return (
    <div className="grid place-items-center w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] p-2 sm:p-3 md:p-4">
      <div className="relative w-full aspect-[3/2]">
        <Image
          src={src}
          alt={`Company ${index + 1}`}
          fill
          sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, (max-width: 1024px) 220px, 240px"
          className="object-contain rounded-lg p-2 sm:p-3 md:p-4 shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] bg-white"
        />
      </div>
    </div>
  )
}