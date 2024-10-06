import AllBlogPage from "@/components/Blog/AllBlogPage";
import React from "react";

async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/posts`, { next: { revalidate: 3600 } })
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}

export default async function BlogPage() {
  const posts = await getPosts()
  return (
    <div>
      <AllBlogPage BlogPosts={posts} />
    </div>
  );
}