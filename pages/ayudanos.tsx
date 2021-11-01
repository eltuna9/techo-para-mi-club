import * as React from 'react'
import {
  AppHeader,
  Footer,
  HelpUsAccountSection,
  HelpUsDonateText,
  HelpUsLandingSection,
  HelpUsPaymentSection,
  HelpUsShareSection,
} from '../components'

export default function Ayudanos() {
  return (
    <>
      <AppHeader
        title="Un techo para mi club - Ayudanos"
        description="Ayudanos a cumplir este sueño, ayudanos con difusión o con tu donación. Todo suma!"
      >
        <script
          src="https://www.mercadopago.com/v2/security.js"
          /* @ts-ignore */
          view="ayudanos"
          async
        ></script>
        <script
          async
          src="https://sdk.mercadopago.com/js/v2"
          /* @ts-ignore */
          output="MP_DEVICE_SESSION_ID"
        ></script>
      </AppHeader>
      <HelpUsLandingSection />
      <HelpUsDonateText />
      <HelpUsAccountSection />
      <HelpUsPaymentSection />
      <HelpUsShareSection />

      <Footer />
    </>
  )
}
