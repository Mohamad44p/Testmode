import { unstable_noStore } from "next/cache";
import OurTeam from "./OurTeam";

const API_BASE_URL = process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL;

async function getTeamMembers(limit: number = 10) {
  unstable_noStore();
  const res = await fetch(`${API_BASE_URL}/wp-json/our-team/v1/members?per_page=${limit}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch team members");
  }
  return res.json();
}

export default async function OurTeamPage() {
  const membersData = await getTeamMembers(10);
  return <OurTeam membersData={membersData} />;
}