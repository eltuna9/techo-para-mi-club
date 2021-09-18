import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
import React, { Fragment, useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { pageview } from '../utils/analytics'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
