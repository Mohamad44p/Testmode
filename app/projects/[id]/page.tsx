import { notFound } from "next/navigation"
import FirstSec from "@/components/Projects/SingelPro/FirstSec"
import SecSection from "@/components/Projects/SingelPro/SecSection"
import OpportunitySection from "@/components/Projects/SingelPro/OpportunitySection"
import WhatDid from "@/components/Projects/SingelPro/WhatDid"
import Outcome from "@/components/Projects/SingelPro/Outcome"
import HorizontalImageScroll from "@/components/Projects/SingelPro/HorzantalImage/HorzantalImages"
import BoxReveal from "@/components/magicui/box-reveal"

async function getProject(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/project/${id}?acf_format=standard`,
    { next: { revalidate: 3600 } }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch project")
  }
  return res.json()
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string }
}) {
  let project
  try {
    project = await getProject(params.id)
  } catch (error) {
    console.error("Error fetching project:", error)
    notFound()
  }

  if (!project) {
    notFound()
  }

  const renderSection = (Component: React.ComponentType<{ project: any }>, errorMessage: string) => {
    try {
      return <Component project={project} />
    } catch (error) {
      console.error(`Error rendering ${Component.name}:`, error)
      return <p className="text-red-500 text-center py-4">{errorMessage}</p>
    }
  }

  return (
    <div className="bg-gray-50">
      {renderSection(FirstSec, "Error loading project overview")}
      {renderSection(SecSection, "Error loading project details")}
      <section>
        <div className="flex items-center justify-center my-10">
          <BoxReveal
            boxColor="#000"
            duration={0.5}
            width="fit-content"
          >
            <h1 className="text-4xl sm:text-6xl tracking-tight">
              Project Images Gallery
            </h1>
          </BoxReveal>
        </div>
        {renderSection(HorizontalImageScroll, "Error loading project images")}
      </section>
      {renderSection(OpportunitySection, "Error loading opportunity section")}
      {renderSection(WhatDid, "Error loading what we did section")}
      {renderSection(Outcome, "Error loading project outcome")}
    </div>
  )
}