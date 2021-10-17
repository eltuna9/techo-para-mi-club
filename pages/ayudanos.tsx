import * as React from 'react'
import {
  AppHeader,
  Footer,
  HelpUsAccountSection,
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
        <script src="https://sdk.mercadopago.com/js/v2"></script>
      </AppHeader>
      <HelpUsLandingSection />
      <HelpUsAccountSection />
      <HelpUsPaymentSection />
      <HelpUsShareSection />

      <Footer />
    </>
  )
}
