import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaBullhorn,
  FaShoppingCart,
  FaBook,
  FaRegChartBar,
  FaGlobe,
  FaCog,
  FaFolderOpen,
  FaBusinessTime,
} from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const menuContent = [
  {
    title: "Organic Search",
    icon: <FaSearch className="text-blue-500" />,
    links: [
      { text: "SEO Services", href: "/seo-services" },
      { text: "Enterprise SEO Services", href: "/enterprise-seo-services" },
      {
        text: "Digital Marketing Services",
        href: "/digital-marketing-services",
      },
      { text: "Local SEO Services", href: "/local-seo-services" },
      {
        text: "Google Local Services Ads Management",
        href: "/google-local-services-ads",
      },
      { text: "SEO Audits", href: "/seo-audits" },
      {
        text: "Generative Engine & Chat Optimization",
        href: "/generative-engine-optimization",
      },
    ],
  },
  {
    title: "Digital Advertising",
    icon: <FaBullhorn className="text-red-500" />,
    links: [
      { text: "PPC Management Services", href: "/ppc-management-services" },
      {
        text: "Enterprise PPC Management Services",
        href: "/enterprise-ppc-management",
      },
      { text: "Social Media Advertising", href: "/social-media-advertising" },
      {
        text: "Enterprise Social Media Advertising",
        href: "/enterprise-social-media-advertising",
      },
      {
        text: "Programmatic Advertising Services",
        href: "/programmatic-advertising",
      },
      {
        text: "Addressable Geofencing Services",
        href: "/addressable-geofencing",
      },
      { text: "Connected TV & OTT", href: "/connected-tv-ott" },
    ],
  },
  {
    title: "Ecommerce",
    icon: <FaShoppingCart className="text-purple-500" />,
    links: [
      { text: "Ecommerce SEO Services", href: "/ecommerce-seo-services" },
      { text: "Ecommerce PPC Services", href: "/ecommerce-ppc-services" },
      {
        text: "Ecommerce Social Media Advertising",
        href: "/ecommerce-social-media-advertising",
      },
      { text: "B2B Ecommerce Enablement", href: "/b2b-ecommerce-enablement" },
      { text: "Shopping Feed Automation", href: "/shopping-feed-automation" },
      {
        text: "Ecommerce Digital Marketing Services",
        href: "/ecommerce-digital-marketing",
      },
      {
        text: "Ecommerce Marketing Resources",
        href: "/ecommerce-marketing-resources",
      },
    ],
  },
  {
    title: "Learn",
    icon: <FaBook className="text-teal-500" />,
    links: [
      { text: "Our SEO Results", href: "/seo-results" },
      { text: "Our SEO Case Studies", href: "/seo-case-studies" },
      { text: "What Is an SEO Company?", href: "/what-is-seo-company" },
      {
        text: "How to Find the Best SEO Company",
        href: "/find-best-seo-company",
      },
      {
        text: "SEO Guide for Marketing Managers",
        href: "/seo-guide-marketing-managers",
      },
      {
        text: "What Is Digital Marketing?",
        href: "/what-is-digital-marketing",
      },
      {
        text: "Best Digital Marketing Tools",
        href: "/best-digital-marketing-tools",
      },
    ],
  },
];

export default function MegaMenu({textColor}: {textColor: string}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="flex justify-between items-center p-4">
        <button
          className="inline-flex items-center px-4 py-2 text-sm font-medium"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          aria-expanded={isOpen}
          aria-haspopup="true"
          style={{ color: textColor }}
        >
          Digital Marketing
          <ChevronDown className="inline-block ml-1 w-4 h-4" />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 right-0 bg-white shadow-lg overflow-hidden z-50"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="w-full">
              <div className="px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {menuContent.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center space-x-2 text-gray-900">
                        {section.icon}
                        <span>{section.title}</span>
                      </h3>
                      <ul className="space-y-2">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link
                              href={link.href}
                              className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                              {link.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50 py-8 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <h3 className="text-4xl font-bold text-blue-600">198%</h3>
                      <p className="text-lg text-gray-700">
                        Increase in organic transactions
                      </p>
                    </div>
                    <Link
                      href="/case-study"
                      className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
                    >
                      Read Our Case Study
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
