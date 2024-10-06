"use client"

import React from "react"
import { motion } from "framer-motion"
import { Clock, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import parse, { domToReact, HTMLReactParserOptions, Element, Text } from 'html-react-parser'
import Link from 'next/link'

interface ElementorBlogPost {
  id: number
  title: { rendered: string }
  content: { rendered: string }
  date: string
  author: {
    name: string
    avatar_urls: { [key: string]: string }
  }
}

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ElementorBlogPostContent({ post }: { post: ElementorBlogPost }) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const renderElementorContent = (content: string) => {
    const options: HTMLReactParserOptions = {
      replace: (domNode) => {
        if (domNode instanceof Element) {
          switch (domNode.name) {
            case 'section':
              return (
                <section className={`elementor-section ${domNode.attribs.class || ''}`}>
                  {domToReact(domNode.children as any, options)}
                </section>
              )
            case 'div':
              if (domNode.attribs.class && domNode.attribs.class.includes('elementor-container')) {
                return (
                  <div className={`elementor-container ${domNode.attribs.class}`}>
                    {domToReact(domNode.children as any, options)}
                  </div>
                )
              }
              if (domNode.attribs.class && domNode.attribs.class.includes('elementor-column')) {
                return (
                  <div className={`elementor-column ${domNode.attribs.class}`}>
                    {domToReact(domNode.children as any, options)}
                  </div>
                )
              }
              if (domNode.attribs.class && domNode.attribs.class.includes('elementor-widget')) {
                return (
                  <div className={`elementor-widget ${domNode.attribs.class}`}>
                    {domToReact(domNode.children as any, options)}
                  </div>
                )
              }
              break
            case 'h1':
            case 'h2':
            case 'h3':
            case 'h4':
            case 'h5':
            case 'h6':
              return React.createElement(
                domNode.name,
                { className: `elementor-heading-title ${domNode.attribs.class || ''}` },
                domToReact(domNode.children as any, options)
              )
            case 'p':
              return (
                <p className={`elementor-text-editor ${domNode.attribs.class || ''}`}>
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
                  className={`elementor-image ${domNode.attribs.class || ''}`}
                />
              )
            case 'iframe':
              if (domNode.attribs.src && domNode.attribs.src.includes('youtube.com')) {
                return (
                  <div className="elementor-video aspect-w-16 aspect-h-9">
                    <iframe
                      src={domNode.attribs.src}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className={domNode.attribs.class || ''}
                    ></iframe>
                  </div>
                )
              }
              break
            case 'a':
              return (
                <Link
                  href={domNode.attribs.href}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {domToReact(domNode.children as any, options)}
                </Link>
              )
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

  return (
    <div className="min-h-screen text-gray-900">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.article
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <header className="mb-12">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-center"
              variants={fadeInUpVariants}
            >
              {post.title.rendered}
            </motion.h1>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <div className="text-center sm:text-left">
                <p className="text-xl font-semibold">{post.author.name}</p>
                <p className="text-gray-600 flex items-center justify-center sm:justify-start">
                  <Clock className="mr-2 h-4 w-4" />
                  {mounted ? formatDate(post.date) : null}
                </p>
              </div>
            </div>
          </header>

          <motion.div
            className="elementor-content"
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {renderElementorContent(post.content.rendered)}
          </motion.div>
        </motion.article>
      </main>
    </div>
  )
}