/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Component() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const locations = [
    {
      name: "Everywhere",
      address: "Fully Remote",
      href: "https://www.google.com/maps",
    },
    {
      name: "Palestine , Hebron",
      href: "https://www.google.com/maps/place/Be+Found+Online+Palestine/@31.5459924,35.0928523,15z/data=!4m6!3m5!1s0x1502e763eb402a71:0xf3e70d268a16414f!8m2!3d31.5459924!4d35.0928523!16s%2Fg%2F11v0xssskl?entry=ttu&g_ep=EgoyMDI0MTAwNy4xIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "Palestine, Ramallah",
      href: "https://www.google.com/maps/place/Be+Found+Online+Palestine/@31.5459924,35.0928523,15z/data=!4m6!3m5!1s0x1502e763eb402a71:0xf3e70d268a16414f!8m2!3d31.5459924!4d35.0928523!16s%2Fg%2F11v0xssskl?entry=ttu&g_ep=EgoyMDI0MTAwNy4xIKXMDSoASAFQAw%3D%3D"
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
                <Link href={location.href} target="_blank">
                  <button className="flex items-center space-x-1 text-sm font-light uppercase">
                    <span>View map</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
