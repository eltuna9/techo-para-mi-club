import * as React from 'react'

interface DonationsCounterProps {
  className?: string
  amount: string
}

export function DonationsCounter(props: DonationsCounterProps) {
  const { className, amount } = props
  return (
    <div
      className={`w-full p-6 md:p-10 lg:border-8 lg:rounded-3xl flex justify-center items-center border-t-8 border-b-8 border-white bg-blue-800 text-white shadow-md ${
        className || ''
      }`}
    >
      <div className="absolute"></div>
      <div className="flex flex-col items-center">
        <span className="text-blue-400 mb-4 text-3xl font-semibold">
          Este sueño lleva recaudado
        </span>
        <span className="text-8xl font-bold">${amount}</span>
      </div>
    </div>
  )
}
