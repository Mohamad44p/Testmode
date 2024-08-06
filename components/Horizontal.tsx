/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Horizontal() {
  useLayoutEffect(() => {
    const pin = gsap.to(".slide", {
      scrollTrigger: {
        trigger: ".real",
        scroller: "body",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1,
        anticipatePin: 4,
      },
      xPercent: -320,
      ease: "power1.inOut(1, 0.3)",
    });

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div
      data-color="salmon"
      className="real overflow-y-hidden mt-[20vh] mb-[10vh] section w-full sticky"
    >
      <div className="cont h-[100vh] relative">
        <div className="slides w-full h-[100vh] flex sticky top-0 left-0 gap-10 md:gap-20">
          <div className="slide w-full h-screen flex-shrink-0 flex flex-col items-center justify-center">
            <div className="text mt-[10vh]">
              <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] leading-tight">
                Real Talk,
              </h1>
              <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] leading-tight">
                Real Impact
              </h1>
            </div>
            <div className="image absolute top-[60%] overflow-hidden right-0 w-[10rem] md:w-[15rem] lg:w-[20rem] h-[10rem] md:h-[15rem] lg:h-[20rem] bg-green-500 -translate-y-1/2 rounded-full translate-x-1/2">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className="slide w-full h-screen flex-shrink-0 flex justify-center py-10 md:py-[4rem] relative">
            <div className="image absolute top-[60%] overflow-hidden right-0 w-[10rem] md:w-[15rem] lg:w-[20rem] h-[10rem] md:h-[15rem] lg:h-[20rem] bg-green-500 -translate-y-1/2 rounded-full translate-x-1/2">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
            <div className="img1 w-[8rem] md:w-[12rem] lg:w-[15rem] h-[8rem] md:h-[12rem] lg:h-[15rem] bg-blue-500 overflow-hidden absolute top-[70%] z-[3] left-1/2 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1512646605205-78422b7c7896?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
            <div className="img1 w-[6rem] md:w-[8rem] lg:w-[10rem] h-[6rem] md:h-[8rem] lg:h-[10rem] bg-blue-500 overflow-hidden absolute top-[73%] z-[3] left-1/4 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="w-[80%] md:w-[60%] text-center relative mt-[10vh]">
              <h3 className="absolute top-4 left-0 w-[10rem] md:w-[13rem] text-start font-semibold text-sm md:text-base">
                We’re on a mission to impact as many business as possible and
                build a better company while we do it. Here’s our progress.
              </h3>
              <h1 className="font-semibold text-[4rem] md:text-[6rem] lg:text-[10rem] pt-[5rem] text-white leading-none">
                10K
              </h1>
              <h3 className="text-[1.2rem] md:text-[2rem] leading-none">
                Digital Campinas — Profit-Boosting Tactics — For over 500
                clients.
              </h3>
            </div>
          </div>
          <div className="slide w-full h-screen flex-shrink-0 flex justify-center py-10 md:py-[4rem] relative">
            <div className="img1 w-[15rem] md:w-[20rem] lg:w-[25rem] h-[15rem] md:h-[20rem] lg:h-[25rem] overflow-hidden absolute top-[60%] z-[3] left-1/4 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1b841fcd9f50115dbe9c_RocketLaunch.png"
                alt=""
              />
            </div>
            <div className="img1 w-[10rem] md:w-[12rem] lg:w-[15rem] h-[10rem] md:h-[12rem] lg:h-[15rem] overflow-hidden absolute top-[70%] z-[3] left-[45%] rounded-full">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1b924ee31caf14d64b2a_TreeStructure.png"
                alt=""
              />
            </div>
            <div className="image absolute top-[70%] overflow-hidden right-0 w-[12rem] md:w-[15rem] lg:w-[17rem] h-[12rem] md:h-[15rem] lg:h-[17rem] -translate-y-1/2 rounded-full translate-x-1/2">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1ba6eb9637155282b42f_Lightning.png"
                alt=""
              />
            </div>
            <div className="w-[80%] md:w-[60%] text-center relative mt-[10vh]">
              <h3 className="absolute top-0 left-0 w-[10rem] md:w-[15rem] text-start font-semibold text-sm md:text-base">
                Our team is global and diverse, because our individual
                experiences make us stronger.
              </h3>
              <h1 className="font-semibold text-[4rem] md:text-[6rem] lg:text-[10rem] pt-[5rem] text-white leading-none">
                20
              </h1>
              <h3 className="text-[1.2rem] md:text-[2rem] leading-none">
                Marketing & Tech Experts.
              </h3>
              <h3 className="text-[1rem] md:text-[1.2rem] mt-3 leading-none">
                Our team brings creative ideas to fuel your growth.
              </h3>
            </div>
          </div>
          <div className="slide special w-full h-screen flex-shrink-0 flex justify-center py-10 md:py-[4rem] relative">
            <div className="img1 w-[10rem] md:w-[15rem] lg:w-[20rem] h-[10rem] md:h-[15rem] lg:h-[20rem] overflow-hidden absolute bottom-0 translate-y-[30%] -translate-x-1/4 z-[3] left-1/4 rounded-full opacity-1 disappear">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1716907997192-5c9fcfcd8bbe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="img1 w-[10rem] md:w-[15rem] lg:w-[20rem] h-[10rem] md:h-[15rem] lg:h-[20rem] overflow-hidden absolute bottom-0 translate-y-[30%] -translate-x-1/4 z-[3] left-1/2 rounded-full opacity-1 disappear">
              <img
                className="object-cover w-full h-full"
                src="/test3.jpeg"
                alt=""
              />
            </div>
            <div className="img1 w-[8rem] md:w-[10rem] lg:w-[13rem] h-[8rem] md:h-[10rem] lg:h-[13rem] overflow-hidden absolute top-[70%] z-[3] left-[25%] rounded-full disappear">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1716793165476-37ad6394472e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="image absolute top-[70%] overflow-hidden right-[7%] w-[10rem] md:w-[15rem] lg:w-[20rem] h-[10rem] md:h-[15rem] lg:h-[20rem] -translate-y-1/2 rounded-full translate-x-1/2 disappear">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1653580483678-f91fdd2abece?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="w-[80%] md:w-[60%] text-center relative mt-[10vh]">
              <h1 className="font-semibold text-[4rem] md:text-[6rem] lg:text-[10rem] pt-[5rem] text-white leading-none">
                850
              </h1>
              <h3 className="text-[1.2rem] md:text-[2rem] leading-none">
                Client Testimonials.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
