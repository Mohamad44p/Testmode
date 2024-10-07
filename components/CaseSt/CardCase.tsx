"use client"

import { useScroll } from "framer-motion"
import { useRef } from "react"
import { ArrowRightIcon } from "lucide-react"
import BoxReveal from "../magicui/box-reveal"
import CardProject from "./CardProject"
import { TextReveal } from "../ui/typography"

interface Project {
  id: number
  title: {
    rendered: string
  }
  link: string
  custom_fields: {
    short_description: string
    bg_color: string
    text_color: string
  }
  featured_image: string
}

interface CardCaseProps {
  initialProjects: Project[]
}

export default function CardCase({ initialProjects }: CardCaseProps) {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <section data-color="Almond" className="section">
      <div className="w-fit mx-auto">
        <h1 className="text-center md:mb-0 mb-12 mt-[30vh] text-4xl sm:text-6xl tracking-tight">
          <BoxReveal boxColor="#000">
            <p>Our Projects</p>
          </BoxReveal>
        </h1>
      </div>
      <main ref={container}>
        {initialProjects.map((project, i) => {
          const targetScale = 1 - (initialProjects.length - i) * 0.05
          return (
            <CardProject
              key={project.id}
              i={i}
              title={project.title.rendered}
              description={project.custom_fields.short_description}
              src={project.featured_image}
              url={project.link}
              color={project.custom_fields.bg_color}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              textColor={project.custom_fields.text_color}
            />
          )
        })}
      </main>
      <div className="md:mt-0">
        <div className="flex justify-center">
          <a
            href="/projects"
            className="flex bg-[#9AB453] text-white px-6 py-3 rounded-lg items-center text-lg font-medium transition-colors hover:bg-[#8CA348]"
          >
            <TextReveal>View all projects</TextReveal>
            <ArrowRightIcon className="w-6 h-6 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}