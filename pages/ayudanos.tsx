import Head from 'next/head'
import * as React from 'react'
import {
  AppHeader,
  Footer,
  HelpUsAccountSection,
  HelpUsLandingSection,
  HelpUsShareSection,
} from '../components'

export default function Ayudanos() {
  return (
    <>
      <Head>
        <script
          src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
          data-preference-id="791608107-4807c318-6ab4-454c-8db4-10eb868f6b6d"
          data-source="button"
        ></script>
      </Head>
      <AppHeader
        title="Un techo para mi club - Ayudanos"
        description="Ayudanos a cumplir este sueño, ayudanos con difusión o con tu donación. Todo suma!"
      />
      <HelpUsLandingSection />
      <HelpUsAccountSection />
      <HelpUsShareSection />

      <Footer />
    </>
  )
}
