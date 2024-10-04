"use client";

import React, { useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import gsap from "gsap";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  main_image: string;
  categories: string[];
}

interface LastSecProps {
  posts: BlogPost[];
}

export default function Component({ posts }: LastSecProps) {
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
      className="capsule section mt-20 w-full min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 p-8"
    >
      <div className="capleft flex flex-col justify-between py-16 font-semibold">
        <h3 className="text-lg mb-8 max-w-xs">
          Stay up-to-date on the latest healthcare innovations and thought
          leadership.
        </h3>
        <h1 className="text-5xl lg:text-[4.44rem] leading-tight font-light mb-8">
          Explore <br />
          Our <br />
          Insights
        </h1>
        <Button
          variant="outline"
          className="capbtn text-xl py-6 px-8 w-full sm:w-auto"
        >
          VIEW ALL ARTICLES
        </Button>
      </div>
      <div className="capright flex md:flex-row flex-col items-center justify-center gap-y-14 md:gap-y-0 md:gap-x-24">
        {posts.slice(0, 2).map((post, index) => (
          <div
            key={post.id}
            className={`cap${
              index + 1
            } border-2 border-primary/20  md:w-[22rem] md:h-[37rem] rotate-0 md:-rotate-[15deg] ${
              index === 0 ? "lg:translate-x-8" : "lg:-translate-x-8"
            } rounded-full flex flex-col justify-between items-center p-12 transition-all hover:shadow-xl bg-background`}
          >
            <div
              className={`image md:w-full w-52 h-52 md:h-[50%] ${
                index === 0 ? "mb-8" : "order-last mt-8"
              } rounded-full overflow-hidden border-4 border-primary/20 shadow-lg`}
            >
              <Image
                src={post.main_image}
                alt={post.title}
                width={1900}
                height={2000}
                className="object-cover w-full h-full transition-transform hover:scale-110"
              />
            </div>
            <div className="flex flex-col items-center text-center space-y-6 flex-grow justify-center">
              <h2 className="text-2xl font-bold leading-tight mb-4 px-4 line-clamp-3">
                {post.title}
              </h2>
            </div>
            <span className={`text-2xl bg-[#E9BBFF] w-[250px] text-center font-semibold rounded-full
              `}>
              {post.categories}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
