"use client";

import React, { useState, useEffect } from "react";
import OurTeam from "../OurTeam";
import OurTeamMobiel from "./OurTeamMobiel";

export default function OurTeamRes() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section data-color="white" className="section">
      {isMobile ? <OurTeamMobiel /> : <OurTeam />}
    </section>
  );
}
