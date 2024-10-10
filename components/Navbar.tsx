'use client'

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll } from "framer-motion"
import {
  ChevronDown,
  Menu,
  X,
  BookOpen,
  FileText,
  Video,
  Users,
  Briefcase,
  Mail,
  Home,
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { UrlObject } from "url"
import MegaMenu from "./MegaMenu"

type Href = string | UrlObject

const Navbar = () => {
  const [textColor, setTextColor] = React.useState("text-black")
  const [bgColor, setBgColor] = React.useState("bg-white")
  const [contentBgColor, setContentBgColor] = React.useState("bg-white")
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  const { scrollYProgress } = useScroll()

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      setIsScrolled(value > 0.0001)
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  React.useEffect(() => {
    const updateColors = () => {
      const currentTheme = document.body.getAttribute("theme")
      switch (currentTheme) {
        case "RaisinBlack":
        case "Black":
          setTextColor("text-white")
          setBgColor("bg-zinc-900")
          setContentBgColor("bg-zinc-800")
          break
        case "Ming":
          setBgColor("blue-600")
          setTextColor("text-white")
          setContentBgColor("blue-600")
          break
        case "Blond":
          setBgColor("bg-amber-100")
          setTextColor("text-black")
          setContentBgColor("bg-amber-50")
          break
        case "Almond":
          setBgColor("bg-orange-50")
          setTextColor("text-black")
          setContentBgColor("bg-orange-100")
          break
        case "White":
          setBgColor("bg-white")
          setTextColor("text-black")
          setContentBgColor("bg-gray-50")
          break
        case "light-blue":
          setBgColor("bg-sky-100")
          setTextColor("text-black")
          setContentBgColor("bg-sky-50")
          break
        case "soft-orange":
          setBgColor("bg-orange-200")
          setTextColor("text-black")
          setContentBgColor("bg-orange-100")
          break
        default:
          setBgColor("bg-white")
          setTextColor("text-black")
          setContentBgColor("bg-gray-50")
      }
    }

    updateColors()

    const observer = new MutationObserver(updateColors)
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["theme"],
    })

    return () => observer.disconnect()
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        `fixed top-0 left-0 w-full z-[1000] transition-all duration-300`,
        {
          [`${bgColor} shadow-lg`]: isScrolled,
          "bg-transparent": !isScrolled,
        }
      )}
    >
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className={`flex items-center space-x-2 text-2xl font-bold ${textColor}`}>
            Be Found Online
          </Link>
          <div className="hidden lg:flex items-center space-x-4">
            <MegaMenu textColor={textColor} />

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`${textColor} hover:text-orange-500 transition-colors duration-200`}
                  >
                    Insights
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className={contentBgColor}>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/insights"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          >
                            <BookOpen className="h-6 w-6 mb-2" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Latest Insights
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Discover our latest thoughts and analysis on
                              digital marketing trends.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem
                        href="/insights"
                        title="Blog"
                        icon={<FileText className="h-4 w-4 mr-2" />}
                      >
                        Read our latest articles and updates
                      </ListItem>
                      <ListItem
                        href="/case-studies"
                        title="Case Studies"
                        icon={<Briefcase className="h-4 w-4 mr-2" />}
                      >
                        Explore our success stories
                      </ListItem>
                      <ListItem
                        href="/webinars"
                        title="Webinars"
                        icon={<Video className="h-4 w-4 mr-2" />}
                      >
                        Join our educational sessions
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`${textColor} hover:text-orange-500 transition-colors duration-200`}
                  >
                    Who We Are
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className={contentBgColor}>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/About"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          >
                            <Home className="h-6 w-6 mb-2" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              About Be Found Online
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Learn about our mission, values, and expertise in
                              digital marketing.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem
                        href="/About"
                        title="About Us"
                        icon={<Home className="h-4 w-4 mr-2" />}
                      >
                        Our story and mission
                      </ListItem>
                      <ListItem
                        href="/team"
                        title="Our Team"
                        icon={<Users className="h-4 w-4 mr-2" />}
                      >
                        Meet the experts behind our success
                      </ListItem>
                      <ListItem
                        href="/Careers"
                        title="Careers"
                        icon={<Briefcase className="h-4 w-4 mr-2" />}
                      >
                        Join our growing team
                      </ListItem>
                      <ListItem
                        href="/Contact"
                        title="Contact Us"
                        icon={<Mail className="h-4 w-4 mr-2" />}
                      >
                        Get in touch with us
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/Solutions" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        textColor,
                        "hover:text-orange-500 transition-colors duration-200"
                      )}
                    >
                      Solutions
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/projects" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        textColor,
                        "hover:text-orange-500 transition-colors duration-200"
                      )}
                    >
                      Projects
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/contact" passHref>
              <Button
                variant="default"
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2 transition-all duration-200 transform hover:scale-105"
              >
                Contact Us
              </Button>
            </Link>
          </div>
          <div className="lg:hidden">
            <motion.button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${textColor}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Toggle menu</span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden fixed inset-x-0 top-[76px] ${bgColor} shadow-lg rounded-b-2xl overflow-hidden`}
          >
            <motion.div
              className="flex flex-col py-4"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.1 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
            >
              {[
                {
                  name: "Insights",
                  icon: <BookOpen />,
                  submenu: ["Blog", "Case Studies", "Webinars"],
                },
                {
                  name: "Who We Are",
                  icon: <Users />,
                  submenu: ["About Us", "Our Team", "Careers", "Contact Us"],
                },
                { name: "Solutions", icon: <Briefcase /> },
                { name: "Projects", icon: <FileText /> },
              ].map((item, index) => (
                <MobileNavItem
                  key={typeof item === "string" ? item : item.name}
                  item={item}
                  onClick={toggleMenu}
                  index={index}
                  textColor={textColor}
                />
              ))}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -10 },
                }}
                transition={{ duration: 0.3 }}
                className="px-4 mt-4"
              >
                <Link href="/contact" passHref>
                  <Button
                    variant="default"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2 transition-all duration-200 transform hover:scale-105"
                  >
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { icon?: React.ReactNode; href: Href; title: string }
>(({ className, title, children, icon, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}>
          <div className="flex items-center text-sm font-medium leading-none">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const MobileNavItem = ({
  item,
  onClick,
  index,
  textColor,
}: {
  item: { name: string; icon: React.ReactNode; submenu?: string[] };
  onClick: () => void;
  index: number;
  textColor: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  if (!item.submenu) {
    return (
      <motion.div
        variants={{
          open: { opacity: 1, y: 0 },
          closed: { opacity: 0, y: -10 },
        }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        <Link href={`/${item.name.toLowerCase().replace(/\s+/g, "-")}`} className={`flex items-center px-4 py-2 text-lg font-medium ${textColor} hover:text-orange-500 transition-colors duration-300`}>
          {item.icon}
          <span className="ml-2">{item.name}</span>
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={{
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: -10 },
      }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left px-4 py-2 text-lg font-medium ${textColor} hover:text-orange-500 transition-colors duration-300 flex justify-between items-center`}
      >
        <span className="flex items-center">
          {item.icon}
          <span className="ml-2">{item.name}</span>
        </span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-opacity-50 backdrop-blur-sm"
          >
            {item.submenu.map((subItem) => (
              <Link
                key={subItem}
                href={`/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={onClick}
                className={`block px-8 py-2 text-sm ${textColor === "text-white" ? "text-gray-200" : "text-gray-600"
                  } hover:text-orange-500 transition-colors duration-300`}
              >
                {subItem}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar