import AboutPage from "@/components/About/AboutPage";
import CircleSection from "@/components/About/CircleSection";
import ForSection from "@/components/About/ForSection";
import Story from "@/components/About/Story";
import CenterAligner from "@/components/CenterAligner";
import OurTeam from "@/components/OurTeam";
import React from "react";

export default function page() {
  return (
    <main>
      <section data-color="white" className="section">
        <AboutPage />
      </section>
      <section data-color="yellow" className="section">
        <CircleSection />
      </section>
      <section data-color="white" className="section">
        <Story />
      </section>
      <section data-color="white">
        <OurTeam />
      </section>

      <section data-color="white">
        <ForSection />
      </section>
    </main>
  );
}
