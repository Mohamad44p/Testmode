"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Sliders,
  Smartphone,
  CreditCard,
  Globe,
  PieChart,
  Key,
  FileText,
  User,
  Activity,
  Banknote,
  Menu,
  X,
  ChevronDown,
  Users,
  Briefcase,
  BookOpen,
  Newspaper,
  BarChart,
  Lightbulb,
  Building,
  Heart,
  Award,
  Megaphone,
  Target,
  Palette,
  Layout,
  Zap,
  Crop,
  ShoppingCart,
  Share2,
  HelpCircle,
  Book,
  TrendingDown,
  DollarSign,
  Database,
  Code,
  Video,
  Youtube,
  MousePointer,
  MessageSquare,
  MapPin,
  Search,
  FileSearch,
} from "lucide-react";
import Image from "next/image";
import { FaGoogle, FaMobile } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Digital Marketing", href: "/digital-marketing", dropdown: true },
  { name: "UI/UX", href: "/ui-ux", dropdown: true },
  { name: "Solutions", href: "/Solutions", dropdown: true },
  { name: "Projects", href: "/projects" },
  { name: "Insights", href: "/insights", dropdown: true },
  { name: "Who we are", href: "/About", dropdown: true },
];

const solutions = [
  {
    category: "PAYMENTS",
    items: [
      {
        icon: Shield,
        title: "PCI Compliance",
        description: "Become PCI compliant",
        href: "/Solutions",
      },
      {
        icon: Sliders,
        title: "Payments Optimization",
        description: "Control your payment data",
        href: "/Solutions",
      },
      {
        icon: Smartphone,
        title: "3D Secure",
        description: "Flexible and universal 3DS",
        href: "/Solutions",
      },
      {
        icon: CreditCard,
        title: "Card Issuing",
        description: "Provision and manage cards",
        href: "/Solutions",
      },
      {
        icon: Globe,
        title: "Network Tokens",
        description: "Modernize your payments",
        href: "/Solutions",
      },
      {
        icon: PieChart,
        title: "Card Insights",
        description: "Understand your cardholders",
        href: "/Solutions",
      },
      {
        icon: Key,
        title: "Key Management",
        description: "Secure key recovery flows",
        href: "/Solutions",
      },
    ],
  },
  {
    category: "BY DATA TYPE",
    items: [
      {
        icon: CreditCard,
        title: "Card Data",
        description: "Secure payment information",
        href: "/Solutions",
      },
      {
        icon: Banknote,
        title: "Banking Data",
        description: "Protect financial records",
        href: "/Solutions",
      },
      {
        icon: User,
        title: "PII",
        description: "Safeguard personal information",
        href: "/Solutions",
      },
      {
        icon: Activity,
        title: "HIPAA & ePHI",
        description: "Ensure healthcare data compliance",
        href: "/Solutions",
      },
      {
        icon: Key,
        title: "API Credentials",
        description: "Manage secure access tokens",
        href: "/Solutions",
      },
      {
        icon: FileText,
        title: "File Encryption",
        description: "Protect sensitive documents",
        href: "/Solutions",
      },
    ],
  },
];

const insights = [
  {
    category: "CONTENT",
    items: [
      {
        icon: BookOpen,
        title: "Blog",
        description: "Latest industry insights",
        href: "/insights",
      },
      {
        icon: Newspaper,
        title: "News",
        description: "Company and industry updates",
        href: "/insights",
      },
      {
        icon: BarChart,
        title: "Reports",
        description: "In-depth analysis and trends",
        href: "/insights",
      },
      {
        icon: Lightbulb,
        title: "Thought Leadership",
        description: "Expert opinions and forecasts",
        href: "/insights",
      },
    ],
  },
  {
    category: "RESOURCES",
    items: [
      {
        icon: Briefcase,
        title: "Case Studies",
        description: "Real-world success stories",
        href: "/insights",
      },
      {
        icon: FileText,
        title: "Whitepapers",
        description: "Detailed technical documents",
        href: "/insights",
      },
      {
        icon: PieChart,
        title: "Infographics",
        description: "Visual data representations",
        href: "/insights",
      },
      {
        icon: Smartphone,
        title: "Webinars",
        description: "Online educational sessions",
        href: "/insights",
      },
    ],
  },
];

const whoWeAre = [
  {
    category: "COMPANY",
    items: [
      {
        icon: Users,
        title: "About Us",
        description: "Our story and mission",
        href: "/About",
      },
      {
        icon: Building,
        title: "Our Offices",
        description: "Global locations",
        href: "/About",
      },
      {
        icon: Award,
        title: "Awards",
        description: "Recognition and achievements",
        href: "/About",
      },
      {
        icon: Heart,
        title: "Social Responsibility",
        description: "Our impact on society",
        href: "/About",
      },
    ],
  },
  {
    category: "PEOPLE",
    items: [
      {
        icon: User,
        title: "Leadership Team",
        description: "Meet our executives",
        href: "/team",
      },
      {
        icon: Users,
        title: "Our Team",
        description: "The people behind our success",
        href: "/team",
      },
      {
        icon: Briefcase,
        title: "Careers",
        description: "Join our growing team",
        href: "/Careers",
      },
      {
        icon: Globe,
        title: "Culture",
        description: "Our values and work environment",
        href: "/Careers",
      },
    ],
  },
];

const digitalMarketing = [
  {
    category: "ORGANIC SEARCH",
    items: [
      {
        icon: Search,
        title: "SEO Services",
        description: "Improve your website's search engine rankings",
        href: "/digital-marketing/seo-services",
      },
      {
        icon: MapPin,
        title: "Local SEO Services",
        description: "Boost your local online presence",
        href: "/digital-marketing/local-seo-services",
      },
      {
        icon: FaGoogle,
        title: "Google Local Services Ads Management",
        description: "Manage and optimize your Google Local Services Ads",
        href: "/digital-marketing/google-local-services-ads",
      },
      {
        icon: FileSearch,
        title: "SEO Audits",
        description: "Comprehensive analysis of your website's SEO performance",
        href: "/digital-marketing/seo-audits",
      },
      {
        icon: Zap,
        title: "Page Speed Optimization",
        description: "Improve your website's loading speed for better user experience",
        href: "/digital-marketing/page-speed-optimization",
      },
    ],
  },
  {
    category: "DIGITAL ADVERTISING",
    items: [
      {
        icon: MousePointer,
        title: "PPC Management Services",
        description: "Manage and optimize your pay-per-click advertising campaigns",
        href: "/digital-marketing/ppc-management",
      },
      {
        icon: Share2,
        title: "Social Media Advertising",
        description: "Create and manage effective social media ad campaigns",
        href: "/digital-marketing/social-media-advertising",
      },
      {
        icon: Users,
        title: "Enterprise Social Media Advertising",
        description: "Large-scale social media advertising for enterprise clients",
        href: "/digital-marketing/enterprise-social-media-advertising",
      },
      {
        icon: MessageSquare,
        title: "Cross Social Media channels Strategy",
        description: "Develop a cohesive strategy across multiple social platforms",
        href: "/digital-marketing/cross-social-media-strategy",
      },
      {
        icon: FileText,
        title: "Content Strategy Creation",
        description: "Develop a comprehensive content strategy for your brand",
        href: "/digital-marketing/content-strategy-creation",
      },
    ],
  },
  {
    category: "ECOMMERCE",
    items: [
      {
        icon: ShoppingCart,
        title: "Ecommerce SEO Services",
        description: "Optimize your online store for search engines",
        href: "/digital-marketing/ecommerce-seo-services",
      },
      {
        icon: DollarSign,
        title: "Ecommerce PPC Services",
        description: "Drive targeted traffic to your ecommerce site through PPC",
        href: "/digital-marketing/ecommerce-ppc-services",
      },
      {
        icon: Share2,
        title: "Ecommerce Social Media Advertising",
        description: "Promote your products on social media platforms",
        href: "/digital-marketing/ecommerce-social-media-advertising",
      },
      {
        icon: Globe,
        title: "Ecommerce Digital Marketing Services",
        description: "Comprehensive digital marketing solutions for online stores",
        href: "/digital-marketing/ecommerce-digital-marketing-services",
      },
    ],
  },
]

const uiUx = [
  {
    category: "DESIGN",
    items: [
      {
        icon: Layout,
        title: "Website Design",
        description: "Create stunning and functional websites",
        href: "/ui-ux/website-design",
      },
      {
        icon: Share2,
        title: "Social Media Design",
        description: "Design eye-catching social media graphics and layouts",
        href: "/ui-ux/social-media-design",
      },
      {
        icon: ShoppingCart,
        title: "Ecommerce Website Design",
        description: "Design user-friendly and conversion-optimized online stores",
        href: "/ui-ux/ecommerce-website-design",
      },
      {
        icon: Palette,
        title: "Branding and Visual Identity",
        description: "Develop a cohesive brand identity and visual language",
        href: "/ui-ux/branding-and-visual-identity",
      },
    ],
  },
  {
    category: "CONTENT MARKETING",
    items: [
      {
        icon: FileText,
        title: "SEO Copywriting",
        description: "Create SEO-friendly content that ranks well in search engines",
        href: "/ui-ux/seo-copywriting",
      },
      {
        icon: Megaphone,
        title: "Content Marketing Services",
        description: "Develop and execute effective content marketing strategies",
        href: "/ui-ux/content-marketing-services",
      },
      {
        icon: Share2,
        title: "Social Media Management",
        description: "Manage and grow your social media presence",
        href: "/ui-ux/social-media-management",
      },
      {
        icon: FileText,
        title: "Infographics & Motion Graphics",
        description: "Create engaging visual content and animations",
        href: "/ui-ux/infographics-and-motion-graphics",
      },
      {
        icon: Video,
        title: "Web Video Production Services",
        description: "Produce high-quality videos for your web presence",
        href: "/ui-ux/web-video-production",
      },
      {
        icon: Youtube,
        title: "YouTube Advertising",
        description: "Create and manage effective YouTube ad campaigns",
        href: "/ui-ux/youtube-advertising",
      },
    ],
  },
  {
    category: "SOFTWARE DEVELOPMENT",
    items: [
      {
        icon: Code,
        title: "Digital Experience Development",
        description: "Build immersive digital experiences for your users",
        href: "/ui-ux/digital-experience-development",
      },
      {
        icon: Globe,
        title: "Digital Solutions Development",
        description: "Develop custom digital solutions for your business needs",
        href: "/ui-ux/digital-solutions-development",
      },
      {
        icon: Database,
        title: "ERP and Business Solutions",
        description: "Implement and customize ERP and business management systems",
        href: "/ui-ux/erp-and-business-solutions",
      },
      {
        icon: FaMobile,
        title: "Mobile App Development",
        description: "Create powerful and user-friendly mobile applications",
        href: "/ui-ux/mobile-app-development",
      },
    ],
  },
]

export default function Component() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileItem = (item: string) => {
    setExpandedMobileItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <>
      <nav className="bg-[#0a0a0a] fixed section top-0 left-0 right-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center space-x-2 cursor-pointer"
              >
                <div className="w-8 h-8 md:w-12 md:h-12">
                  <Image
                    src="/BeFoundLogo.jpg"
                    alt="Impactful image 3"
                    width={2000}
                    height={3020}
                    quality={100}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <motion.span
                  className="text-white text-2xl font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Be Found Online
                </motion.span>
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="bg-[#1c1c1c] rounded-full py-2 px-2">
                <ul className="flex space-x-1">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      className="relative"
                      variants={navItemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.dropdown ? (
                        <div
                          className="relative"
                          onMouseEnter={() => {
                            setHoveredItem(item.name);
                            setShowDropdown(item.name);
                          }}
                          onMouseLeave={(e) => {
                            const rect =
                              e.currentTarget.getBoundingClientRect();
                            const isMovingToDropdown = e.clientY > rect.bottom;
                            if (!isMovingToDropdown) {
                              setHoveredItem(null);
                              setShowDropdown(null);
                            }
                          }}
                        >
                          <Link
                            href={item.href}
                            className="text-white px-4 py-2 rounded-full text-sm font-medium inline-block transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-20 cursor-pointer"
                          >
                            {item.name}
                          </Link>
                          {hoveredItem === item.name && (
                            <motion.div
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                              layoutId="underline"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-white px-4 py-2 rounded-full text-sm font-medium inline-block transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-20 cursor-pointer"
                          onMouseEnter={() => setHoveredItem(item.name)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          {item.name}
                          {hoveredItem === item.name && (
                            <motion.div
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                              layoutId="underline"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hidden lg:block">
              <Link href="/Contact" passHref>
                <Button className="bg-white rounded-full text-black hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white cursor-pointer"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="lg:hidden fixed inset-0 section z-40 bg-[#0a0a0a] pt-20 overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-700 pb-4">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileItem(item.name)}
                        className="flex items-center justify-between w-full text-white text-lg font-medium cursor-pointer"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${expandedMobileItems.includes(item.name)
                            ? "transform rotate-180"
                            : ""
                            }`}
                        />
                      </button>
                      <AnimatePresence>
                        {expandedMobileItems.includes(item.name) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 space-y-4"
                          >
                            {item.name === "Solutions" &&
                              solutions.map((category, index) => (
                                <div key={index} className="space-y-2">
                                  <Link
                                    href={category.items[0].href}
                                    className="cursor-pointer"
                                  >
                                    <h3 className="text-sm font-semibold text-gray-400">
                                      {category.category}
                                    </h3>
                                  </Link>
                                  <ul className="space-y-2">
                                    {category.items.map((subItem, subIndex) => (
                                      <li key={subIndex}>
                                        <Link
                                          href={subItem.href}
                                          className="flex items-center text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                                        >
                                          <subItem.icon className="h-5 w-5 mr-2" />
                                          <span>{subItem.title}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            {item.name === "Insights" &&
                              insights.map((category, index) => (
                                <div key={index} className="space-y-2">
                                  <Link
                                    href={category.items[0].href}
                                    className="cursor-pointer"
                                  >
                                    <h3 className="text-sm font-semibold text-gray-400">
                                      {category.category}
                                    </h3>
                                  </Link>
                                  <ul className="space-y-2">
                                    {category.items.map((subItem, subIndex) => (
                                      <li key={subIndex}>
                                        <Link
                                          href={subItem.href}
                                          className="flex items-center text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                                        >
                                          <subItem.icon className="h-5 w-5 mr-2" />
                                          <span>{subItem.title}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}

                            {showDropdown === "Digital Marketing" && (
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="md:col-span-1">
                                  <Link href="/digital-marketing" className="cursor-pointer">
                                    <h2 className="text-2xl font-bold mb-4">Digital Marketing</h2>
                                  </Link>
                                  <p className="text-gray-400 mb-8">
                                    Boost your online presence and reach your target audience
                                    with our cutting-edge digital marketing strategies.
                                  </p>
                                  <div className="bg-[#2a2a2a] p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Featured Service</h3>
                                    <p className="text-gray-400 mb-4">
                                      Comprehensive Social Media Marketing: Engage, grow, and
                                      convert your audience across all major platforms.
                                    </p>
                                    <Link href="#" className="text-blue-400 hover:underline cursor-pointer">
                                      Explore our social media services →
                                    </Link>
                                  </div>
                                </div>
                                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                                  {digitalMarketing.map((category, index) => (
                                    <div key={index}>
                                      <h3 className="text-sm font-semibold text-gray-400 mb-4">
                                        {category.category}
                                      </h3>
                                      <ul className="space-y-2">
                                        {category.items.map((item, itemIndex) => (
                                          <motion.li
                                            key={itemIndex}
                                            className="flex items-center cursor-pointer"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{
                                              type: "spring",
                                              stiffness: 400,
                                              damping: 10,
                                            }}
                                          >
                                            <Link href={item.href} className="flex items-center w-full">
                                              <div className="bg-[#2a2a2a] p-1 rounded-lg mr-2">
                                                <item.icon className="w-4 h-4" />
                                              </div>
                                              <div>
                                                <h4 className="font-semibold text-sm">{item.title}</h4>
                                              </div>
                                            </Link>
                                          </motion.li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                            {item.name === "UI/UX" &&
                              uiUx.map((category, index) => (
                                <div key={index} className="space-y-2">
                                  <Link
                                    href={category.items[0].href}
                                    className="cursor-pointer"
                                  >
                                    <h3 className="text-sm font-semibold text-gray-400">
                                      {category.category}
                                    </h3>
                                  </Link>
                                  <ul className="space-y-2">
                                    {category.items.map((subItem, subIndex) => (
                                      <li key={subIndex}>
                                        <Link
                                          href={subItem.href}
                                          className="flex items-center text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                                        >
                                          <subItem.icon className="h-5 w-5 mr-2" />
                                          <span>{subItem.title}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            {item.name === "Who we are" &&
                              whoWeAre.map((category, index) => (
                                <div key={index} className="space-y-2">
                                  <Link
                                    href={category.items[0].href}
                                    className="cursor-pointer"
                                  >
                                    <h3 className="text-sm font-semibold text-gray-400">
                                      {category.category}
                                    </h3>
                                  </Link>
                                  <ul className="space-y-2">
                                    {category.items.map((subItem, subIndex) => (
                                      <li key={subIndex}>
                                        <Link
                                          href={subItem.href}
                                          className="flex items-center text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                                        >
                                          <subItem.icon className="h-5 w-5 mr-2" />
                                          <span>{subItem.title}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-white text-lg font-medium hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="px-4 py-6">
              <Link href="/Contact" passHref>
                <Button className="bg-white w-full rounded-full text-black hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDropdown && !isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 section left-0 right-0 bg-[#0a0a0a] bg-opacity-95 flex items-start justify-center z-30 w-full"
            onMouseEnter={() => setShowDropdown(showDropdown)}
            onMouseLeave={() => {
              setHoveredItem(null);
              setShowDropdown(null);
            }}
          >
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="bg-[#1c1c1c] section text-white p-8 rounded-lg shadow-2xl w-full mx-4 max-h-[calc(100vh-6rem)] overflow-y-auto"
            >
              {showDropdown === "Solutions" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <Link href="/Solutions" className="cursor-pointer">
                      <h2 className="text-2xl font-bold mb-4">Solutions</h2>
                    </Link>
                    <p className="text-gray-400 mb-8">
                      Customizable security and compliance solutions, robust
                      enough to handle any use case.
                    </p>
                    <div className="bg-[#2a2a2a] p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">
                        Evervault Encryption
                      </h3>
                      <p className="text-gray-400 mb-4">
                        Flexible enough to secure any type of data in any
                        workflow.
                      </p>
                      <Link
                        href="#"
                        className="text-blue-400 hover:underline cursor-pointer"
                      >
                        Learn more →
                      </Link>
                    </div>
                  </div>
                  {solutions.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-sm section font-semibold text-gray-400 mb-4">
                        {category.category}
                      </h3>
                      <ul className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="flex items-start cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                          >
                            <Link
                              href={item.href}
                              className="flex items-start w-full"
                            >
                              <div className="bg-[#2a2a2a] p-2 rounded-lg mr-4">
                                <item.icon className="w-6 h-6" />
                              </div>
                              <div>
                                <h4 className="font-semibold">{item.title}</h4>
                                {item.description && (
                                  <p className="text-sm text-gray-400">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {showDropdown === "Insights" && (
                <div className="grid grid-cols-1 section md:grid-cols-3 gap-8">
                  <div>
                    <Link href="/insights" className="cursor-pointer">
                      <h2 className="text-2xl font-bold mb-4">Insights</h2>
                    </Link>
                    <p className="text-gray-400 mb-8">
                      Stay informed with our latest research, analysis, and
                      industry trends.
                    </p>
                    <div className="bg-[#2a2a2a] p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">
                        Featured Article
                      </h3>
                      <p className="text-gray-400 mb-4">
                        The Future of Cybersecurity: Trends to Watch in 2024
                      </p>
                      <Link
                        href="#"
                        className="text-blue-400 hover:underline cursor-pointer"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                  {insights.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-sm font-semibold section text-gray-400 mb-4">
                        {category.category}
                      </h3>
                      <ul className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="flex items-start cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                          >
                            <Link
                              href={item.href}
                              className="flex items-start w-full"
                            >
                              <div className="bg-[#2a2a2a] p-2 rounded-lg mr-4">
                                <item.icon className="w-6 h-6" />
                              </div>
                              <div>
                                <h4 className="font-semibold">{item.title}</h4>
                                {item.description && (
                                  <p className="text-sm text-gray-400">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {showDropdown === "Digital Marketing" && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <Link href="/digital-marketing" className="cursor-pointer">
                      <h2 className="text-2xl font-bold mb-4">
                        Digital Marketing
                      </h2>
                    </Link>
                    <p className="text-gray-400 mb-8">
                      Boost your online presence and reach your target audience
                      with our cutting-edge digital marketing strategies.
                    </p>
                    <div className="bg-[#2a2a2a] p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">
                        Featured Service
                      </h3>
                      <p className="text-gray-400 mb-4">
                        Comprehensive Social Media Marketing: Engage, grow, and
                        convert your audience across all major platforms.
                      </p>
                      <Link
                        href="#"
                        className="text-blue-400 hover:underline cursor-pointer"
                      >
                        Explore our social media services →
                      </Link>
                    </div>
                  </div>
                  {digitalMarketing.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-sm font-semibold text-gray-400 mb-4">
                        {category.category}
                      </h3>
                      <ul className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="flex items-start cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                          >
                            <Link
                              href={item.href}
                              className="flex items-start w-full"
                            >
                              <div className="bg-[#2a2a2a] p-2 rounded-lg mr-4">
                                <item.icon className="w-6 h-6" />
                              </div>
                              <div>
                                <h4 className="font-semibold">{item.title}</h4>
                                {item.description && (
                                  <p className="text-sm text-gray-400">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {showDropdown === "UI/UX" && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <Link href="/ui-ux" className="cursor-pointer">
                      <h2 className="text-2xl font-bold mb-4">
                        UI/UX Design
                      </h2>
                    </Link>
                    <p className="text-gray-400 mb-8">
                      Create intuitive, beautiful, and user-centric designs that
                      elevate your digital products and delight your users.
                    </p>
                    <div className="bg-[#2a2a2a] p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">
                        Featured Service
                      </h3>
                      <p className="text-gray-400 mb-4">
                        End-to-End UX Design: From research to prototyping, we
                        create seamless user experiences that drive engagement
                        and conversions.
                      </p>
                      <Link
                        href="#"
                        className="text-blue-400 hover:underline cursor-pointer"
                      >
                        Discover our UX design process →
                      </Link>
                    </div>
                  </div>
                  {uiUx.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-sm font-semibold text-gray-400 mb-4">
                        {category.category}
                      </h3>
                      <ul className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="flex items-start cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                          >
                            <Link
                              href={item.href}
                              className="flex items-start w-full"
                            >
                              <div className="bg-[#2a2a2a] p-2 rounded-lg mr-4">
                                <item.icon className="w-6 h-6" />
                              </div>
                              <div>
                                <h4 className="font-semibold">{item.title}</h4>
                                {item.description && (
                                  <p className="text-sm text-gray-400">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {showDropdown === "Who we are" && (
                <div className="grid section grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <Link href="/About" className="cursor-pointer">
                      <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
                    </Link>
                    <p className="text-gray-400 mb-8">
                      Learn about our company, our people, and our commitment to
                      innovation and excellence.
                    </p>
                    <div className="bg-[#2a2a2a] p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">
                        Our Mission
                      </h3>
                      <p className="text-gray-400 mb-4">
                        To empower businesses with cutting-edge security
                        solutions and foster a safer digital world.
                      </p>
                      <Link
                        href="#"
                        className="text-blue-400 hover:underline cursor-pointer"
                      >
                        Learn more about our vision →
                      </Link>
                    </div>
                  </div>
                  {whoWeAre.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-sm font-semibold text-gray-400 mb-4">
                        {category.category}
                      </h3>
                      <ul className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="flex items-start cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                          >
                            <Link
                              href={item.href}
                              className="flex items-start w-full"
                            >
                              <div className="bg-[#2a2a2a] p-2 rounded-lg mr-4">
                                <item.icon className="w-6 h-6" />
                              </div>
                              <div>
                                <h4 className="font-semibold">{item.title}</h4>
                                {item.description && (
                                  <p className="text-sm text-gray-400">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
