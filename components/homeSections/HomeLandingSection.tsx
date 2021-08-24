import * as React from 'react'
import mainImage from '../../public/mainImage.jpg'
import { ContainerWithBackground } from '../ContainerWithBackground'
import Menu from '../Menu'
import { LogoClub } from '../svg/logoClub'

export function HomeLandingSection() {
  return (
    <div className="w-full h-screen relative flex">
      <Menu className="absolute top-0 md:top-12 z-10 transform -translate-x-1/2 left-1/2" />
      <ContainerWithBackground
        backgroundImage={mainImage}
        className="hidden lg:block w-full lg:w-7/12 h-full"
      />

      <div className="w-full lg:w-7/12 h-full flex justify-center items-center bg-primary p-5 ">
        <div className="text-center md:max-w-lg">
          <div className="w-3/6 md:w-2/6 mx-auto">
            <LogoClub className="w-full mb-8" />
          </div>
          <h4 className="text-tertiary text-xl mb-6 font-semibold">
            UN TECHO PARA MI CLUB
          </h4>
          <p className="text-2xl md:text-4xl text-white">
            Ayudanos a cumplir el sueño de tener un techo en nuestro club y
            poder cambiar la realidad de un barrio
          </p>
        </div>
      </div>
    </div>
  )
}
