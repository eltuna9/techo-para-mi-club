import * as React from 'react'
import { HelpUsLink } from './HelpUsLink'

interface CallToActionProps {
  /** Posible colors ot be applied to the section background*/
  backgroundColor: 'white' | 'secondary'
  className?: string
}

export function CallToAction(props: CallToActionProps) {
  const { backgroundColor, className } = props
  return (
    <div
      className={`w-full pt-12 pb-12 md:pt-24 md:pb-24 lg:pb-32 ${
        className || ''
      } `}
    >
      <div
        className={`w-10/12 xl:container flex flex-wrap rounded-3xl xl:rounded-6xl lg:rounded-5xl p-12 lg:p-24 xl:p-28 mx-auto ${
          backgroundColor === 'white' ? 'bg-white' : 'bg-secondary'
        }`}
      >
        <div className="w-full md:w-4/6 flex justify-center items-center">
          <h3
            className={`text-xl text-center md:text-left lg:text-3xl xl:text-5xl font-bold ${
              backgroundColor === 'secondary' ? 'text-white' : 'text-primary'
            }`}
          >
            Gracias por haber llegado hasta acá, ayudanos con tu donación o con
            difusión para que podamos lograrlo
          </h3>
        </div>
        <div className="flex w-full md:w-2/6 justify-center items-center pt-8 md:pt-0">
          <HelpUsLink className="lg:text-4xl xl:text-4xl lg:px-12 xl:px-12" />
        </div>
      </div>
    </div>
  )
}
