import useTranslation from 'next-translate/useTranslation'
import * as React from 'react'

export function HelpUsDonateText() {
  const { t } = useTranslation()

  return (
    <div className="w-full bg-gray-200" id="donateText">
      <div className="w-11/12 md:w-4/5 mx-auto py-12 md:py-20">
        <p className="text-primary text-sm md:text-2xl lg:text-3xl text-center">
          {t('helpUs:paymentDescription')} <br /> <br />
          {t('helpUs:helpMethods')}
        </p>
      </div>
    </div>
  )
}
