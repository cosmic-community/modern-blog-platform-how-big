// app/posts/[slug]/page.tsx
import { getPostBySlug, getAllPosts } from '@/lib/cosmic'
import { Post } from '@/types'
import Header from '@/components/Header'
import ReactMarkdown from 'react-markdown'
import { notFound } from 'next/navigation'

export const revalidate = 60

export async function generateStaticParams() {
  const posts = await getAllPosts() as Post[]
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug) as Post | null

  if (!post) {
    notFound()
  }

  const author = post.metadata?.author
  const categories = post.metadata?.categories || []
  const featuredImage = post.metadata?.featured_image

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((category) => (
                <span
                  key={category.id}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {category.metadata?.icon && (
                    <span>{category.metadata.icon}</span>
                  )}
                  {category.metadata?.name || category.title}
                </span>
              ))}
            </div>
          )}

          {/* Author Info */}
          {author && (
            <div className="flex items-center gap-4 py-4 border-t border-b border-gray-200">
              {author.metadata?.profile_picture && (
                <img
                  src={`${author.metadata.profile_picture.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
                  alt={author.metadata?.name || author.title}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              )}
              <div>
                <p className="font-semibold text-gray-900">
                  {author.metadata?.name || author.title}
                </p>
                {post.metadata?.published_date && (
                  <p className="text-sm text-gray-500">
                    {new Date(post.metadata.published_date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                )}
              </div>
            </div>
          )}
        </header>

        {/* Featured Image */}
        {featuredImage && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
              alt={post.title}
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          {post.metadata?.content && (
            <ReactMarkdown>{post.metadata.content}</ReactMarkdown>
          )}
        </div>

        {/* Author Bio */}
        {author?.metadata?.bio && (
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-start gap-4">
              {author.metadata?.profile_picture && (
                <img
                  src={`${author.metadata.profile_picture.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`}
                  alt={author.metadata?.name || author.title}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              )}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  About {author.metadata?.name || author.title}
                </h3>
                <p className="text-gray-600 mb-3">{author.metadata.bio}</p>
                {author.metadata?.twitter_handle && (
                  <a
                    href={`https://twitter.com/${author.metadata.twitter_handle.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {author.metadata.twitter_handle}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </article>
    </div>
  )
}