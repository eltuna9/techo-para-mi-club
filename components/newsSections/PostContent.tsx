import { PortableText, serializers } from '../../lib'
import { Post } from '../../models'

interface PostContentProps {
  post: Post
}

export function PostContent(props: PostContentProps) {
  const { post } = props
  return (
    <main className="px-8 md:px-0 pt-12 pb-24 post-content">
      <PortableText blocks={post.body} serializers={serializers} />
    </main>
  )
}
