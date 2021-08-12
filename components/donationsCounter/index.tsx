import * as React from 'react'
import { extractNumberFromString } from '../../utils/stringUtils'

interface DonationsCounterProps {
  className?: string
  amount: string
}
const goalAmount = 20000000
export function DonationsCounter(props: DonationsCounterProps) {
  const { className, amount } = props
  const percentage = (
    (parseInt(extractNumberFromString(amount), 10) / goalAmount) *
    100
  ).toFixed(2)

  return (
    <div
      className={`w-full p-6 md:p-10 lg:border-8 lg:rounded-3xl flex justify-center items-center border-t-8 border-b-8 border-white bg-blue-800 text-white shadow-md ${
        className || ''
      }`}
    >
      <div className="absolute"></div>
      <div className="flex flex-col items-center">
        <div className="flex space-between">
          <span className="text-blue-400 mb-4 text-3xl font-semibold">
            Este sueño lleva recaudado
            <span className="text-8xl font-bold">${amount}</span>
          </span>
        </div>
        <div className="flex space-between">
          <span className="text-8xl font-bold">{percentage}%</span>
          <span className="text-blue-400 mb-4 text-3xl font-semibold">
            del objetivo alcanzado
          </span>
        </div>
      </div>
    </div>
  )
}
