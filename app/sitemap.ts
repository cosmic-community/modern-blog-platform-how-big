import { getAllPosts } from '@/lib/cosmic'
import { Post } from '@/types'

export default async function sitemap() {
  const posts = await getAllPosts() as Post[]
  
  const postEntries = posts.map((post) => ({
    url: `https://yourdomain.com/posts/${post.slug}`,
    lastModified: new Date(post.modified_at),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...postEntries,
  ]
}