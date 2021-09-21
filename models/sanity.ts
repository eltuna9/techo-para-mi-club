/** Custom Types for sanity */

export interface Post {
  _id: string
  title: TranslatedField<string>
  excerpt: TranslatedField<string>
  mainImage: any
  publishedAt: Date
  author: Author
  body: TranslatedField<any>
  slug: { current: string }
}

export interface Author {
  name: string
  image: any
  bio: any
}

interface TranslatedField<T> {
  es: T
  en: T
}
