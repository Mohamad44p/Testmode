/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GibberishText from "./ui/GibberishText";

gsap.registerPlugin(ScrollTrigger);

export default function LastSec() {
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
      className="capsule section mt-[10rem] w-full h-[150vh] flex justify-between"
    >
      <div className="capleft w-[25%]  flex flex-col justify-between py-[10rem] ml-[2.5rem] font-semibold text-l">
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
              text="VIEW ALL ARTICALS"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="capright w-[75%] flex justify-around">
        <div className="cap1 border-[1px] border-black w-[35%] h-[90%] -rotate-[15deg] translate-x-[7rem] rounded-full flex flex-col gap-20 items-center">
          <div className="image w-[15rem] h-[15rem]  mt-10 rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/66327831c53bb8c459a9b605_Untitled%20design-7.webp"
              alt=""
            />
          </div>
          <h1 className="text-xl font-semibold text-center px-10">
            Digital Therapeutics Decoded: A Guide to Understanding DTx and Why
            They're Worth Your Attention
          </h1>
          <h1 className="text-xl">Thought Leadership</h1>

          <button className="capbtn cursor-pointer text-xl py-3 px-3 text-center border-2 border-black">
            READ MORE
          </button>
        </div>
        <div className="cap1 border-[1px] border-black w-[35%] h-[90%] -rotate-[15deg] rounded-full flex flex-col-reverse gap-20 items-center">
          <div className="image w-[15rem] h-[15rem]  mb-10 rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/664e2389903487ba78a7ec53_Untitled%20design-13.png"
              alt=""
            />
          </div>
          <p className="text-l font-light text-center ">
            The Reuters Digital Health 24 event in San Diego brought together
            over 300 digital leaders from across healthcare to discuss the
            future of digitally enabled care.
          </p>
          <h1 className="text-xl font-semibold text-center ">
            5 Key Takeaways from the Reuters Digital Health ‘24 Summit
          </h1>
          <h1 className="text-xl">Thounght Leadership</h1>
          <button className="capbtn cursor-pointer text-xl py-3 px-3 text-center border-2 border-black">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
