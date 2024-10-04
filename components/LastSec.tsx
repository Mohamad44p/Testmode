"use client"

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GibberishText from "./ui/GibberishText";
import Link from "next/link";
import { AnimatedText } from "./Storytelling";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  main_image: string;
  small_description: string;
  categories: string[];
  tags: string[];
}

interface LastSecProps {
  posts: BlogPost[];
}

export default function LastSec({ posts }: LastSecProps) {
  const Ref = useRef(null);

  useLayoutEffect(() => {
    gsap.to(".disappear", {
      scrollTrigger: {
        trigger: ".real",
        scrub: 1,
        start: "-85% -90%",
        end: "bottom 20%",
      },
      opacity: 0,
    });
  }, []);

  return (
    <div
      data-color="white"
      className="capsule overflow-y-hidden  section w-full  flex justify-between"
    >
      <div className="capleft  flex flex-col justify-between py-[10rem] ml-[2.5rem] font-semibold text-xl">
        <h3 className="w-[60%]">
          Stay up-to-date on the latest healthcare innovations and thought
          leadership.
        </h3>
        <div className="">
          <h1 className="text-[4.44rem] leading-[1.2] font-light">
            Explore <br />
            Our <br />
            Insights
          </h1>
          <div className="capbtn text-xl py-3 px-3 text-center border-2 mt-5 border-black">
            {" "}
            <GibberishText
              text="VIEW ALL ARTICLES"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="capright flex justify-center items-center gap-x-44 w-full">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className={`cap1 border-[1px] border-black w-[40%] h-[100%] ${index === 0 ? "-rotate-[15deg] translate-x-[7rem]" : "-rotate-[15deg]"
              } rounded-full flex flex-col ${index === 0 ? "gap-6" : "gap-4 flex-col-reverse"
              } items-center p-6 overflow-hidden`}
          >
            <div className={`image w-[20rem] h-[20rem] ${index === 0 ? "mt-4" : "mb-4"} rounded-full overflow-hidden`}>
              <Image
                className="object-cover w-full h-full"
                width={1800}
                height={1900}
                src={post.main_image}
                alt={post.title}
              />
            </div>
            <h1 className="text-2xl font-bold text-center px-6 mb-2">
              {post.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-2 px-4 mb-2">
              {post.categories.map((category, catIndex) => (
                <span key={catIndex} className="text-2xl bg-purple-100 text-purple-800 px-5 py-2 rounded-full font-medium">
                  {category}
                </span>
              ))}
            </div>
            <Link href={`/blog/${post.slug}`}>
              <button className="capbtn text-sm py-2 px-4 text-center border-2 border-black bg-white hover:bg-gray-100 transition-colors duration-300 rounded-full">
                <AnimatedText text="READ MORE" className="cursor-pointer" />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}