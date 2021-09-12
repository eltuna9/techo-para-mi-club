import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  postQuery,
  postSlugsQuery,
  getClient,
  urlFor,
  usePreviewSubscription,
  overlayDrafts,
} from '../lib'

export default function Article({ data = {}, preview = false }) {
  const router = useRouter()

  const slug = data?.post?.slug
  const {
    data: { post, morePosts },
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  })

  return (
    <div>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <article>
            <Head>
              <title>{post.title}</title>
              {post.coverImage && (
                <meta
                  key="ogImage"
                  property="og:image"
                  content={
                    urlFor(post.coverImage)
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
    </div>
  )
}

export async function getStaticProps({
  params,
  preview = false,
}: {
  params: any
  preview: boolean
}) {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  })

  return {
    props: {
      preview,
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
      },
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
