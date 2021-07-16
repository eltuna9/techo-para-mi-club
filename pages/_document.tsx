import Document, { Html, Head, Main, NextScript } from 'next/document'
import { AppHeader } from '../components/AppHeader'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <AppHeader />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
