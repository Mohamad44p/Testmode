/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TextReveal } from "../ui/typography";
import Link from "next/link";

export default function JoinUsBa() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10 mix-blend-overlay"></div>
      <div className="container mx-auto px-4">
        <motion.div
          className={`max-w-3xl mx-auto opacity-0 text-center transition-all duration-1000 ease-out`}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="mb-6 text-5xl font-bold tracking-tight">Join Us</h2>
          <p className="mb-8 text-xl leading-relaxed">
            we're always eager to connect with like-minded professionals in digital marketing, design, development, and strategy. If you share our passion for creativity and innovation, we’d love to collaborate!
          </p>
          <Link href="/Careers">
            <Button
              variant="secondary"
              size="lg"
              className="group relative overflow-hidden bg-white text-purple-700 hover:bg-purple-50 transition-colors duration-300"
            >
              <span className="relative z-10">
                <TextReveal>Open Positions</TextReveal>
              </span>
              <ArrowRightIcon className="ml-2 h-5 w-5 inline-block transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute inset-0 h-full w-full bg-purple-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
