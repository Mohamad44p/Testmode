"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import TransitionEffect from "./Transition";
import { AnimatePresence } from "framer-motion";

export default function TransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {children}
      <AnimatePresence mode="wait">
        {isTransitioning && <TransitionEffect />}
      </AnimatePresence>
    </>
  );
}
