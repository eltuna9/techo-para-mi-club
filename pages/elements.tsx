// This page is just to showcase the different componets we are creating, we'll delete it once we are ready to go to production.
import * as React from 'react'
import { DonationsCounter } from '../components/donationsCounter'
import { Footer } from '../components/Footer'
import bannerHome from '../public/bannerHome.jpg'

import Menu from '../components/Menu'
import { ContainerWithBackground } from '../components/ContainerWithBackground'

export default function ComponentsShowcase() {
  return (
    <>
      <div className="container mx-auto my-6">
        <h2 className="text-center text-2xl">Donations Counter</h2>
        <DonationsCounter amount="10.080.047" />
      </div>
      <div className=" w-full mx-auto py-6 bg-blue-400">
        <h2 className="text-center text-2xl">Responsive Menu</h2>
        <Menu />
      </div>
      <h2 className="text-center text-2xl pt-48">Footer</h2>
      <Footer />

      <h2 className="text-center text-2xl pt-48">Container with background</h2>
      <ContainerWithBackground
        backgroundImage={bannerHome}
        className="w-full lg:w-7/12 h-3/6"
      >
        <h1 className="text-8xl text-white text-center p-48">
          ANY CONTENT HERE!
        </h1>
      </ContainerWithBackground>
    </>
  )
}
