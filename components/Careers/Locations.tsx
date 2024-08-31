/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { ArrowRightIcon } from "lucide-react";

export default function Component() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const locations = [
    {
      name: "Everywhere",
      address: "Fully Remote",
      image: "/images/Earth.jpg",
    },
    {
      name: "Palestine , Hebron",
      image: "/images/Carecter2.jpeg",
    },
    {
      name: "Palestine, Ramallah",
      image: "/images/Carecter3.jpeg",
    },
  ];

  return (
    <div
      data-color="soft-orange"
      className="section h-screen mt-[40vh] p-8 text-black font-sans"
    >
      <p className="mb-2 text-lg font-light">
        Explore our vibrant offices in Berlin and Austin, or connect with us
        remotely - we're everywhere you are.
      </p>
      <h2 className="mb-8 text-5xl font-light">Our Locations</h2>

      <div className="relative">
        <div className="space-y-4">
          {locations.map((location, index) => (
            <div
              key={location.name}
              className="relative border-t border-black/20 py-4"
              onMouseEnter={() => setHoveredLocation(location.name)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-light">{location.name}</h3>
                  <p className="text-sm font-light">{location.address}</p>
                </div>
                <button className="flex items-center space-x-1 text-sm font-light uppercase">
                  <span>View map</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
              {hoveredLocation === location.name && (
                <div className="absolute left-1/2 -top-10 z-10 mt-2 -translate-x-1/2 transform">
                  <img
                    src={location.image}
                    alt={`${location.name} office`}
                    className="h-60 w-60 rounded-full object-cover shadow-lg"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
