"use client"

import React from "react"
import { motion } from "framer-motion"
import { Clock, User, Tag, BookOpen, ChevronRight, ThumbsUp, MessageSquare, Share2, Bookmark } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface BlogPost {
  id: number
  title: string
  content: string
  excerpt: string
  slug: string
  author: {
    name: string
    avatar: string
  }
  publishDate: string
  readTime: string
  main_image: string
  small_description: string
  categories: string[]
  tags: string[]
  sections: string[]
}

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function SingleBlogPageContent({ post }: { post: BlogPost }) {

  const truncateHeader = (header: string) => {
    const words = header.split(' ')
    if (words.length > 10) {
      return words.slice(0, 10).join(' ') + '...'
    }
    return header
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
              {post.title}
            </motion.h1>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <Avatar className="w-16 h-16">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <p className="text-xl font-semibold">{post.author.name}</p>
                <p className="text-gray-600 flex items-center justify-center sm:justify-start">
                  <Clock className="mr-2 h-4 w-4" />
                  {post.publishDate}
                </p>
                <p className="text-gray-600 flex items-center justify-center sm:justify-start mt-1">
                  <User className="mr-2 h-4 w-4" />
                  {post.readTime}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {post.categories.map((category, index) => (
                <span
                  key={index}
                  className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          </header>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative w-full aspect-video mb-12"
          >
            <Image
              src={post.main_image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            className="mb-12 bg-white rounded-lg shadow-md p-6"
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <BookOpen className="mr-2 h-6 w-6 text-blue-600" />
              Table of Contents
            </h2>
            <ul className="space-y-2">
              {post.sections.map((section, index) => (
                <li key={index} className="flex items-center">
                  <a
                    href={`#section-${index + 1}`}
                    className="text-blue-600 hover:underline transition-colors duration-200"
                  >
                    {truncateHeader(section.split('\r')[0])}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {post.sections.map((section, index) => (
            <motion.section
              key={index}
              className="mb-12"
              variants={fadeInUpVariants}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
            >
              <h2 id={`section-${index + 1}`} className="text-xl font-bold mb-4">
                {section.split('\r')[0]}
              </h2>
              <div className="text-lg leading-relaxed whitespace-pre-wrap">
                {section.split('\r\n\r\n').slice(1).join('\n\n')}
              </div>
            </motion.section>
          ))}

          <motion.div
            className="mt-12"
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.2 * (post.sections.length + 1) }}
          >
            <h3 className="text-2xl font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>

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
    </div>
  )
}