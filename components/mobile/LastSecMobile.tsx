/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import GibberishText from "../ui/GibberishText";

export default function LastSecMobile() {
  return (
    <>
      <div className="capleft w-full lg:w-[25%] flex flex-col justify-between py-[5vh] lg:py-[5rem] ml-[2.5rem] font-semibold text-l min-h-screen">
        {/* Ensures this section takes at least full screen height */}
        <h3 className="w-[60%]">
          Stay up-to-date on the latest healthcare innovations and thought
          leadership.
        </h3>
        <div className="flex-grow flex flex-col justify-between">
          {/* Use flex-grow to push the content down when space allows */}
          <h1 className="text-[2.5rem] lg:text-[4.44rem] leading-[1.2] font-light">
            Explore <br />
            Our <br />
            Insights
          </h1>
          <div className="capbtn text-xl py-3 px-3 text-center border-2 mt-5 border-black">
            <GibberishText
              text="VIEW ALL ARTICLES"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="capright w-full flex flex-col gap-y-10 justify-around min-h-screen">
        {/* Ensures this section also takes at least full screen height */}
        <div className="cap1 border-[1px] border-black w-full h-auto rounded-full flex flex-col gap-6 items-center text-center overflow-hidden">
          {/* Added overflow-hidden to avoid any overflow issues */}
          <div className="image w-[15rem] h-[15rem] mt-10 rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/66327831c53bb8c459a9b605_Untitled%20design-7.webp"
              alt=""
            />
          </div>
          <h1 className="text-xl font-semibold px-10">
            Digital Therapeutics Decoded: A Guide to Understanding DTx and Why
            They're Worth Your Attention
          </h1>
          <h1 className="text-xl">Thought Leadership</h1>
          <button className="capbtn my-10 cursor-pointer text-xl py-3 px-3 text-center border-2 border-black">
            READ MORE
          </button>
        </div>
        <div className="cap1 border-[1px] border-black w-full h-auto rounded-full flex flex-col-reverse gap-6 md:gap-10 items-center text-center overflow-hidden">
          <div className="image w-[15rem] h-[15rem] mb-10 rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/664e2389903487ba78a7ec53_Untitled%20design-13.png"
              alt=""
            />
          </div>
          <p className="text-l font-light px-10">
            The Reuters Digital Health 24 event in San Diego brought together
            over 300 digital leaders from across healthcare to discuss the
            future of digitally enabled care.
          </p>
          <h1 className="text-xl font-semibold">
            5 Key Takeaways from the Reuters Digital Health ‘24 Summit
          </h1>
          <h1 className="text-xl">Thought Leadership</h1>
          <button className="capbtn cursor-pointer text-xl py-3 px-3 text-center border-2 border-black">
            READ MORE
          </button>
        </div>
      </div>
    </>
  );
}
