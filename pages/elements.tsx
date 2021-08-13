// This page is just to showcase the different componets we are creating, we'll delete it once we are ready to go to production.
import * as React from 'react'
import { DonationsCounter } from '../components/donationsCounter'
import Menu from '../components/Menu'

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
    </>
  )
}
