"use client";

import { HandshakeIcon, Globe, Unlink } from "lucide-react";
import Link from "next/link";
import { TextReveal } from "../ui/typography";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";

const Card = ({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: any;
}) => (
  <div className="border border-black p-6 bg-white relative">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-700 pr-8">{description}</p>
    <Icon className="absolute top-6 right-6 h-8 w-8" />
  </div>
);

export default function Component() {
  const [containerHeight, setContainerHeight] = useState(0);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  return (
    <div
    data-color="Almond"
    className="section bg-[#f8f7f4] w-full mx-auto max-w-[85rem] my-10 p-8 flex flex-col md:flex-row gap-8">
      <div className="flex-1" style={{ height: containerHeight }}>
        <div className="mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <div className="w-1 h-1 bg-black rounded-full"></div>
            PERKS OF THE JOB
          </div>
        </div>
        <h2 className="text-4xl font-serif sticky bottom-8">
          Why Choose Signifco?
        </h2>
        <button className="bg-[#fdfdc4] hover:bg-[#fdfdc4] border border-black text-black px-6 py-2 font-semibold">
          <Link href="/Connect">
            <TextReveal>CONNECT &#8599;</TextReveal>
          </Link>
        </button>
      </div>
      <div ref={rightColumnRef} className="flex-1 space-y-4">
        <Card
          title="Diverse and Dynamic"
          description="Join our global community for endless growth opportunities in a culture that values individuality and joyful collaboration."
          Icon={Globe}
        />
        <Card
          title="Collaborate with the Best"
          description="Work alongside highly skilled professionals in an environment where dedication to excellence isn't just expected, it's the standard."
          Icon={HandshakeIcon}
        />
        <Card
          title="Freedom and Responsibility"
          description="At Signifco, we champion autonomy and responsibility, providing the support you need to thrive while contributing meaningfully to our team's innovative endeavors."
          Icon={Unlink}
        />
      </div>
    </div>
  );
}
