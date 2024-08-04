import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaBook,
  FaBullhorn,
  FaSearch,
  FaShoppingCart,
  FaRegChartBar,
  FaGlobe,
  FaCog,
  FaFolderOpen,
  FaBusinessTime,
} from "react-icons/fa";
import { Separator } from "./ui/separator";
import { RoughNotation } from "react-rough-notation";
import { TextReveal } from "./ui/typography";

const digitalMarketingServices = [
  {
    title: "Organic Search",
    icon: <FaSearch />,
    links: [
      { text: "SEO Services", icon: <FaRegChartBar /> },
      { text: "Local SEO Services", icon: <FaGlobe /> },
      { text: "Google Local Services Ads Management", icon: <FaCog /> },
      { text: "SEO Audits", icon: <FaFolderOpen /> },
      { text: "Page Speed Optimization", icon: <FaCog /> },
    ],
  },
  {
    title: "Digital Advertising",
    icon: <FaBullhorn />,
    links: [
      { text: "PPC Management Services", icon: <FaBullhorn /> },
      { text: "Social Media Advertising", icon: <FaGlobe /> },
      { text: "Enterprise Social Media Advertising", icon: <FaBusinessTime /> },
      { text: "Cross Social Media Channels Strategy", icon: <FaCog /> },
      { text: "Content Strategy Creation", icon: <FaRegChartBar /> },
    ],
  },
  {
    title: "Ecommerce",
    icon: <FaShoppingCart />,
    links: [
      { text: "Ecommerce SEO Services", icon: <FaSearch /> },
      { text: "Ecommerce PPC Services", icon: <FaBullhorn /> },
      { text: "Ecommerce Social Media Advertising", icon: <FaGlobe /> },
      { text: "Ecommerce Digital Marketing Services", icon: <FaCog /> },
    ],
  },
  {
    title: "Learn",
    icon: <FaBook />,
    links: [
      { text: "Our SEO Results", icon: <FaRegChartBar /> },
      { text: "Our SEO Case Studies", icon: <FaFolderOpen /> },
      { text: "What Is an SEO Company?", icon: <FaBook /> },
      { text: "SEO Guide for Marketing Managers", icon: <FaBook /> },
      { text: "What Is Digital Marketing?", icon: <FaBook /> },
      { text: "What Is Best Digital Marketing Practice?", icon: <FaBook /> },
    ],
  },
];

const MegaMenu = () => {
  const [textColor, setTextColor] = useState("black");

  useEffect(() => {
    const updateTextColor = () => {
      const currentTheme = document.body.getAttribute("theme");
      switch (currentTheme) {
        case "black":
          setTextColor("white");
          break;
        case "cyan":
        case "salmon":
          setTextColor("black");
          break;
        case "white":
          setTextColor("black");
          break;
        default:
          setTextColor("black");
      }
    };

    updateTextColor();

    const observer = new MutationObserver(updateTextColor);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
        <p className={`text-${textColor}`}>Digital Marketing Services</p>
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({
  children,
  href,
  FlyoutContent,
}: {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-black">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="absolute md:left-[12.4rem] z-[10000] transform -translate-x-1/2 mt-4 p-6 w-[90vw] md:w-[1560px] bg-white shadow-xl">
      <div className="grid grid-cols-4 gap-6">
        {digitalMarketingServices.map((service, index) => (
          <div key={index}>
            <h3 className="flex items-center font-semibold mb-2 text-lg group-hover:text-indigo-600 transition-colors duration-200">
              {service.icon}
              <span className="ml-2">{service.title}</span>
            </h3>
            <Separator className="mb-4 bg-gray-300" />
            <div className="space-y-3">
              {service.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href="#"
                  className="flex items-center text-sm hover:underline mb-1"
                >
                  {link.icon}
                  <span className="ml-2">{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
