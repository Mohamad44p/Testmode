import LastSec from "../LastSec";

interface BlogPost {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    slug: string;
    yoast_head_json: {
        og_image: [{ url: string }];
    };
    categories: Array<{
        id: number;
        name: string;
        slug: string;
    }>;
}

async function getLatestPosts(): Promise<BlogPost[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/posts?per_page=2&orderby=date&order=desc`, { next: { revalidate: 3600 } })
    if (!res.ok) throw new Error('Failed to fetch posts')
    const posts = await res.json()
    return posts.slice(0, 2)
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