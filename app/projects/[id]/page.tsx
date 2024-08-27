import { notFound } from "next/navigation";
import FirstSec from "@/components/Projects/SingelPro/FirstSec";
import SecSection from "@/components/Projects/SingelPro/SecSection";
import OpportunitySection from "@/components/Projects/SingelPro/OpportunitySection";
import WhatDid from "@/components/Projects/SingelPro/WhatDid";
import Outcome from "@/components/Projects/SingelPro/Outcome";
import ImageGrid from "@/components/Projects/SingelPro/ImageGrid";

async function getProject(id: string) {
  const res = await fetch(
    `https://befoundonline.ps/wp-json/wp/v2/project/${id}?acf_format=standard`
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
    console.log("Fetched project data:", project);
  } catch (error) {
    console.error("Error fetching project:", error);
    notFound();
  }

  if (!project) {
    notFound();
  }

  return (
    <div>
      <FirstSec project={project} />
      {/* Uncomment these when ready to implement
      <SecSection project={project} />
      <ImageGrid project={project} />
      <OpportunitySection project={project} />
      <WhatDid project={project} />
      <Outcome project={project} />
      */}
    </div>
  );
}