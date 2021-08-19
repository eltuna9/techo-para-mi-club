import React from 'react'
import { CallToAction, Footer, HomeLandingSection } from '../components'

export default function home() {
  return (
    <>
      <HomeLandingSection />
      <CallToAction backgroundColor="secondary" />
      <Footer />
    </>
  )
}
