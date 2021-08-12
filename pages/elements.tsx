// This page is just to showcase the different componets we are creating, we'll delete it once we are ready to go to production.
import * as React from 'react'
import { DonationsCounter } from '../components/donationsCounter'

export default function ComponentsShowcase() {
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-2xl">Donations Counter</h2>
      <DonationsCounter amount="10.080.047" />
    </div>
  )
}
