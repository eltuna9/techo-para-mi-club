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
    <div className={`w-full pt-32 pb-32 ${className || ''} `}>
      <div
        className={`container flex flex-wrap rounded-4xl p-32 mx-auto bg-${backgroundColor}`}
      >
        <div className="w-full md:w-4/6 flex justify-center items-center">
          <h3
            className={`text-xl md:text-5xl font-bold text-${
              backgroundColor === 'secondary' ? 'white' : 'secondary'
            }`}
          >
            Gracias por haber llegado hasta acá, ayudanos con tu donación o con
            difusión para que podamos lograrlo
          </h3>
        </div>
        <div className="flex w-full md:w-2/6 justify-center items-center">
          <HelpUsLink className="lg:text-4xl xl:text-4xl lg:px-12 xl:px-12" />
        </div>
      </div>
    </div>
  )
}
