import AllProjects from "@/components/Projects/AllProjects";

async function getProjects(page = 1) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/project?per_page=4&page=${page}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }
  const projects = await res.json();
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
  return { projects, totalPages };
}

export default async function ProjectPage() {
  const { projects, totalPages } = await getProjects();
  return (
    <div>
      <AllProjects initialProjects={projects} totalPages={totalPages} />
    </div>
  );
}
