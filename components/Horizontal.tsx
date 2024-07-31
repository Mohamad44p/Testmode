/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function Horizontal() {
  useLayoutEffect(() => {
    gsap.to(".slide", {
      scrollTrigger: {
        trigger: ".real",
        scroller: "body",
        start: "top top",
        end: "+=300vh",
        scrub: 4,
        fastScrollEnd: false,
        markers: true,
      },
      xPercent: -500,
      ease: "power2.out",
    });
  }, []);

  return (
    <div data-color="salmon" className="real section w-full sticky">
      <div className="cont h-[100vh] relative">
        <div className="slides w-full h-[100vh] flex sticky top-0 left-0 gap-20">
          <div className="slide w-full h-screen flex-shrink-0 items-center justify-center flex">
            <div className="text">
              <h1 className="text-[5.5rem]">Real Talk,</h1>
              <h1 className="text-[5.5rem]">Real Impact</h1>
            </div>
            <div className="image absolute top-1/2 overflow-hidden right-0 w-[20rem] h-[20rem] bg-green-500 -translate-y-1/2 rounded-full translate-x-1/2">
              <h1 className="text-[1.5rem] text-end w-full">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </h1>
            </div>
          </div>
          <div className="slide w-full h-screen flex-shrink-0 flex justify-center py-[4rem] relative">
            <div className="image absolute top-1/2 overflow-hidden right-0 w-[20rem] h-[20rem] bg-green-500 -translate-y-1/2 rounded-full translate-x-1/2">
              <h1 className="text-[1.5rem] text-end w-full">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
              </h1>
            </div>
            <div className="img1 w-[15rem] h-[15rem] bg-blue-500 overflow-hidden absolute -translate-y-[50%] top-0 z-[3] left-1/2 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1512646605205-78422b7c7896?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
            <div className="img1 w-[10rem] h-[10rem] bg-blue-500 overflow-hidden absolute top-[63%] z-[3] left-1/4 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="w-[60%] text-center relative">
              <h3 className="top-0 left-0 absolute w-[13rem] text-start font-semibold">
                We’re on a mission to impact as many lives as possible and build
                a better company while we do it. Here’s our progress.
              </h3>
              <h1 className="font-semibold text-[10rem] pt-[5rem] text-white leading-none">
                20.4M
              </h1>
              <h3 className="text-[3rem] leading-none">
                Real people — real lives — we have built products and solutions
                for.
              </h3>
            </div>
          </div>
          <div className="slide w-full h-screen flex-shrink-0 flex justify-center py-[4rem] relative">
            <div className="img1 w-[25rem] h-[25rem] overflow-hidden absolute top-[50%] z-[3] left-1/4 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1b841fcd9f50115dbe9c_RocketLaunch.png"
                alt=""
              />
            </div>
            <div className="img1 w-[15rem] h-[15rem] overflow-hidden absolute -translate-y-[50%] top-5% z-[3] left-[45%] rounded-full">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1b924ee31caf14d64b2a_TreeStructure.png"
                alt=""
              />
            </div>
            <div className="image absolute top-3/4 overflow-hidden right-0 w-[17rem] h-[17rem] -translate-y-1/2 rounded-full translate-x-1/2">
              <h1 className="text-[1.5rem] text-end w-full">
                <img
                  className="w-full h-full object-cover"
                  src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1ba6eb9637155282b42f_Lightning.png"
                  alt=""
                />
              </h1>
            </div>
            <div className="w-[60%] text-center relative">
              <h3 className="top-0 left-0 absolute w-[15rem] text-start font-semibold">
                Our team is global and diverse, because our individual
                experiences make us stronger.
              </h3>
              <h1 className="font-semibold text-[10rem] pt-[5rem] text-white leading-none">
                49%
              </h1>
              <h3 className="text-[3rem] leading-none">
                Expert Women in Tech.
              </h3>
            </div>
          </div>
          <div className="slide special w-full h-screen flex-shrink-0 flex justify-center py-[4rem] relative">
            <div className="img1 w-[20rem] h-[20rem] overflow-hidden absolute bottom-0 translate-y-1/2 -translate-x-1/4 z-[3] left-1/4 rounded-full opacity-1 disappear">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1716907997192-5c9fcfcd8bbe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="img1 w-[13rem] h-[13rem] overflow-hidden absolute -translate-y-[50%] top-0 z-[3] left-[25%] rounded-full disappear">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1716793165476-37ad6394472e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="image absolute top-[20%] overflow-hidden right-[7%] w-[20rem] h-[20rem] -translate-y-1/2 rounded-full translate-x-1/2 disappear">
              <h1 className="text-[1.5rem] text-end w-full">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1653580483678-f91fdd2abece?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </h1>
            </div>
            <div className="w-[60%] text-center relative">
              <h1 className="font-semibold text-[10rem] pt-[5rem] text-white leading-none">
                13
              </h1>
              <h3 className="text-[3rem] leading-none">
                Nationalities Represented on Our Team.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
