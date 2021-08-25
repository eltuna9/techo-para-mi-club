import * as React from 'react'
import { extractNumberFromString } from '../utils/stringUtils'

interface DonationsCounterProps {
  className?: string
  /** How much have we raised? */
  amount: string
}
const goalAmount = 20000000
export function DonationsCounter(props: DonationsCounterProps) {
  const { className, amount } = props
  const amountTooBig = amount.length > 8
  const percentage = (
    (parseInt(extractNumberFromString(amount), 10) * 100) /
    goalAmount
  ).toFixed(1)

  return (
    <div className={`relative w-screen ${className || ''}`}>
      <Stripes />
      <div className="w-full lg:w-10/12 xl:container mx-auto relative z-50">
        <div
          className={`w-full mx-auto p-4 md:px-10 md:py-8 lg:border-8 lg:rounded-3xl flex justify-center items-center border-t-8 border-b-8 border-white bg-primary text-white shadow-lg`}
        >
          <div className="flex justify-between items-center w-full flex-wrap">
            <div
              className={`flex flex-col w-full ${
                amountTooBig ? 'lg:w-7/12' : 'lg:w-8/12'
              } text-center`}
            >
              <span className="text-secondary mb-4 text-2xl lg:text-2xl xl:text-3xl font-semibold">
                Este sueño lleva recaudado
              </span>
              <span
                className={` ${
                  amountTooBig ? 'md:text-7xl' : 'md:text-8xl'
                } text-6xl  font-bold`}
              >
                ${amount}
              </span>
            </div>
            <div
              className={`flex pl-4 flex-col w-full ${
                amountTooBig ? 'lg:w-5/12' : 'lg:w-4/12'
              } text-center `}
            >
              <span className="text-tertiary pt-4 text-6xl md:text-8xl font-bold">
                {percentage}%
              </span>
              <span className="text-secondary mb-4 text-2xl lg:text-2xl xl:text-3xl font-semibold">
                del objetivo alcanzado
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Stripes() {
  return (
    <div className="absolute transform -translate-y-1/2 top-1/2 w-full z-10">
      <div className="border-t-8 border-primary mb-2" />
      <div className="border-t-8 border-secondary mb-2" />
      <div className="border-t-8 border-primary mb-2" />
    </div>
  )
}
