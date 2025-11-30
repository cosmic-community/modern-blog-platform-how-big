// app/categories/[slug]/page.tsx
import { getAllCategories, getPostsByCategory } from '@/lib/cosmic'
import { Post, Category } from '@/types'
import Header from '@/components/Header'
import PostCard from '@/components/PostCard'
import { notFound } from 'next/navigation'

export const revalidate = 60

export async function generateStaticParams() {
  const categories = await getAllCategories() as Category[]
  
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export default async function CategoryPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const categories = await getAllCategories() as Category[]
  const category = categories.find(cat => cat.slug === slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.id) as Post[]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            {category.metadata?.icon && (
              <span className="text-3xl">{category.metadata.icon}</span>
            )}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {category.metadata?.name || category.title}
          </h1>
          {category.metadata?.description && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {category.metadata.description}
            </p>
          )}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts found in this category</p>
          </div>
        )}
      </main>
    </div>
  )
}