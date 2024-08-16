/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

gsap.registerPlugin(ScrollTrigger);

interface BlogPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export default function LastSec() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const Ref = useRef(null);

  useEffect(() => {
    fetchPosts();
  }, []);

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

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://befoundonline.ps/wp-json/wp/v2/posts?_embed&per_page=2"
      );
      if (!response.ok) throw new Error("Failed to fetch posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  return (
    <div
      data-color="Almond"
      className="capsule section mt-[5rem] md:mt-[10rem] h-[190vh] w-full flex flex-col lg:flex-row justify-between"
    >
      <div className="flex flex-col lg:flex-row w-full">
        <div className="capleft w-full lg:w-[25%] flex flex-col justify-between gap-y-11 py-[5rem] md:py-[10rem] px-[2.5rem] lg:ml-[2.5rem] font-semibold text-l">
          <h3 className="w-full lg:w-[60%] mb-8 lg:mb-0">
            Stay up-to-date on the latest healthcare innovations and thought
            leadership.
          </h3>
          <div className="mt-8 lg:mt-0">
            <h1 className="text-[2.5rem] lg:text-[4.44rem] leading-[1.2] font-light mb-4 lg:mb-6">
              Explore <br />
              Our <br />
              Insights
            </h1>
            <Link
              href="/Insights"
              className="capbtn text-xl py-3 px-3 text-center border-2 border-black block w-full lg:w-auto"
            >
              VIEW ALL ARTICLES
            </Link>
          </div>
        </div>
        <div className="capright w-full lg:w-[75%] flex flex-col lg:flex-row gap-y-14 lg:gap-y-0 justify-around mt-8 lg:mt-0">
          {isLoading ? (
            <>
              {[0, 1].map((index) => (
                <div
                  key={index}
                  className="w-full lg:w-[35%] flex flex-col items-center gap-6 mb-10 lg:mb-0"
                >
                  <Skeleton className="w-[15rem] h-[15rem] rounded-full" />
                  <Skeleton className="w-3/4 h-6" />
                  <Skeleton className="w-5/6 h-20" />
                  <Skeleton className="w-1/2 h-10" />
                </div>
              ))}
            </>
          ) : (
            <>
              {posts.map((post, index) => (
                <div
                  key={post.id}
                  className={`cap1 border-[1px] border-black w-full lg:w-[35%] h-auto lg:h-[100%] ${
                    index === 0
                      ? "lg:-rotate-[15deg] lg:translate-x-[7rem]"
                      : "lg:-rotate-[15deg]"
                  } rounded-full flex flex-col gap-10 lg:gap-20 items-center mb-10 lg:mb-0`}
                >
                  <div className="image w-[15rem] h-[15rem] mt-10 rounded-full overflow-hidden">
                    <img
                      className="object-cover w-full h-full"
                      src={
                        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                        "/placeholder.svg"
                      }
                      alt={
                        post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
                        "Placeholder"
                      }
                    />
                  </div>
                  <h1
                    className="text-xl font-semibold text-center px-10"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <h1
                    className="text-xl bg-orange-300 rounded-full p-5 font-semibold text-center px-10"
                    dangerouslySetInnerHTML={{ __html: post.slug }}
                  />
                  <div
                    className="text-xl px-5"
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.rendered,
                    }}
                  />
                  <div className="py-10 md:py-16 lg:py-20">
                    <button className="capbtn cursor-pointer text-xl py-3 px-3 text-center border-2 border-black mb-10 lg:mb-0">
                      READ MORE
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
