import * as React from 'react'
import { AppHeader, Footer } from '../components'
import {
  ThanksDonorsSection,
  ThanksLandingSection,
} from '../components/thanksSections'

export default function Gracias() {
  return (
    <>
      <AppHeader
        title="Un techo para mi club - Gracias"
        description="Agradecemos a todas estas personas que nos están ayudando a cumplir nuestro sueño"
      />
      <ThanksLandingSection />
      <ThanksDonorsSection />
      <Footer />
    </>
  )
}
