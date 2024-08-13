import React, { useState, useEffect, useRef } from "react";
import { ChevronDownIcon } from "lucide-react";

const faqItems = [
  {
    id: "01",
    question:
      "What metrics should I track to measure digital marketing success?",
    answer:
      "Key metrics include website traffic, conversion rates, SEO ranking, social media engagement, email open rates, and click-through rates. These will help you understand the effectiveness of your marketing efforts and where to make improvements.",
  },
  {
    id: "02",
    question:
      "How do you ensure the digital strategies are aligned with the latest market trends?",
    answer:
      "We continuously monitor industry news, attend professional conferences, and engage in ongoing training to stay ahead of the latest digital marketing trends and technologies.",
  },
  {
    id: "03",
    question: "How do you measure the ROI of your digital marketing efforts?",
    answer:
      "We measure ROI by tracking conversions, sales, and other key performance indicators that align with our clients' business objectives.",
  },
  {
    id: "04",
    question:
      "How do you ensure brand consistency across all digital channels?",
    answer:
      "We develop a comprehensive brand guideline and ensure that all content and campaigns are consistent with the brand's voice and identity.",
  },
];

export default function FAQ() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [activeQuestion, setActiveQuestion] = useState<string | null>("01");
  const [isHovering, setIsHovering] = useState(false);
  const faqRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: {
      target: any;
      clientX: any;
      clientY: any;
    }) => {
      if (faqRef.current && faqRef.current.contains(e.target)) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section data-color="RaisinBlack" className="section h-screen mt-[20vh]">
      <div
        className="relative flex flex-col items-center justify-center p-4 sm:p-6 md:p-8"
        ref={faqRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering && (
          <div
            className="custom-cursor hidden lg:block"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              position: "fixed",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "#9ACD32",
              pointerEvents: "none",
              zIndex: 9999,
              transition: "transform 0.1s ease-out",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 120px 120px rgba(154, 205, 50, 0.2)",
            }}
          />
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 md:mb-16 text-center tracking-wider">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <div className="w-full max-w-4xl space-y-4 sm:space-y-6">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="border-b border-[#9ACD32] pb-4 sm:pb-6"
            >
              <button
                className="w-full text-left flex justify-between items-center py-2 focus:outline-none group"
                onClick={() =>
                  setActiveQuestion(activeQuestion === item.id ? null : item.id)
                }
              >
                <span className="text-[#9ACD32] mr-4 sm:mr-6 md:mr-8 text-xl sm:text-2xl md:text-3xl font-bold">
                  {item.id}
                </span>
                <span className="text-lg sm:text-xl md:text-2xl font-bold flex-grow tracking-wide group-hover:text-[#9ACD32] transition-colors duration-300">
                  {item.question}
                </span>
                <ChevronDownIcon
                  className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#9ACD32] transition-transform duration-300 ${
                    activeQuestion === item.id ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {activeQuestion === item.id && (
                <div className="mt-2 sm:mt-3 md:mt-4 text-gray-300 text-base sm:text-lg leading-relaxed pl-8 sm:pl-12 md:pl-16">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
