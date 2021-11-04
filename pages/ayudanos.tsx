import { useRouter } from 'next/router'
import * as React from 'react'
import {
  AppHeader,
  Footer,
  HelpUsAccountSection,
  HelpUsDonateText,
  HelpUsLandingSection,
  HelpUsLinksSection,
  // HelpUsPaymentSection,
  HelpUsShareSection,
  HelpUsSuccessDonationSection,
} from '../components'

export default function Ayudanos() {
  const router = useRouter()
  const { gracias } = router.query
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
      {gracias && (
        <>
          <HelpUsSuccessDonationSection />
          <HelpUsShareSection />
        </>
      )}
      {!gracias && (
        <>
          <HelpUsLandingSection />
          <HelpUsDonateText />
          <HelpUsAccountSection />
          <HelpUsLinksSection />
          {/* <HelpUsPaymentSection /> */}
          <HelpUsShareSection />{' '}
        </>
      )}

      <Footer />
    </>
  )
}
