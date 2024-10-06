import AllProjects from "@/components/Projects/AllProjects";


async function getProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/project?_embed`, { next: { revalidate: 3600 } })
  if (!res.ok) {
    throw new Error('Failed to fetch projects')
  }
  return res.json()
}

export default async function ProjectPage() {
  const projects = await getProjects()
  return (
    <div>
      <AllProjects initialProjects={projects}/>
    </div>
  );
}
