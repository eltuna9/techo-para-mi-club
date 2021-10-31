import Head from 'next/head'

interface AppHeaderProps {
  title?: string
  description?: string
  imageUrl?: string
}

const defaultDescription =
  'Ayudemos a este club de barrio a cumplir su sueño. Juntos podemos lograrlo!'

const defaultTitle = 'Un techo para mi club - Colecta solidaria'
const defaultImgUrl = '/techo-og.png'

export function AppHeader(props: AppHeaderProps) {
  const { title, description, imageUrl } = props
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      <meta
        name="keywords"
        content="Solidaridad, basketball, basquetbol, Salta, General Paz"
      />
      <meta name="description" content={description ?? defaultDescription} />
      <meta property="og:url" content="https://www.untechoparamiclub.com.ar/" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title ?? defaultTitle} />
      <meta
        property="og:description"
        content={description ?? defaultDescription}
      />
      <meta property="og:image" content={imageUrl ?? defaultImgUrl} />
      <link rel="icon" href="/favicons/favicon.png" />
      <title>{title ?? defaultTitle}</title>
    </Head>
  )
}
