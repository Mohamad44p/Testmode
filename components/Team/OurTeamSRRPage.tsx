import { unstable_noStore } from "next/cache";
import OurTeamPage from "./OurTeam";

const API_BASE_URL = process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL;

interface TeamMember {
  id: string;
  name: string;
  position: string;
  imgSrc: string;
  bg: string;
}

async function getTeamMembers(): Promise<TeamMember[]> {
  unstable_noStore();
  const res = await fetch(`${API_BASE_URL}/wp-json/our-team/v1/members`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch team members");
  }
  return res.json();
}

export default async function OurTeamSRRPage() {
  const members = await getTeamMembers();
  return <OurTeamPage members={members} />;
}