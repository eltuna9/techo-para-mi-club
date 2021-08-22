import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
          <meta
            property="og:url"
            content="https://www.untechoparamiclub.com.ar/"
          />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Un techo para mi club" />
          <meta
            property="og:description"
            content="Ayudemos a este club de barrio a cumplir el sueño del techo!"
          />
          <meta property="og:image" content="/techo-og.ong" />
          <title>Un techo para mi club - Colecta solidaria</title>
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
          {/* Global Site Tag (gtag.js) - Google Analytics */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
