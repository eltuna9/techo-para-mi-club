import Head from 'next/head'

export function AppHeader() {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,400;1,700&display=swap"
        rel="preload"
      ></link>
      <meta name="keywords" content="Solidaridad, basketball, basquetbol" />
      <meta
        name="description"
        content="Ayudemos a este club de barrio a cumplir su sueño. Juntos podemos lograrlo!"
      />
      <title>Un techo para mi club - Colecta solidaria</title>
    </Head>
  )
}
