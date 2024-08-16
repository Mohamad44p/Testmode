import { Suspense } from "react";
import CardCase from "./CardCase";

async function getProjects() {
  const res = await fetch(
    "https://befoundonline.ps/wp-json/wp/v2/project?per_page=5&acf_format=standard"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }
  return res.json();
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CardCase projects={projects} />
    </Suspense>
  );
}
