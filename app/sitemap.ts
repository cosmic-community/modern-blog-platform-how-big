import { getAllPosts } from '@/lib/cosmic'
import { Post } from '@/types'

export default async function sitemap() {
  const posts = await getAllPosts() as Post[]
  
  const postEntries = posts.map((post) => {
    // Ensure we have a valid date, fallback to current date if invalid
    let lastModified: Date
    try {
      const dateString = post.modified_at || post.created_at
      lastModified = dateString ? new Date(dateString) : new Date()
      // Validate the date is actually valid
      if (isNaN(lastModified.getTime())) {
        lastModified = new Date()
      }
    } catch {
      lastModified = new Date()
    }

    return {
      url: `https://${process.env.VERCEL_URL || 'localhost:3000'}/posts/${post.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }
  })

  return [
    {
      url: `https://${process.env.VERCEL_URL || 'localhost:3000'}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...postEntries,
  ]
}