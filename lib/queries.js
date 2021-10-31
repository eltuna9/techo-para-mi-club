const postFields = `
_id,
name,
body,
title,
publishedAt,
excerpt,
mainImage,
"slug": slug.current,
"author": author->{name, image},
`
export const postQuery = `
{
"post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) | [0] {
  ${postFields}
},
"morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) | [0...2] {
  ${postFields}
}
}`

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
${postFields}
}
`
