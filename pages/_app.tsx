import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { Fragment, useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import { pageview } from '../utils/analytics'
import { AppHeader } from '../components/AppHeader'

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
      <AppHeader />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
