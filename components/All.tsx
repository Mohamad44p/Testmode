"use client";

import React, { useEffect } from "react";
import HomeSection from "./Hero";
import CardsSec from "./CardsSec";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Horizontal from "./Horizontal";
import OurTeam from "./OurTeam";
import Testimonial from "./Testimonial";
import LastSec from "./LastSec";
import CardCase from "./CardCase";

gsap.registerPlugin(ScrollTrigger);

export default function All() {
  return (
    <div className="main w-full">
      {" "}
      <HomeSection />
      <section data-color="white">
        <CardsSec />
      </section>
      <section data-color="Ming">
        <Horizontal />
      </section>
      <section data-color="white">
        <OurTeam />
      </section>
      <section data-color="white">
        <Testimonial />
      </section>
      <section data-color="white">
        <CardCase />
      </section>
      <section data-color="white">
        <LastSec />
      </section>
    </div>
  );
}
