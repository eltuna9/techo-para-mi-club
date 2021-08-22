import React from 'react'
import {
  CallToAction,
  DonationsCounter,
  Footer,
  HomeCarouselSection,
  HomeLandingSection,
} from '../components'

export default function home() {
  return (
    <>
      <HomeLandingSection />
      <HomeCarouselSection />
      <DonationsCounter
        amount="115.000"
        className="transform lg:-translate-y-1/2 lg:top-1/2 lg:w-full"
      />
      <CallToAction backgroundColor="white" />
      <Footer />
    </>
  )
}
