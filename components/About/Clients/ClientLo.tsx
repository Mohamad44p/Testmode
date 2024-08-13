/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

export default function ClientLogo() {
  const row1 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  const row2 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  ];

  return (
    <div
      data-color="Almond"
      className="w-full min-h-screen text-black relative flex items-center justify-center px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20"
    >
      <div className="w-full h-fit flex items-center justify-center flex-col">
        <h2 className="text-2xl sm:text-3xl font-medium mb-2 text-[#02203c] text-center">
          Helping Brands Big and Small.
        </h2>
        <p className="text-base sm:text-lg font-light mb-6 sm:mb-10 text-[#7c8e9a] text-center max-w-2xl">
          We are proud to have some of the most well-known and respected
          corporate clients – but we love to help start-ups and new brands too.
        </p>
        <div className="flex w-full max-w-[1200px] overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full"
            animate={{ x: [0, "-100%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {row1.map((el, index) => (
              <div
                key={index}
                className="grid place-items-center w-[clamp(8rem,1rem+20vmin,20rem)] p-[calc(clamp(8rem,1rem+20vmin,20rem)/10)]"
              >
                <img
                  src={el}
                  alt={`Company ${index + 1}`}
                  className="object-contain w-full h-full rounded-lg aspect-video p-[5px_10px] sm:p-[5px_20px] shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]"
                />
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full"
            animate={{ x: [0, "-100%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {row1.map((el, index) => (
              <div
                key={index}
                className="grid place-items-center w-[clamp(8rem,1rem+20vmin,20rem)] p-[calc(clamp(8rem,1rem+20vmin,20rem)/10)]"
              >
                <img
                  src={el}
                  alt={`Company ${index + 1}`}
                  className="object-contain w-full h-full rounded-lg aspect-video p-[5px_10px] sm:p-[5px_20px] shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]"
                />
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex w-full max-w-[1200px] overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mt-4 sm:mt-6">
          <motion.div
            className="flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full"
            animate={{ x: ["-100%", 0] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {row2.map((el, index) => (
              <div
                key={index}
                className="grid place-items-center w-[clamp(8rem,1rem+20vmin,20rem)] p-[calc(clamp(8rem,1rem+20vmin,20rem)/10)]"
              >
                <img
                  src={el}
                  alt={`Company ${index + 7}`}
                  className="object-contain w-full h-full rounded-lg aspect-video p-[5px_10px] sm:p-[5px_20px] shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]"
                />
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full"
            animate={{ x: ["-100%", 0] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {row2.map((el, index) => (
              <div
                key={index}
                className="grid place-items-center w-[clamp(8rem,1rem+20vmin,20rem)] p-[calc(clamp(8rem,1rem+20vmin,20rem)/10)]"
              >
                <img
                  src={el}
                  alt={`Company ${index + 7}`}
                  className="object-contain w-full h-full rounded-lg aspect-video p-[5px_10px] sm:p-[5px_20px] shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
