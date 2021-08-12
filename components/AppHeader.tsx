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
      <link rel="icon" href="/favicons/favicon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap"
        rel="stylesheet"
      />
      <title>Un techo para mi club - Colecta solidaria</title>
    </Head>
  )
}
