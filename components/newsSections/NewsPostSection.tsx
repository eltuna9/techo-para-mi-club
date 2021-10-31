import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import * as React from 'react'
import { ContainerWithBackground } from '..'
import { urlFor } from '../../lib'
import { Post } from '../../models'
import { formatDateToString } from '../../utils/stringUtils'

interface PostSectionProps {
  posts: Post[]
}

export function NewsPostSection(props: PostSectionProps) {
  const { posts } = props
  const { t, lang } = useTranslation()
  return (
    <div className="w-full md:-mt-20 relative">
      <div className="bg-primary xl:container md:w-11/12 md:rounded-5xl mx-auto xl:-mt-60 md:p-16 p-8">
        <h3 className="text-tertiary text-md text-center font-bold mt-24 md:mt-0">
          {t('common:campaignName').toUpperCase()}
        </h3>
        <h1 className="text-white text-2xl md:text-5xl font-extrabold text-center">
          {t('news:pageHeadline')}
        </h1>
        <div className="flex justify-around flex-wrap pt-12">
          {posts &&
            posts.map((post: Post) => {
              return (
                <Link
                  href={`noticias/${post.slug.current}`}
                  key={post.slug.current}
                >
                  <article className="bg-white text-primary w-full lg:w-5/12 rounded-xl mb-12 cursor-pointer">
                    <ContainerWithBackground
                      backgroundImageSrc={
                        urlFor(post.mainImage).width(600).url() ?? undefined
                      }
                      className="w-full rounded-t-xl h-72"
                    />
                    <div className="p-6">
                      <h3 className="text-tertiary font-bold">
                        {formatDateToString(new Date(post.publishedAt))}
                      </h3>
                      <h3 className="text-lg font-bold text-2xl">
                        {post.title[lang as 'es' | 'en']}
                      </h3>
                      <p className="mt-3">
                        {post.excerpt[lang as 'es' | 'en']}
                      </p>
                    </div>
                  </article>
                </Link>
              )
            })}
        </div>
      </div>
    </div>
  )
}
