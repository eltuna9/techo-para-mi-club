import * as React from 'react'
import { Footer } from '../components'
import {
  ThanksDonorsSection,
  ThanksLandingSection,
} from '../components/thanksSections'

export default function Gracias() {
  return (
    <>
      <ThanksLandingSection />
      <ThanksDonorsSection />
      <Footer />
    </>
  )
}
