/** Custom Types for sanity */

export interface Post {
  _id: string
  title: string
  excerpt: string
  mainImage: any
  publishedAt: Date
  body: any
  slug: { current: string }
}

export interface Author {
  name: string
  image: any
  bio: any
}
