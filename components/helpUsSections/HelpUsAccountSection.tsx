import useTranslation from 'next-translate/useTranslation'
import * as React from 'react'

export function HelpUsAccountSection() {
  const { t } = useTranslation()
  return (
    <div className="w-full bg-white" id="account">
      <div className="w-11/12 lg:container p-4 pb-12 pt-12 mx-auto md:p-16 lg:p-32">
        <h1 className="text-secondary text-lg md:text-5xl text-center mb-4 md:mb-8 font-bold">
          {t('helpUs:accountDonationTitle')}
        </h1>
        <div className="flex justify-center">
          <p className="text-primary text-sm md:text-2xl md:leading-10">
            <strong> {t('helpUs:bankAccount')} </strong> <br />
            <strong>{t('helpUs:accountHolder')} </strong> Club Deportivo Gral
            Paz A C <br />
            <strong>{t('helpUs:taxId')}</strong> 30-70884774-3 <br />
            <strong>
              {t('helpUs:accountNumber')}
            </strong> 1910085855008502284300 <br />
            <strong>Alias:</strong> untecho.paramiclub
          </p>
        </div>
      </div>
    </div>
  )
}
