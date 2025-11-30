import { getAllPosts, getAllCategories } from '@/lib/cosmic'
import { Post, Category } from '@/types'
import Header from '@/components/Header'
import PostCard from '@/components/PostCard'
import CategoryFilter from '@/components/CategoryFilter'

export const revalidate = 60

export default async function HomePage() {
  const posts = await getAllPosts() as Post[]
  const categories = await getAllCategories() as Category[]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover stories, thinking, and expertise from writers on any topic
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter categories={categories} />

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts found</p>
          </div>
        )}
      </main>
    </div>
  )
}