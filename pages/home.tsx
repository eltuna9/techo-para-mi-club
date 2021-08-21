import React from 'react'
import {
  CallToAction,
  DonationsCounter,
  Footer,
  HomeLandingSection,
} from '../components'

export default function home() {
  return (
    <>
      <HomeLandingSection />
      <DonationsCounter
        amount="115.000"
        className="transform lg:-translate-y-1/2 lg:top-1/2 lg:w-full"
      />
      <CallToAction backgroundColor="secondary" />
      <Footer />
    </>
  )
}
