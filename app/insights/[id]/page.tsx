import EnhancedBlogPostContent from '@/components/Blog/[id]/page'
import { Suspense } from 'react'

async function getPost(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/posts/${id}?_embed`, { next: { revalidate: 3600 } })
  if (!res.ok) throw new Error('Failed to fetch post')
  return res.json()
}

async function getRelatedPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/posts?per_page=2&_fields=id,title,excerpt,slug,date,author`, { next: { revalidate: 3600 } })
  if (!res.ok) {
    console.error('Failed to fetch related posts:', await res.text())
    return [] // Return an empty array instead of throwing an error
  }
  return res.json()
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  try {
    const [post, relatedPosts] = await Promise.all([
      getPost(params.id),
      getRelatedPosts()
    ])

    return (
      <section className='my-20'>
        <Suspense fallback={<div>Loading...</div>}>
          <EnhancedBlogPostContent post={post} relatedPosts={relatedPosts} />
        </Suspense>
      </section>
    )
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return <div>Error loading blog post. Please try again later.</div>
  }
}