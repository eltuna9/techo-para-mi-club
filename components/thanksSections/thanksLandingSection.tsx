import * as React from 'react'
import { DonationsCounter } from '../DonationsCounter'
import Menu from '../Menu'

export function ThanksLandingSection() {
  return (
    <div className="w-full h-screen relative flex flex-wrap bg-secondary pb-12">
      <Menu className="absolute top-0 md:top-12 z-10 transform -translate-x-1/2 left-1/2" />
      <div className="w-full text-center self-end md:pt-24">
        <h1 className="text-4xl md:text-8xl text-white font-bold">GRACIAS</h1>
        <p className="text-primary text-xl md:text-3xl font-bold">
          a todas las personas que ya <br /> nos están ayudando
        </p>
      </div>
      <DonationsCounter className="self-end" middleStripYellow />
    </div>
  )
}
