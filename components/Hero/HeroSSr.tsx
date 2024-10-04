import { unstable_noStore } from "next/cache";
import Hero from "./Hero";

const API_BASE_URL = process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL;

async function getHeroData() {
  unstable_noStore();
  const res = await fetch(`${API_BASE_URL}/wp-json/hero-images-video/v1/content`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch hero data");
  }
  return res.json();
}

export default async function HeroPage() {
  const heroData = await getHeroData();
  return <Hero heroData={heroData} />;
}