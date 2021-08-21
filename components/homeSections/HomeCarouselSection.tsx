import * as React from 'react'
import { Carousel } from '../Carousel'
import { LogoCampaingSquare } from '../svg'
import playersInBench from '../../public/playersInBench.jpg'
import teamWithCoach from '../../public/teamWithCoach.jpg'
import aerealView from '../../public/aerealView.jpg'

export function HomeCarouselSection() {
  return (
    <div className="w-full pt-12 md:pt-16 lg:pt-32 pb-12 md:pb-16 lg:pb-48 bg-gray-300">
      <div className="container w-11/12 mx-auto flex flex-wrap">
        <div className="w-full lg:w-2/6 flex items-center justify-center">
          <LogoCampaingSquare className="w-2/6 mb-8 lg:mb-0 md:w-3/12 lg:3/6" />
        </div>
        <div className="w-full lg:w-4/6 flex items-center justify-center">
          <Carousel
            className="w-full"
            images={[aerealView, playersInBench, teamWithCoach]}
            slideDurationInSeconds={3}
            autoplay
            infinite
            showDots
          />
        </div>
      </div>
    </div>
  )
}
