import LastSec from "../LastSec";

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    slug: string;
    main_image: string;
    small_description: string;
    categories: string[];
    tags: string[];
}

async function getLatestPosts(): Promise<BlogPost[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/custom-blog-posts/v1/posts?per_page=2&orderby=date&order=desc`, { next: { revalidate: 3600 } })
    if (!res.ok) throw new Error('Failed to fetch posts')
    const posts = await res.json()
    return posts.slice(0, 2).map((post: any) => ({
        id: post.id,
        title: post.title,
        excerpt: post.small_description,
        slug: post.slug,
        main_image: post.main_image,
        small_description: post.small_description,
        categories: Array.isArray(post.categories) ? post.categories : [post.categories],
        tags: Array.isArray(post.tags) ? post.tags : [post.tags]
    }))
}

export default async function BlogPostsServer() {
    let posts: BlogPost[] = []
    let error: string | null = null

    try {
        posts = await getLatestPosts()
    } catch (e) {
        error = 'Failed to load blog posts'
        console.error(e)
    }

    return <LastSec posts={posts} />
}