import * as React from 'react'
import bannerHome from '../../public/aerealView.jpg'
import { CaretSquareButton } from '../CaretSquareButton'
import { ContainerWithBackground } from '../ContainerWithBackground'
import Menu from '../Menu'

export function HelpUsLandingSection() {
  const caretClickHanlder = () => {
    const element = document.getElementById('account') as HTMLElement
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'end',
    })
  }
  return (
    <div className="w-screen h-screen relative flex">
      <Menu className="absolute top-0 md:top-12 z-10 transform -translate-x-1/2 left-1/2" />
      <ContainerWithBackground
        backgroundImage={bannerHome}
        className="w-full h-full flex justify-center items-end"
      >
        <div className="pt-8 pb-4 bg-gradient-to-t from-black ">
          <h1 className="text-white text-4xl text-center font-bold">
            TODO APORTE NOS ACERCA A CUMPLIR ESTE SUEÑO
          </h1>
          <CaretSquareButton
            onClick={caretClickHanlder}
            caretDirection="down"
            className="mx-auto mt-6"
          />
        </div>
      </ContainerWithBackground>
    </div>
  )
}
