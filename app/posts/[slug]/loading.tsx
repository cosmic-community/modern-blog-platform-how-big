// app/posts/[slug]/loading.tsx
import Header from '@/components/Header'

export default function PostLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse">
          {/* Title skeleton */}
          <div className="h-12 bg-gray-200 rounded-lg mb-4"></div>
          <div className="h-8 bg-gray-200 rounded-lg w-2/3 mb-8"></div>
          
          {/* Author skeleton */}
          <div className="flex items-center gap-4 py-4 border-t border-b border-gray-200 mb-8">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-24"></div>
            </div>
          </div>
          
          {/* Image skeleton */}
          <div className="aspect-video bg-gray-200 rounded-lg mb-8"></div>
          
          {/* Content skeleton */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}