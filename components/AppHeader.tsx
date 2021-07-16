import Head from 'next/head'

export function AppHeader() {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link
        href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,400;1,700&display=swap"
        rel="preload"
      ></link>
      <meta name="keywords" content="Solidaridad, basketball, basquetbol" />
      <meta
        name="description"
        content="Ayudemos a este club de barrio a cumplir su sueño. Juntos podemos lograrlo!"
      />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <title>Un techo para mi club - Colecta solidaria</title>
    </Head>
  )
}
