// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Category interface
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
    icon?: string;
  };
}

// Author interface
export interface Author extends CosmicObject {
  type: 'authors';
  metadata: {
    name?: string;
    bio?: string;
    profile_picture?: {
      url: string;
      imgix_url: string;
    };
    email?: string;
    twitter_handle?: string;
  };
}

// Post interface
export interface Post extends CosmicObject {
  type: 'posts';
  metadata: {
    content?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author?: Author;
    categories?: Category[];
    published_date?: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Type guards
export function isPost(obj: CosmicObject): obj is Post {
  return obj.type === 'posts';
}

export function isAuthor(obj: CosmicObject): obj is Author {
  return obj.type === 'authors';
}

export function isCategory(obj: CosmicObject): obj is Category {
  return obj.type === 'categories';
}