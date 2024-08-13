/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "Be Found Online delivered an outstanding academic portal for our Dual Studies Faculty, tailored to our specific needs. The portal has streamlined our academic processes and significantly improved the learning experience for both students and faculty. The team understood our requirements and executed them flawlessly, resulting in a highly functional and user-friendly platform.",
    name: "Musa Alrefayeh",
    imgSrc: "/images/Musa.jpg",
    position:
      "Dr Musa Alrefayeh, Dean of Dual Studies Faculty, Palestine Polytechnic University",
  },
  {
    text: "Be Found Online transformed our clinic's presence with a powerful marketing strategy. The results were remarkable—sales skyrocketed by 400%, and customer engagement surged by 500%. Their approach was strategic and highly effective, making a significant impact on our growth.",
    name: "Aya Numuruh",
    imgSrc: "/images/Ayanu.jpeg",
    position: "Aya Numuruh, Business Owner, Lavender Beauty Clinic",
  },
  {
    text: "Be Found Online helps us expand our digital footprint everyday through strong SEO, SEM and Social expertise, caring as if our company would be theirs. Not only skilled and professional team, also super responsive, reliable and fun to work with. Thank you so much! Only logical to witness that different teams within our company are willing to partner with you to get a similar reach, strong online results and enjoyment!",
    name: "Sarah L",
    imgSrc:
      "/images/SaraL.jpeg",
    position: "Sarah L, Chief Operation Manager, Heavy Equipment Company",
  },
];

export default function Testimonial() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current: number) => setCurrentSlide(current),
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div
      data-color="Almond"
      className="para section md:mb-[15rem] w-full min-h-screen flex flex-col gap-y-11 justify-center items-center p-4"
    >
      <Slider
        ref={sliderRef}
        {...settings}
        className="w-full md:w-4/5 lg:w-2/3"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="paratext relative flex justify-center items-center flex-col border-[2px] border-black p-4 md:p-8 lg:p-12"
          >
            <h3 className="info text-center text-sm md:text-base lg:text-lg font-semibold mt-10 px-4 md:px-10 lg:px-20">
              {testimonial.text}
            </h3>
            <div className="flex items-center justify-center flex-col gap-y-4 md:gap-y-6 lg:gap-y-3">
              <div className="img w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full mt-10 mb-4 overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                />
              </div>
              <h1 className="mt-2 text-sm md:text-base lg:text-lg">
                {testimonial.name}
              </h1>
              <p>
                <span className="text-sm italic text-orange-500">
                  {testimonial.position}
                </span>
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex items-center justify-between w-full max-w-4xl border border-black ">
        <div className="border-black">
          <div
            className="flex items-center justify-center bg-orange-500 w-16 h-12 md:w-24 md:h-16 lg:w-32 lg:h-20 cursor-pointer"
            onClick={prev}
          >
            <ArrowLeft size={32} />
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-2 md:gap-x-4 lg:gap-x-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full ${
                index === currentSlide ? "bg-black" : "bg-gray-300"
              } cursor-pointer`}
              onClick={() => (sliderRef.current as Slider)?.slickGoTo(index)}
            />
          ))}
        </div>
        <div className="border-black">
          <div
            className="flex items-center justify-center bg-orange-500 w-16 h-12 md:w-24 md:h-16 lg:w-32 lg:h-20 cursor-pointer"
            onClick={next}
          >
            <ArrowRight size={32} />
          </div>
        </div>
      </div>
    </div>
  );
}
