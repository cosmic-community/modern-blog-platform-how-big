import Link from 'next/link'
import { Post } from '@/types'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const categories = post.metadata?.categories || []
  const publishedDate = post.metadata?.published_date

  return (
    <article className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg">
      <Link href={`/posts/${post.slug}`}>
        {/* Featured Image */}
        {featuredImage && (
          <div className="aspect-video overflow-hidden bg-gray-100">
            <img
              src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={post.title}
              width={400}
              height={225}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {categories.map((category) => (
                <span
                  key={category.id}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                >
                  {category.metadata?.icon && (
                    <span>{category.metadata.icon}</span>
                  )}
                  {category.metadata?.name || category.title}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h2>

          {/* Author and Date */}
          <div className="flex items-center gap-3 text-sm text-gray-600">
            {author && (
              <div className="flex items-center gap-2">
                {author.metadata?.profile_picture && (
                  <img
                    src={`${author.metadata.profile_picture.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                    alt={author.metadata?.name || author.title}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                )}
                <span className="font-medium">
                  {author.metadata?.name || author.title}
                </span>
              </div>
            )}
            {publishedDate && (
              <>
                <span>•</span>
                <time dateTime={publishedDate}>
                  {new Date(publishedDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
              </>
            )}
          </div>
        </div>
      </Link>
    </article>
  )
}