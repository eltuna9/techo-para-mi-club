import * as React from 'react'
import playersInBench from '../../public/playersInBench.jpg'

import { ContainerWithBackground } from '../ContainerWithBackground'
import Menu from '../Menu'

export function NewsLandingSection() {
  return (
    <div className="w-full md:h-screen-2/3 relative flex">
      <Menu className="absolute top-0 lg:top-12 z-10 transform -translate-x-1/2 left-1/2" />
      <ContainerWithBackground
        backgroundImage={playersInBench}
        className="hidden w-full h-full md:flex justify-center items-end"
      />
    </div>
  )
}
