import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { TextInput } from '../../..'
import { useInitializeMPCardForm } from './paymentUtils'

export function DonationPaymentForm() {
  useInitializeMPCardForm()
  const { t } = useTranslation()
  return (
    <form className="space-y-4 text-gray-700" id="mp-checkout">
      <div className="flex flex-wrap">
        <TextInput
          label={t('helpUs:paymentAmount')}
          placeholder="5000"
          id="amount"
          className="md:w-1/2 px-2"
        />
        <TextInput
          label={t('helpUs:paymentEmail')}
          placeholder="martinluterking@heaven.com"
          id="email"
          className="md:w-1/2 px-2"
        />
      </div>
      <div className="flex flex-wrap">
        <TextInput
          label={t('helpUs:paymentCard')}
          placeholder="1234 5678 9101 1121"
          id="creditCardNumber"
          className="md:w-1/2 px-2"
        />
        <TextInput
          label={t('helpUs:paymentName')}
          placeholder="Martin Luter King"
          id="donorName"
          className="md:w-1/2 px-2"
        />
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-2 flex flex-wrap justify-between">
          <TextInput
            label={t('helpUs:paymentMonth')}
            placeholder="MM"
            id="expiryMonth"
            className="md:w-1/2 pr-2"
          />
          <TextInput
            label={t('helpUs:paymentYear')}
            placeholder="YY"
            id="expiryYear"
            className="md:w-1/2 pl-2"
          />
        </div>
        <TextInput
          label={t('helpUs:paymentSecurityCode')}
          placeholder=""
          id="cvc"
          className="md:w-1/2 px-2"
        />
      </div>
      <select
        name="issuer"
        id="form-checkout__issuer"
        className="hidden"
      ></select>
      <select
        name="identificationType"
        id="form-checkout__identificationType"
        className="hidden"
      ></select>
      <input
        type="text"
        name="identificationNumber"
        id="form-checkout__identificationNumber"
        className="hidden"
      />
      <select
        className="hidden"
        name="installments"
        id="form-checkout__installments"
      ></select>
      <progress value="0" className="progress-bar hidden">
        Cargando...
      </progress>
      <button>{t('helpUs:paymentDonateButton')}</button>
    </form>
  )
}
