"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useSpring, useInView, useAnimation } from "framer-motion"
import { ChevronUp, ThumbsUp, MessageSquare, Share2, Bookmark, Clock, User, Tag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const TypingAnimation = ({ text }: { text: string }) => {
  const letters = Array.from(text)
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.h1
      className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  )
}

const AnimatedText = ({ text, className = "" }: { text: string; className?: string }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.p
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        },
      }}
    >
      {text}
    </motion.p>
  )
}

const TableOfContents = ({ sections }: { sections: string[] }) => {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
        <ul className="space-y-2">
          {sections.map((section, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a href={`#section-${index + 1}`} className="flex items-center text-primary hover:underline">
                <ArrowRight className="mr-2 h-4 w-4" />
                {section}
              </a>
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default function BlogPostPage() {
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const sections = [
    "AI-Powered Development Tools",
    "WebAssembly and Browser-Based Applications",
    "The Growth of Jamstack",
    "Progressive Web Apps (PWAs)",
    "Serverless Architecture",
    "The Rise of Low-Code and No-Code Platforms",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX }}
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.article
          className="prose prose-lg lg:prose-xl dark:prose-invert mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TypingAnimation text="The Future of Web Development" />
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/images/Carecter1.jpeg" alt="Author" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <p className="text-2xl font-semibold">John Doe</p>
              <p className="text-muted-foreground flex items-center justify-center sm:justify-start">
                <Clock className="mr-2 h-4 w-4" />
                Posted on August 24, 2023
              </p>
              <p className="text-muted-foreground flex items-center justify-center sm:justify-start mt-1">
                <User className="mr-2 h-4 w-4" />
                5 min read
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary" className="text-sm">
              <Tag className="mr-1 h-3 w-3" />
              Web Development
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Tag className="mr-1 h-3 w-3" />
              Technology
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Tag className="mr-1 h-3 w-3" />
              Future Trends
            </Badge>
          </div>
          <motion.img
            src="/images/Image1.webp"
            alt="Future of Web Development"
            className="w-full aspect-video object-cover rounded-lg mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <AnimatedText
            text="Web development is constantly evolving, with new technologies and frameworks emerging at a rapid pace. In this post, we'll explore some of the exciting trends shaping the future of web development and how they're transforming the digital landscape."
            className="text-xl leading-relaxed mb-8"
          />
          
          <TableOfContents sections={sections} />
          
          <motion.h3 
            id="section-1"
            className="text-3xl font-bold mt-12 mb-4" 
            variants={fadeInUpVariants} 
            transition={{ duration: 0.5, delay: 1 }}
          >
            1. AI-Powered Development Tools
          </motion.h3>
          <AnimatedText
            text="Artificial Intelligence is revolutionizing the way we build websites and applications. From AI-assisted coding to automated testing and optimization, these tools are making developers more productive and efficient. Some key advancements include:"
            className="mb-4"
          />
          <ul className="list-disc pl-6 mb-4">
            <AnimatedText text="• Intelligent code completion and suggestions" />
            <AnimatedText text="• Automated bug detection and fixing" />
            <AnimatedText text="• AI-driven design systems and component generation" />
            <AnimatedText text="• Natural language to code translation" />
          </ul>
          
          <motion.h3 
            id="section-2"
            className="text-3xl font-bold mt-12 mb-4" 
            variants={fadeInUpVariants} 
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            2. WebAssembly and the Rise of Browser-Based Applications
          </motion.h3>
          <AnimatedText
            text="WebAssembly (Wasm) is enabling developers to run high-performance applications directly in the browser, opening up new possibilities for web-based software. This technology allows for:"
            className="mb-4"
          />
          <ul className="list-disc pl-6 mb-4">
            <AnimatedText text="• Near-native performance for complex applications" />
            <AnimatedText text="• Cross-platform compatibility without sacrificing speed" />
            <AnimatedText text="• Integration of languages like C, C++, and Rust in web applications" />
            <AnimatedText text="• Enhanced gaming experiences on the web" />
          </ul>
          
          <motion.h3 
            id="section-3"
            className="text-3xl font-bold mt-12 mb-4" 
            variants={fadeInUpVariants} 
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            3. The Continued Growth of Jamstack
          </motion.h3>
          <AnimatedText
            text="The Jamstack architecture is gaining popularity due to its focus on performance, security, and developer experience. Key benefits include:"
            className="mb-4"
          />
          <ul className="list-disc pl-6 mb-4">
            <AnimatedText text="• Improved website speed and performance" />
            <AnimatedText text="• Enhanced security through reduced attack surfaces" />
            <AnimatedText text="• Better scalability and lower hosting costs" />
            <AnimatedText text="• Improved developer workflow and collaboration" />
          </ul>
          
          <motion.h3 
            id="section-4"
            className="text-3xl font-bold mt-12 mb-4" 
            variants={fadeInUpVariants} 
            transition={{ duration: 0.5, delay: 2.2 }}
          >
            4. Progressive Web Apps (PWAs)
          </motion.h3>
          <AnimatedText
            text="Progressive Web Apps continue to blur the line between web and native applications. With features like offline functionality, push notifications, and home screen installation, PWAs are becoming increasingly powerful and user-friendly. Benefits include:"
            className="mb-4"
          />
          <ul className="list-disc pl-6 mb-4">
            <AnimatedText text="• Improved user engagement and retention" />
            <AnimatedText text="• Cross-platform compatibility" />
            <AnimatedText text="• Reduced development and maintenance costs" />
            <AnimatedText text="• Improved performance and faster load times" />
          </ul>
          
          <motion.h3 
            id="section-5"
            className="text-3xl font-bold mt-12 mb-4" 
            variants={fadeInUpVariants} 
            transition={{ duration: 0.5, delay: 2.6 }}
          >
            5. Serverless Architecture
          </motion.h3>
          <AnimatedText
            text="Serverless computing is changing the way we think about backend development. By abstracting away server management, developers can focus on writing code and building features, leading to:"
            className="mb-4"
          />
          <ul className="list-disc pl-6 mb-4">
            <AnimatedText text="• Reduced operational costs and improved scalability" />
            <AnimatedText text="• Faster development cycles and time-to-market" />
            <AnimatedText text="• Improved fault tolerance and reliability" />
            <AnimatedText text="• Easier integration with cloud services and APIs" />
          </ul>
          
          <motion.h3 
            id="section-6"
            className="text-3xl font-bold mt-12 mb-4" 
            variants={fadeInUpVariants} 
            transition={{ duration: 0.5, delay: 3 }}
          >
            6. The Rise of Low-Code and No-Code Platforms
          </motion.h3>
          <AnimatedText
            text="Low-code and no-code platforms are democratizing web development, allowing non-technical users to create and deploy web applications. This trend is leading to:"
            className="mb-4"
          />
          <ul className="list-disc pl-6 mb-4">
            <AnimatedText text="• Faster prototyping and idea validation" />
            <AnimatedText text="• Reduced development costs for simple applications" />
            <AnimatedText text="• Empowerment of citizen developers within organizations" />
            <AnimatedText text="• Increased focus on complex problem-solving for professional developers" />
          </ul>
          
          <Separator className="my-12" />
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <h4 className="text-2xl font-semibold mb-6">Share your thoughts</h4>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button variant="outline" size="lg" className="text-lg">
                <ThumbsUp className="mr-2 h-6 w-6" />
                Like
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                <MessageSquare className="mr-2 h-6 w-6" />
                Comment
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                <Share2 className="mr-2 h-6 w-6" />
                Share
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                <Bookmark className="mr-2 h-6 w-6" />
                Save
              </Button>
            </div>
            <Card>
              <CardContent className="p-6">
                <div className="flex space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback>You</AvatarFallback>
                  </Avatar>
                  <div className="flex-grow">
                    <Input placeholder="Write a comment..." className="text-lg" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.article>
      </main>

      <motion.div
        className="fixed bottom-8 right-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollToTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-12 h-12 rounded-full"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  )
}