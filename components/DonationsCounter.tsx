import useTranslation from 'next-translate/useTranslation'
import * as React from 'react'
import { extractNumberFromString } from '../utils/stringUtils'

interface DonationsCounterProps {
  className?: string
  middleStripYellow?: boolean
}
const goalAmount = 20000000
const raisedAmount = '110.677'

export function DonationsCounter(props: DonationsCounterProps) {
  const { className, middleStripYellow } = props
  const { t, lang } = useTranslation()

  const percentage = (
    (parseInt(extractNumberFromString(raisedAmount), 10) * 100) /
    goalAmount
  ).toFixed(1)

  return (
    <div className={`w-screen ${className || ''}`}>
      <div className="relative w-full">
        <Stripes middleStripYellow={middleStripYellow} />
        <div className="w-full lg:w-10/12 xl:container mx-auto relative z-30">
          <div
            className={`w-full mx-auto p-4 md:p-10 lg:border-8 lg:rounded-3xl flex justify-center items-center border-t-8 border-b-8 border-white bg-primary text-white shadow-lg`}
          >
            <div className="flex justify-between w-full flex-wrap">
              <div className="flex flex-col w-full lg:w-8/12 text-center">
                <span className="text-secondary mb-4 text-2xl lg:text-2xl xl:text-3xl font-semibold">
                  {t('common:raisedAmount')}
                </span>
                <span className="text-5xl md:text-6xl xl:text-8xl font-bold">
                  {`${
                    lang === 'es'
                      ? `$${raisedAmount}`
                      : `ARS ${raisedAmount.replace('.', ',')} `
                  }`}
                </span>
              </div>
              <div className="flex flex-col w-full lg:w-4/12 text-center ">
                <span className="text-tertiary pt-4 text-6xl md:text-7xl font-bold">
                  {percentage}%
                </span>
                <span className="text-secondary mb-4 text-2xl lg:text-2xl xl:text-3xl font-semibold">
                  {t('common:raisedPercentage')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Stripes(props: { middleStripYellow?: boolean }) {
  const { middleStripYellow } = props
  return (
    <div className="absolute transform -translate-y-1/2 top-1/2 w-full z-10">
      <div className="border-t-8 border-primary mb-2" />
      <div
        className={`border-t-8 ${
          middleStripYellow ? 'border-tertiary' : 'border-secondary'
        } mb-2`}
      />
      <div className="border-t-8 border-primary mb-2" />
    </div>
  )
}
