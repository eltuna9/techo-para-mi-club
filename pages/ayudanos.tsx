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
