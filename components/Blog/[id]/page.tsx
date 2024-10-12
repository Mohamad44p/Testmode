"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Clock, ThumbsUp, Share2, MessageSquare, Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import parse, { domToReact, HTMLReactParserOptions, Element } from 'html-react-parser'
import Link from 'next/link'

interface ElementorBlogPost {
  id: number
  title: { rendered: string }
  content: { rendered: string }
  date: string
  author_name: string
  author_id: number
  author_avatar: string
  categories: Array<{
    id: number
    name: string
    slug: string
  }>
}

interface Section {
  id: string
  title: string
  level: number
}

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function EnhancedBlogPostContent({ post, relatedPosts }: { post: ElementorBlogPost, relatedPosts: ElementorBlogPost[] }) {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [likes, setLikes] = useState(0)
  const [sections, setSections] = useState<Section[]>([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    const parser = new DOMParser()
    const doc = parser.parseFromString(post.content.rendered, 'text/html')
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const extractedSections = Array.from(headings).map((heading) => {
      const level = parseInt(heading.tagName.charAt(1))
      const id = `heading-${heading.textContent?.toLowerCase().replace(/\s+/g, '-')}`
      return {
        id,
        title: heading.textContent || '',
        level: level
      }
    })
    setSections(extractedSections)
  }, [post.content.rendered])

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => document.getElementById(section.id))
      const currentSection = sectionElements.findIndex(el => {
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom > 100
        }
        return false
      })
      if (currentSection !== -1) {
        setActiveSection(sections[currentSection].id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const renderElementorContent = (content: string) => {
    const options: HTMLReactParserOptions = {
      replace: (domNode) => {
        if (domNode instanceof Element && domNode.name.match(/^h[1-6]$/)) {
          const level = parseInt(domNode.name.charAt(1))
          const id = `heading-${domNode.children[0]?.nodeType === Node.TEXT_NODE ? domNode.children[0].nodeValue?.toLowerCase().replace(/\s+/g, '-') : ''}`
          return React.createElement(
            domNode.name,
            {
              id,
              className: `elementor-heading-title ${domNode.attribs.class || ''} text-${4 - level}xl font-bold mb-${8 - level} mt-${level * 2} text-gray-${900 - level * 100}`,
            },
            domToReact(domNode.children as any, options)
          )
        }
        if (domNode instanceof Element) {
          switch (domNode.name) {
            case 'p':
              return (
                <p className={`elementor-text-editor ${domNode.attribs.class || ''} text-lg mb-4 text-gray-600 leading-relaxed`}>
                  {domToReact(domNode.children as any, options)}
                </p>
              )
            case 'img':
              return (
                <Image
                  src={domNode.attribs.src}
                  alt={domNode.attribs.alt || ''}
                  width={500}
                  height={300}
                  layout="responsive"
                  className={`elementor-image ${domNode.attribs.class || ''} rounded-lg shadow-md my-6`}
                />
              )
            case 'a':
              return (
                <Link
                  href={domNode.attribs.href}
                  className="text-blue-600 underline hover:text-blue-800 transition-colors duration-200"
                >
                  {domToReact(domNode.children as any, options)}
                </Link>
              )
            default:
              return domNode
          }
        }
      }
    }

    return parse(content, options)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside
            className={`lg:w-1/4 bg-white p-6 rounded-lg shadow-sm lg:block sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto transition-all duration-300 ease-in-out ${isSidebarOpen ? 'fixed inset-0 z-50 w-full lg:w-1/4' : 'hidden'
              }`}
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">In this article</h2>
            <nav className="space-y-1">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className={`py-2 border-b border-gray-100 last:border-b-0 ${section.level > 1 ? `pl-${(section.level - 1) * 4}` : ''
                    }`}
                >
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left text-sm transition-colors duration-200 ${activeSection === section.id
                        ? 'font-medium text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    {section.title}
                  </button>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <motion.article
            ref={contentRef}
            className="lg:w-3/4 bg-white p-8 rounded-lg shadow-sm"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
          >
            <header className="mb-8">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900"
                variants={fadeInUpVariants}
              >
                {post.title.rendered}
              </motion.h1>
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center">
                  <Avatar className="w-10 h-10 mr-2">
                    <AvatarImage src={post.author_avatar} alt={post.author_name} />
                    <AvatarFallback>{post.author_name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold">{post.author_name}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-1" />
                  <span>{mounted ? formatDate(post.date) : null}</span>
                </div>
              </div>
            </header>

            <motion.div
              className="elementor-content prose prose-lg max-w-none"
              variants={fadeInUpVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {renderElementorContent(post.content.rendered)}
            </motion.div>

            {/* Social interactions */}
            <div className="mt-8 flex items-center justify-between border-t border-b border-gray-200 py-4">
              <div className="flex items-center space-x-4">
                <button
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setLikes(likes + 1)}
                >
                  <ThumbsUp className="w-5 h-5" />
                  <span>{likes} Likes</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <MessageSquare className="w-5 h-5" />
                  <span>Comment</span>
                </button>
              </div>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>

            {/* Related posts */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{relatedPost.title.rendered}</h3>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center">
                        <Avatar className="w-10 h-10 mr-2">
                          <AvatarImage src={post.author_avatar} alt={post.author_name} />
                          <AvatarFallback>{post.author_name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold">{post.author_name}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{formatDate(relatedPost.date)}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${relatedPost.id}`} className="mt-4 inline-block text-blue-600 hover:underline">
                      Read more
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </main>

      <button
        className="fixed bottom-4 right-4 lg:hidden bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 z-50"
        onClick={() => setIsSidebarOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>
    </div>
  )
}