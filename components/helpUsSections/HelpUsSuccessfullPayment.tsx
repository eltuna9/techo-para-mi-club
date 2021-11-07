import useTranslation from 'next-translate/useTranslation'
import * as React from 'react'
import Menu from '../Menu'

export function HelpUsSuccessDonationSection() {
  const { t } = useTranslation()
  return (
    <div className="w-full text-center bg-primary">
      <Menu className="absolute top-0 lg:top-12 z-10 transform -translate-x-1/2 left-1/2" />

      <div className="w-15/16 mx-auto lg:container p-6 pb-16 pt-32 md:p-16 lg:p-32 lg:py-20 md:pt-36 lg:pt-52 ">
        <h1 className="text-secondary text-lg md:text-4xl text-center mb-4 md:mb-6 font-bold">
          {t('helpUs:paymentThanksTitle')}
        </h1>

        <p className="text-sm md:text-xl mb-10 text-white">
          {t('helpUs:paymentSuccessDescription')}
        </p>
        <div className="w-4/5 md:w-3/5 mx-auto text-center">
          <img
            src="https://i.giphy.com/media/229vN1LszOgKayj87M/giphy.webp"
            className="w-10/12 mx-auto"
            alt={t('helpUs:paymentThanksTitle')}
          />
        </div>
      </div>
    </div>
  )
}
