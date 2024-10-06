import SingleBlogPageContent from '@/components/Blog/[id]/page'
import React from 'react'

async function getPost(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/custom-blog-posts/v1/posts/${id}`, { next: { revalidate: 3600 } })
  if (!res.ok) throw new Error('Failed to fetch post')
  return res.json()
}

export default async function SingleBlogPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id)
  return (
    <section className='my-20'>
      <SingleBlogPageContent post={post} />
    </section>
  )
}