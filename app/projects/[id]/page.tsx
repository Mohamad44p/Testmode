import { notFound } from "next/navigation";
import FirstSec from "@/components/Projects/SingelPro/FirstSec";
import SecSection from "@/components/Projects/SingelPro/SecSection";
import OpportunitySection from "@/components/Projects/SingelPro/OpportunitySection";
import WhatDid from "@/components/Projects/SingelPro/WhatDid";
import Outcome from "@/components/Projects/SingelPro/Outcome";
import MainImagesCard from "@/components/Projects/SingelPro/CardsImages/MainImagesCard";
import HorizontalImageScroll from "@/components/Projects/SingelPro/HorzantalImage/HorzantalImages";
import BoxReveal from "@/components/magicui/box-reveal";

async function getProject(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/project/${id}?acf_format=standard`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch project");
  }
  return res.json();
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  let project;
  try {
    project = await getProject(params.id);
  } catch (error) {
    console.error("Error fetching project:", error);
    notFound();
  }

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-gray-50">
      <FirstSec project={project} />
      <SecSection project={project} />
      <section>
        <div className="flex items-center justify-center my-10">
          <BoxReveal
            boxColor="#000"
            duration={0.5}
            width='fit-content'
          >
            <h1 className="text-4xl sm:text-6xl tracking-tight">
              Project Images Gallery
            </h1>
          </BoxReveal>
        </div>
        <HorizontalImageScroll project={project} />
      </section>
      <OpportunitySection project={project} />
      <WhatDid project={project} />
      <Outcome project={project} />
    </div>
  );
}
