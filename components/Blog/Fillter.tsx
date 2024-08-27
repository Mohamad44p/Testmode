'use client'

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [isTopBar, setIsTopBar] = useState(false)
  const [topic, setTopic] = useState("")
  const [resourceType, setResourceType] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsTopBar(scrollPosition > 1000)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`w-full max-w-screen-xl border-t border-b border-black mx-auto py-6 transition-all duration-500 ease-in-out ${
        isTopBar
          ? 'fixed top-16 left-0 right-0 shadow-md z-50 border-b bg-white border-black'
          : 'my-[20vh] rounded-lg'
      }`}
    >
      <div className={`flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 ${isTopBar ? 'max-w-screen-xl mx-auto px-4' : 'px-6'}`}>
        <Select value={topic} onValueChange={setTopic}>
          <SelectTrigger className={`transition-all duration-300 bg-white border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-black/10 ${isTopBar ? 'w-full sm:w-32 h-9' : 'w-full sm:w-40 h-10'}`}>
            <SelectValue placeholder="Topic" />
          </SelectTrigger>
          <SelectContent className="bg-white border-gray-200">
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="nextjs">Next.js</SelectItem>
            <SelectItem value="typescript">TypeScript</SelectItem>
          </SelectContent>
        </Select>
        <Select value={resourceType} onValueChange={setResourceType}>
          <SelectTrigger className={`transition-all duration-300 bg-white border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-black/10 ${isTopBar ? 'w-full sm:w-32 h-9' : 'w-full sm:w-40 h-10'}`}>
            <SelectValue placeholder="Resource Type" />
          </SelectTrigger>
          <SelectContent className="bg-white border-gray-200">
            <SelectItem value="article">Article</SelectItem>
            <SelectItem value="video">Video</SelectItem>
            <SelectItem value="course">Course</SelectItem>
          </SelectContent>
        </Select>
        <div className="relative flex-grow w-full sm:w-auto">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 ${
            isTopBar ? 'h-3 w-3' : 'h-4 w-4'
          }`} />
          <Input
            className={`pl-10 pr-4 py-2 w-full bg-white border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition-all duration-300 ${
              isTopBar ? 'text-sm h-9' : 'text-base h-10'
            }`}
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
    </div>
  )
}