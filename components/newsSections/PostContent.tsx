import useTranslation from 'next-translate/useTranslation'
import { PortableText, serializers } from '../../lib'
import { Post } from '../../models'

interface PostContentProps {
  post: Post
}

export function PostContent(props: PostContentProps) {
  const { post } = props
  const { lang } = useTranslation()

  return (
    <main className="lg:w-10/12 mx-auto px-8 md:px-0 pt-12 pb-24 post-content">
      <PortableText
        blocks={post.body[lang as 'es' | 'en']}
        serializers={serializers}
      />
    </main>
  )
}
