"use client";

import React from "react";
import HeroCareers from "./HeroCareers";
import WhyChoose from "./WhyChoose";
import JobOpportunities from "./JobOpportunities";
import OurTeam from "../OurTeam";
import Banner from "../Banner";

export default function AllCareers() {
  return (
    <div>
      <HeroCareers />
      <WhyChoose />
      <JobOpportunities />
      <OurTeam />
      <Banner
        ctaLink="/contact"
        ctaText="LET'S TALK"
        title="Come Build a Better Future with Us."
        description="Explore how Significo's partnership can advance your digital experience and unleash your technology development."
      />
    </div>
  );
}
