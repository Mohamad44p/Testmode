/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { ShieldCheckIcon, GlobeIcon, BadgeCheckIcon } from "lucide-react";
import { TbLockCancel } from "react-icons/tb";

export default function OurCredentials() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      data-color="soft-orange"
      className="p-8 h-screen md:p-16 section mt-[40vh] flex flex-col justify-center"
      ref={ref}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Our credentials</h1>
      <p className="text-xl mb-12">
        Compliance and security are our top priority.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {credentials.map((credential, index) => (
          <div
            key={credential.title}
            className={`border border-black p-6 flex flex-col items-center justify-center text-center transition-all duration-500 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {credential.icon}
            <h2 className="mt-4 text-lg font-semibold">{credential.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

const credentials = [
  { title: "HIPAA Compliant", icon: <ShieldCheckIcon className="w-12 h-12" /> },
  { title: "CCPA Compliant", icon: <TbLockCancel className="w-12 h-12" /> },
  {
    title: "ISO 13485 Certification",
    icon: <GlobeIcon className="w-12 h-12" />,
  },
  { title: "GDPR Compliant", icon: <BadgeCheckIcon className="w-12 h-12" /> },
];
