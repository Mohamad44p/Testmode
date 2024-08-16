import { Suspense } from "react";
import Projects from "./Projects";

async function getProjects() {
  const res = await fetch(
    "https://befoundonline.ps/wp-json/wp/v2/project?&acf_format=standard"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }
  return res.json();
}

export default async function AsyncProjectsPage() {
  const projects = await getProjects();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Projects projects={projects} />
    </Suspense>
  );
}
