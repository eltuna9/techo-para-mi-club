import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { CallToAction, ContainerWithBackground, Footer } from '../../components'
import Menu from '../../components/Menu'
import {
  postQuery,
  postSlugsQuery,
  getClient,
  urlFor,
  usePreviewSubscription,
  overlayDrafts,
  PortableText,
  serializers,
} from '../../lib'
import { Post } from '../../models'
import { formatDateToString } from '../../utils/stringUtils'

interface ArticleProps {
  data: { post: Post; morePosts: Post[] }
  preview: boolean
}

export default function Article(props: ArticleProps) {
  const router = useRouter()
  const { data, preview } = props

  const slug = data?.post?.slug
  const {
    data: { post, morePosts },
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && !!slug,
  })

  console.log('post', post)
  console.log('morePosts', morePosts)

  return (
    <div>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <article>
            <Head>
              <title>{post.title}</title>
              {post.mainImage && (
                <meta
                  key="ogImage"
                  property="og:image"
                  content={
                    urlFor(post.mainImage)
                      .width(1200)
                      .height(627)
                      .fit('crop')
                      .url() ?? undefined
                  }
                />
              )}
            </Head>
          </article>
        </>
      )}
      <ContainerWithBackground
        backgroundImageSrc={
          urlFor(post.mainImage).width(1200).url() ?? undefined
        }
        className="w-full h-5xl flex flex-wrap relative"
      >
        <Menu className="absolute top-0 md:top-12 z-10 transform -translate-x-1/2 left-1/2" />
        <div className="self-end text-center w-full">
          <h1 className="text-8xl text-gray-100 font-extrabold mb-3 text-shadow-md">
            {post.title}
          </h1>
          <h2 className="text-3xl font-bold text-tertiary mb-6">
            {formatDateToString(new Date(post.publishedAt))}
            {post.author && <> - {post.author.name}</>}
          </h2>
        </div>
      </ContainerWithBackground>
      <main className="w-full xl:container md:w-11/12 mx-auto p-12">
        <PortableText blocks={post.body} serializers={serializers} />
      </main>
      <CallToAction backgroundColor="secondary" />
      <Footer />
    </div>
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
