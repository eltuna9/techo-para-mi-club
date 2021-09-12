import * as React from 'react'
import { urlFor } from '../../lib'
import { Post } from '../../models'

interface PostSectionProps {
  posts: Post[]
}

export function NewsPostSection(props: PostSectionProps) {
  const { posts } = props
  return (
    <div className="w-full md:-mt-36 relative">
      <div className="bg-primary xl:container md:w-11/12 md:rounded-5xl mx-auto xl:-mt-60 md:p-12 p-3">
        <h3 className="text-tertiary text-md text-center font-bold">
          UN TECHO PARA MI CLUB
        </h3>
        <h1 className="text-white text-2xl md:text-5xl font-extrabold text-center">
          Ultimas noticias
        </h1>
        <div className="flex justify-around flex-wrap pt-12">
          {posts &&
            posts.map((post: Post) => {
              const postDate = new Date(post.publishedAt)
              const formattedDate = `${
                postDate.getDay() + 1
              }/${postDate.getMonth()}/${postDate.getFullYear()}`
              return (
                <article className="bg-white text-primary w-full md:w-5/12 rounded-xl mb-12">
                  <div
                    style={{
                      backgroundImage: `url(${urlFor(post.mainImage)
                        .width(600)
                        .url()})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                    className="w-full rounded-t-xl h-40"
                  />
                  <div className="p-6">
                    <h3 className="text-tertiary font-bold">{formattedDate}</h3>
                    <h3 className="text-lg font-bold text-2xl">
                      {' '}
                      {post.title}{' '}
                    </h3>
                    <p className="mt-3">{post.excerpt}</p>
                  </div>
                </article>
              )
            })}
        </div>
      </div>
    </div>
  )
}
