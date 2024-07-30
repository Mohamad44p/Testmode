/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = [
  {
    text: "empathetic",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png",
  },
  {
    text: "empathetic",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png",
  },
  {
    text: "empathetic",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png",
  },
  {
    text: "empathetic",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png",
  },
  {
    text: "useful",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png",
  },
  {
    text: "useful",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png",
  },
  {
    text: "useful",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png",
  },
  {
    text: "useful",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png",
  },
  {
    text: "useful",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png",
  },
  {
    text: "intuitive",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png",
  },
  {
    text: "intuitive",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png",
  },
  {
    text: "intuitive",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png",
  },
  {
    text: "intuitive",
    imgSrc:
      "https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png",
  },
];

const HomeSection = () => {
  useEffect(() => {
    gsap.set(".slidesm", { scale: 5 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home",
        scrub: 1,
        start: "top top",
        end: "bottom bottom",
      },
    });

    tl.to(".videos", { "--clip": "0%", ease: "power2" }, "a")
      .to(".slidesm", { ease: "power2", scale: 1 }, "a")
      .to(".lft", { ease: "power4", xPercent: -10 }, "b")
      .to(".rgt", { ease: "power4", xPercent: 10, stagger: 0.0002 }, "b");
  }, []);

  const renderElements = (classNameName: any) => (
    <div
      className={`row ${classNameName} w-full flex item-center gap-3 pb-7 whitespace-nowrap`}
    >
      {words.map((word, index) => (
        <div key={index} className="elem flex item-center gap-5">
          <h1 className="text-5xl font-semibold">{word.text}</h1>
          <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
            <img
              className="object-cover w-full h-full"
              src={word.imgSrc}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div data-color="black" className="home section w-full h-[200vh] relative">
      <div className="w-full sticky top-0 left-0">
        <div className="btntext absolute bottom-[5%] left-[3%] z-[4]">
          <h1>
            We build big ideas. <br />
            Software. Apps. Tools. <br />
            For real people. Real <br />
            lives.
          </h1>
        </div>
        <div
          style={{ "--clip": "100%" } as React.CSSProperties}
          className="videos z-[3] w-full h-screen absolute top-0 left-0 overflow-hidden"
        >
          <video
            muted
            loop
            autoPlay
            className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="https://cdn.significo.com/videos/significo-main-hero.mp4"
          ></video>
        </div>
        <div className="marquees w-full h-screen relative overflow-hidden">
          <div className="heading absolute top-[5%] left-1/2 -translate-x-1/2">
            <h1 className="text-xl font-regular text-center">
              Crafting a new paradigm of <br />
              healthcare, one that is
            </h1>
          </div>
          <div className="slidesm scale-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[35%] w-[90%]">
            <div className="row lft w-full -translate-x-1/2 flex item-center gap-3 pb-7 whitespace-nowrap">
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">empathetic</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">useful</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">intuitive</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">empathetic</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">useful</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">intuitive</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">empathetic</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">useful</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">intuitive</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row rgt w-full -translate-x-[83.7%] flex item-center gap-3 pb-7 whitespace-nowrap">
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">empathetic</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">useful</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">intuitive</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">empathetic</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">useful</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">intuitive</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">empathetic</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">useful</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">intuitive</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row lft w-full -translate-x-2/3 flex item-center gap-3 pb-7 whitespace-nowrap">
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">empathetic</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">useful</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">intuitive</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">empathetic</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">useful</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">intuitive</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">empathetic</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">useful</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">intuitive</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row rgt w-full -translate-x-1/3 flex item-center gap-3 whitespace-nowrap">
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">empathetic</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">useful</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">intuitive</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">empathetic</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">useful</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">intuitive</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">empathetic</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">useful</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex item-center gap-5">
                <h1 className="text-5xl font-semibold">intuitive</h1>
                <div className="img w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
