import Head from 'next/head'

export function AppHeader() {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      <meta
        name="keywords"
        content="Solidaridad, basketball, basquetbol, Salta, General Paz"
      />
      <meta
        name="description"
        content="Ayudemos a este club de barrio a cumplir su sueño. Juntos podemos lograrlo!"
      />
      <meta property="og:url" content="https://www.untechoparamiclub.com.ar/" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Un techo para mi club" />
      <meta
        property="og:description"
        content="Ayudemos a este club de barrio a cumplir su sueño. Juntos podemos lograrlo!"
      />
      <meta property="og:image" content="/techo-og.png" />
      <link rel="icon" href="/favicons/favicon.png" />
      <title>Un techo para mi club - Colecta solidaria</title>
    </Head>
  )
}
