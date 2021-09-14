import { PortableText, serializers } from '../../lib'
import { Post } from '../../models'

interface PostContentProps {
  post: Post
}

export function PostContent(props: PostContentProps) {
  const { post } = props
  return (
    <main className="xl:container w-10/12 mx-auto py-12 post-content">
      <PortableText blocks={post.body} serializers={serializers} />
    </main>
  )
}
