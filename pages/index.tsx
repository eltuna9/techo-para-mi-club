import React from 'react'
import {
  CallToAction,
  DonationsCounter,
  Footer,
  HomeCarouselSection,
  HomeJumbotormCardSection,
  HomeLandingSection,
} from '../components'

export default function Home() {
  return (
    <>
      <HomeLandingSection />
      <HomeCarouselSection />
      <DonationsCounter
        amount="106.320"
        className="transform lg:-translate-y-1/2 lg:top-1/2 lg:w-full"
      />
      <HomeJumbotormCardSection />
      <CallToAction backgroundColor="secondary" />
      <Footer />
    </>
  )
}
