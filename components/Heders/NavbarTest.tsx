"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Sliders, Smartphone, CreditCard, Globe, PieChart, Key, FileText, User, Activity, Banknote, Menu, X, ChevronDown, Users, Briefcase, BookOpen } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/Solutions', dropdown: true },
  { name: 'Projects', href: '/projects' },
  { name: 'Insights', href: '/insights', dropdown: true },
  { name: 'Webinars', href: '/webinars' },
  { name: 'Who we are', href: '/About', dropdown: true }
]

const solutions = [
  {
    category: "PAYMENTS",
    items: [
      { icon: Shield, title: "PCI Compliance", description: "Become PCI compliant", href: "/solutions/pci-compliance" },
      { icon: Sliders, title: "Payments Optimization", description: "Control your payment data", href: "/solutions/payments-optimization" },
      { icon: Smartphone, title: "3D Secure", description: "Flexible and universal 3DS", href: "/solutions/3d-secure" },
      { icon: CreditCard, title: "Card Issuing", description: "Provision and manage cards", href: "/solutions/card-issuing" },
      { icon: Globe, title: "Network Tokens", description: "Modernize your payments", href: "/solutions/network-tokens" },
      { icon: PieChart, title: "Card Insights", description: "Understand your cardholders", href: "/solutions/card-insights" },
      { icon: Key, title: "Key Management", description: "Secure key recovery flows", href: "/solutions/key-management" },
    ]
  },
  {
    category: "BY DATA TYPE",
    items: [
      { icon: CreditCard, title: "Card Data", description: "", href: "/solutions/card-data" },
      { icon: Banknote, title: "Banking Data", description: "", href: "/solutions/banking-data" },
      { icon: User, title: "PII", description: "", href: "/solutions/pii" },
      { icon: Activity, title: "HIPAA & ePHI", description: "", href: "/solutions/hipaa-ephi" },
      { icon: Key, title: "API Credentials", description: "", href: "/solutions/api-credentials" },
      { icon: FileText, title: "File Encryption", description: "", href: "/solutions/file-encryption" },
    ]
  }
]

const insights = [
  { icon: BookOpen, title: "Blog", href: "/insights" },
  { icon: Briefcase, title: "Case Studies", href: "/insights" },
]

const whoWeAre = [
  { icon: Users, title: "About Us", href: "/About" },
  { icon: Briefcase, title: "Careers", href: "/Careers" },
  { icon: Users, title: "Our Team", href: "/team" },
]

export default function EnhancedResponsiveNavbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [showDropdown, setShowDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMobileItem = (item: string) => {
    setExpandedMobileItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    )
  }

  return (
    <>
      <nav className="bg-[#0a0a0a] fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="text-white text-xl font-semibold">Be Found Online</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="bg-[#1c1c1c] rounded-full py-1 px-1">
                <ul className="flex space-x-1">
                  {navItems.map((item) => (
                    <li key={item.name} className="relative">
                      {item.dropdown ? (
                        <div
                          onMouseEnter={() => {
                            setHoveredItem(item.name)
                            setShowDropdown(item.name)
                          }}
                          onMouseLeave={() => {
                            setHoveredItem(null)
                            setShowDropdown(null)
                          }}
                        >
                          <Link
                            href={item.href}
                            className="text-white px-4 py-2 rounded-full text-sm inline-block transition-all duration-300 ease-in-out"
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
                          className="text-white px-4 py-2 rounded-full text-sm inline-block transition-all duration-300 ease-in-out"
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
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hidden md:block">
              <Button className="bg-white rounded-full text-black hover:bg-gray-200 transition-all duration-300 ease-in-out">
                Contact Us
              </Button>
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            className="md:hidden fixed inset-0 z-40 bg-[#0a0a0a] pt-16 overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-700 pb-4">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileItem(item.name)}
                        className="flex items-center justify-between w-full text-white text-lg font-medium"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            expandedMobileItems.includes(item.name) ? 'transform rotate-180' : ''
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
                            {item.name === 'Solutions' && solutions.map((category, index) => (
                              <div key={index} className="space-y-2">
                                <h3 className="text-sm font-semibold text-gray-400">{category.category}</h3>
                                <ul className="space-y-2">
                                  {category.items.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                      <Link
                                        href={subItem.href}
                                        className="flex items-center text-white hover:text-gray-300 transition-colors duration-200"
                                      >
                                        <subItem.icon className="h-5 w-5 mr-2" />
                                        <span>{subItem.title}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                            {item.name === 'Insights' && (
                              <ul className="space-y-2">
                                {insights.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <Link
                                      href={subItem.href}
                                      className="flex items-center text-white hover:text-gray-300 transition-colors duration-200"
                                    >
                                      <subItem.icon className="h-5 w-5 mr-2" />
                                      <span>{subItem.title}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {item.name === 'Who we are' && (
                              <ul className="space-y-2">
                                {whoWeAre.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <Link
                                      href={subItem.href}
                                      className="flex items-center text-white hover:text-gray-300 transition-colors duration-200"
                                    >
                                      <subItem.icon className="h-5 w-5 mr-2" />
                                      <span>{subItem.title}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-white text-lg font-medium hover:text-gray-300 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="px-4 py-6">
              <Button className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 ease-in-out">
                Contact Us
              </Button>
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
            className="fixed top-16 left-0 right-0 bg-black bg-opacity-50 flex items-center justify-center z-30"
            onMouseEnter={() => setShowDropdown(showDropdown)}
            onMouseLeave={() => setShowDropdown(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="bg-[#1c1c1c] text-white p-8 rounded-lg shadow-lg max-w-7xl w-full mx-4"
            >
              {showDropdown === 'Solutions' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Solutions</h2>
                    <p className="text-gray-400 mb-8">
                      Customizable security and compliance solutions, robust enough to handle any use case.
                    </p>
                    <div className="bg-[#2a2a2a] p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">Evervault Encryption</h3>
                      <p className="text-gray-400 mb-4">
                        Flexible enough to secure any type of data in any workflow.
                      </p>
                      <a href="#" className="text-blue-400 hover:underline">
                        Learn more →
                      </a>
                    </div>
                  </div>
                  {solutions.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-sm font-semibold text-gray-400 mb-4">{category.category}</h3>
                      <ul className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="bg-[#2a2a2a] 
                            p-2 rounded-lg mr-4">
                              <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{item.title}</h4>
                              {item.description && <p className="text-sm text-gray-400">{item.description}</p>}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {showDropdown === 'Insights' && (
                <div className="grid grid-cols-2 gap-8">
                  {insights.map((item, index) => (
                    <Link key={index} href={item.href} className="flex items-center space-x-4 p-4 bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a] transition-colors duration-200">
                      <item.icon className="w-8 h-8" />
                      <span className="text-lg font-semibold">{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
              {showDropdown === 'Who we are' && (
                <div className="grid grid-cols-3 gap-8">
                  {whoWeAre.map((item, index) => (
                    <Link key={index} href={item.href} className="flex items-center space-x-4 p-4 bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a] transition-colors duration-200">
                      <item.icon className="w-8 h-8" />
                      <span className="text-lg font-semibold">{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}