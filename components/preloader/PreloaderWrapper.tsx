"use client";

import React, { useState, useEffect } from "react";
import Preloader from "./Preloader";

export default function PreloaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    if (!hasLoaded) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return <>{children}</>;
}
