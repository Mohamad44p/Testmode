import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Paintbrush,
  Megaphone,
  Code,
  Lightbulb,
  Layout,
  Share2,
  ShoppingCart,
  Search,
  BarChart2,
  Globe,
  Settings,
  FileText,
  Smartphone,
  HelpCircle,
  DollarSign,
  TrendingUp,
  Users,
  Youtube,
  Play,
} from "lucide-react";
import { ChevronDown } from "lucide-react";

const menuItems = [
  {
    title: "UI/UX",
    content: [
      {
        title: "Design",
        icon: <Paintbrush className="text-blue-500" />,
        links: [
          {
            text: "Website Design",
            icon: <Layout className="text-green-500" />,
          },
          {
            text: "Social Media Design",
            icon: <Share2 className="text-purple-500" />,
          },
          {
            text: "Ecommerce Website",
            icon: <ShoppingCart className="text-orange-500" />,
          },
          {
            text: "Design Branding and Visual Identity",
            icon: <Paintbrush className="text-pink-500" />,
          },
        ],
      },
      {
        title: "Content Marketing",
        icon: <Megaphone className="text-red-500" />,
        links: [
          {
            text: "SEO Copywriting",
            icon: <Search className="text-yellow-500" />,
          },
          {
            text: "Content Marketing Services",
            icon: <FileText className="text-blue-500" />,
          },
          {
            text: "Social Media Management",
            icon: <Users className="text-green-500" />,
          },
          {
            text: "Infographics & Motion Graphics",
            icon: <BarChart2 className="text-purple-500" />,
          },
          {
            text: "Web Video Production Services",
            icon: <Play className="text-red-500" />,
          },
          {
            text: "YouTube Advertising",
            icon: <Youtube className="text-red-500" />,
          },
        ],
      },
      {
        title: "Software Development",
        icon: <Code className="text-purple-500" />,
        links: [
          {
            text: "Digital Experience Development",
            icon: <Globe className="text-blue-500" />,
          },
          {
            text: "ERP and Business Solutions",
            icon: <Settings className="text-gray-500" />,
          },
          {
            text: "Mobile App Development",
            icon: <Smartphone className="text-green-500" />,
          },
        ],
      },
      {
        title: "Challenges we solved",
        icon: <Lightbulb className="text-yellow-500" />,
        links: [
          {
            text: "My Website Doesn't Drive Leads",
            icon: <TrendingUp className="text-blue-500" />,
          },
          {
            text: "My Website Doesn't Convert",
            icon: <DollarSign className="text-green-500" />,
          },
          {
            text: "My Website Isn't Making Money",
            icon: <ShoppingCart className="text-purple-500" />,
          },
          {
            text: "I Can't design revenue-driven marketing Strategy",
            icon: <BarChart2 className="text-orange-500" />,
          },
          {
            text: "I'm lost trying to develop Cross social channels content strategy",
            icon: <Share2 className="text-indigo-500" />,
          },
        ],
      },
    ],
  },
];

export default function Uiux() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div>
        <div className="flex justify-between">
          <div className="flex">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  className="inline-flex items-center px-4 py-2 text-sm font-medium"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  {item.title}
                  <ChevronDown className="inline-block ml-1 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {menuItems[0].content.map((section, sectionIndex) => (
                  <motion.div
                    key={sectionIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: sectionIndex * 0.1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold flex items-center space-x-2 text-gray-900">
                      {section.icon}
                      <span>{section.title}</span>
                    </h3>
                    <ul className="space-y-2">
                      {section.links.map((link, linkIndex) => (
                        <motion.li
                          key={linkIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: linkIndex * 0.1 + sectionIndex * 0.2,
                          }}
                        >
                          <a
                            href="#"
                            className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                          >
                            {link.icon}
                            <span>{link.text}</span>
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
