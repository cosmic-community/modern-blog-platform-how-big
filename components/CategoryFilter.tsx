import Link from 'next/link'
import { Category } from '@/types'

interface CategoryFilterProps {
  categories: Category[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  if (!categories || categories.length === 0) {
    return null
  }

  return (
    <div className="border-t border-b border-gray-200 py-6" id="categories">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full hover:border-gray-300 hover:shadow-md transition-all group"
          >
            {category.metadata?.icon && (
              <span className="text-2xl">{category.metadata.icon}</span>
            )}
            <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
              {category.metadata?.name || category.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}