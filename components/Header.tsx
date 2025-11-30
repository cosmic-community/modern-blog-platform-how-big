import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
            Modern Blog
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/#categories" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Categories
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}