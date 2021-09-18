import React from 'react'
import {
  AppHeader,
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
      <AppHeader />
      <HomeLandingSection />
      <HomeCarouselSection />
      <DonationsCounter className="transform lg:-translate-y-1/2 lg:top-1/2 lg:w-full" />
      <HomeJumbotormCardSection />
      <CallToAction backgroundColor="secondary" />
      <Footer />
    </>
  )
}
