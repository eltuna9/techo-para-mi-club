import { useRouter } from 'next/router'

import { groq } from 'next-sanity'
import { getClient, usePreviewSubscription } from '../lib'
import { Post } from '../models'
import React from 'react'
import { NewsLandingSection, NewsPostSection } from '../components/newsSections'
import { CallToAction, Footer } from '../components'

/** This props are going to get injected when next.js calls `getStaticProps` */
interface NewsPageProps {
  postdata: Post[]
  preview?: boolean
}

export default function News(props: NewsPageProps) {
  const { postdata, preview } = props

  const router = useRouter()

  const { data: posts } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  })

  return (
    <>
      <NewsLandingSection />
      <NewsPostSection posts={posts} />
      <CallToAction backgroundColor="secondary" />
      <Footer />
    </>
  )
}

const query = groq`
*[_type == "post"] | order(_createdAt desc) {
  ..., 
  author->,
  mainImage->,
  categories[]->
}
`

export async function getStaticProps({ preview = false }) {
  const post = await getClient(preview).fetch(query)

  return {
    props: {
      postdata: post,
      preview,
    },
    revalidate: 10,
  }
}
