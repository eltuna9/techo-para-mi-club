import { useRouter } from 'next/router'
import React from 'react'
import {
  AppHeader,
  CallToAction,
  ContainerWithBackground,
  Footer,
} from '../../components'
import Menu from '../../components/Menu'
import { PostContent } from '../../components/newsSections'
import {
  getClient,
  overlayDrafts,
  postQuery,
  postSlugsQuery,
  urlFor,
} from '../../lib'
import { Post } from '../../models'
import { formatDateToString } from '../../utils/stringUtils'

interface ArticleProps {
  data: { post: Post; morePosts: Post[] }
  preview: boolean
}

export default function Article(props: ArticleProps) {
  const router = useRouter()
  const { data } = props
  const { post } = data ?? {}

  if (router.isFallback) return <h1>Loading…</h1>

  return (
    <>
      <AppHeader
        title={`Un techo para mi club - ${post.title}`}
        imageUrl={
          urlFor(post.mainImage).width(1200).height(627).fit('crop').url() ??
          undefined
        }
        description={post.excerpt}
      />
      <div className="w-full bg-primary pt-24 lg:pt-44">
        <Menu className="absolute top-0 lg:top-12 z-10 transform -translate-x-1/2 left-1/2" />
        <article className="xl:container md:w-10/12 mx-auto text-center">
          <h2 className="text-lg md:text-2xl font-bold text-tertiary mb-6 text-shadow-md">
            {formatDateToString(new Date(post.publishedAt))}
            {post.author && <> - {post.author.name}</>}
          </h2>
          <h1 className="text-3xl md:text-5xl xl:text-6xl text-gray-100 font-extrabold mb-3 text-shadow-md">
            {post.title}
          </h1>

          <PostContent post={post} />
        </article>
      </div>
      <CallToAction backgroundColor="secondary" />
      <Footer />
    </>
  )
}

export async function getStaticProps({
  params,
  preview = false,
}: {
  params: { slug: string }
  preview: boolean
}) {
  const { post, morePosts }: { post: Post; morePosts: Post[] } =
    await getClient(preview).fetch(postQuery, {
      slug: params.slug,
    })

  return {
    props: {
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
      },
      preview,
    },
  }
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(postSlugsQuery)
  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  }
}
