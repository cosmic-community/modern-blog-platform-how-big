# Modern Blog Platform

![App Preview](https://imgix.cosmicjs.com/7d10fa80-ce22-11f0-92bd-670eb9786ad4-photo-1528181304800-259b08848526-1764530790373.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A beautifully designed, modern blog platform built with Next.js 16 and powered by Cosmic headless CMS. Features a clean, responsive design with category filtering, author profiles, and rich markdown content support.

## ✨ Features

- 📝 **Dynamic Blog Posts** - Create and manage blog posts with markdown content
- 👤 **Author Profiles** - Rich author profiles with bios, profile pictures, and social links
- 🏷️ **Category Management** - Organize content with visual category filters
- 🖼️ **Featured Images** - High-resolution, imgix-optimized images for fast loading
- 📱 **Responsive Design** - Mobile-first design that works on all devices
- ⚡ **Server-Side Rendering** - Fast page loads with Next.js 16 App Router
- 🎨 **Modern UI** - Clean interface with Tailwind CSS styling

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=692c99f9c5646c2bd110e9bf&clone_repository=692c9d33c5646c2bd110ea21)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a blog with posts, authors, and categories"

### Code Generation Prompt

> "How Big Is Sao Paulo? | Facts About Sao Paulo"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI component library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic** - Headless CMS for content management
- **Cosmic SDK** - Official SDK for API integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- A Cosmic account and bucket
- Basic knowledge of React and Next.js

### Installation

1. **Clone this repository**

```bash
git clone <repository-url>
cd modern-blog-platform
```

2. **Install dependencies**

```bash
bun install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

Find these values in your Cosmic dashboard under Bucket Settings > API Access.

4. **Run the development server**

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📚 Cosmic SDK Examples

### Fetching All Posts

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: posts } = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Post

```typescript
const { object: post } = await cosmic.objects
  .findOne({
    type: 'posts',
    slug: 'post-slug'
  })
  .depth(1)
```

### Fetching Posts by Category

```typescript
const { objects: posts } = await cosmic.objects
  .find({
    type: 'posts',
    'metadata.categories': categoryId
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## 🌐 Cosmic CMS Integration

This application integrates seamlessly with Cosmic's headless CMS:

- **Content Types**: Posts, Authors, and Categories
- **Relationships**: Posts link to Authors (object metafield) and Categories (objects metafield)
- **Media**: Featured images stored in Cosmic's media library with imgix optimization
- **Markdown**: Rich content formatting with markdown support

### Content Structure

**Posts Object Type**
- Title (text)
- Content (markdown)
- Featured Image (file)
- Author (object relationship)
- Categories (objects relationship)
- Published Date (date)

**Authors Object Type**
- Name (text)
- Bio (textarea)
- Profile Picture (file)
- Email (text)
- Twitter Handle (text)

**Categories Object Type**
- Name (text)
- Description (textarea)
- Icon (emoji)

## 🚀 Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Netlify

1. Push your code to GitHub
2. Connect your repository in Netlify
3. Add environment variables
4. Set build command: `bun run build`
5. Set publish directory: `.next`

### Environment Variables for Production

Set these in your hosting platform:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Cosmic Documentation](https://www.cosmicjs.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

<!-- README_END -->