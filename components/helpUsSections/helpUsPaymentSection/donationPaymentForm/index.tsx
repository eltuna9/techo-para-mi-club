import useTranslation from 'next-translate/useTranslation'
import React, { useRef, useState } from 'react'
import Cards, { Focused } from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { Controller, useForm } from 'react-hook-form'
import { TextInput } from '../../..'
import { DonationFormFields, submitMPCardForm } from './paymentUtils'

const EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
const CARD_REGEX = /(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/g

export function DonationPaymentForm() {
  const { t } = useTranslation()
  const { watch, handleSubmit, formState, getValues, control } =
    useForm<DonationFormFields>({
      defaultValues: {
        donorName: '',
        amount: '',
        creditCardNumber: '',
        email: '',
        expiryYear: '',
        expiryMonth: '',
        cvc: '',
      },
    })

  const { errors } = formState
  const [focussed, setFocussed] = useState<Focused>()
  const form = useRef<HTMLFormElement>(null)

  const onSubmit = () => {
    submitMPCardForm(t, getValues('amount'), formState)
  }

  return (
    <form className="space-y-4 text-gray-700" id="mp-checkout" ref={form}>
      <div className="flex">
        <Cards
          cvc={getValues('cvc')}
          expiry={`${getValues('expiryMonth') ?? ''}/${
            getValues('expiryYear') ?? ''
          }`}
          focused={focussed}
          name={getValues('donorName')}
          number={getValues('creditCardNumber')}
        />
      </div>
      <div className="flex flex-wrap">
        <Controller
          name="amount"
          control={control}
          defaultValue=""
          rules={{
            min: 10,
            required: true,
          }}
          render={({ field }) => (
            <TextInput
              label={t('helpUs:paymentAmount')}
              placeholder="5000"
              type="number"
              id="amount"
              errorText={errors.amount ? t('helpUs:invalidAmount') : undefined}
              {...field}
              className="md:w-1/2 px-2"
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            pattern: EMAIL_REGEX,
            required: true,
          }}
          render={({ field }) => (
            <TextInput
              label={t('helpUs:paymentEmail')}
              placeholder="martinluterking@heaven.com"
              type="email"
              id="email"
              errorText={errors.email ? t('helpUs:invalidEmail') : undefined}
              {...field}
              className="md:w-1/2 px-2"
            />
          )}
        />
      </div>
      <div className="flex flex-wrap">
        <Controller
          name="creditCardNumber"
          control={control}
          defaultValue=""
          rules={{ pattern: CARD_REGEX, required: true }}
          render={({ field }) => (
            <TextInput
              label={t('helpUs:paymentCard')}
              placeholder="1234 5678 9101 1121"
              id="creditCardNumber"
              onFocus={() => setFocussed('number')}
              errorText={
                errors.creditCardNumber ? t('helpUs:invalidCard') : undefined
              }
              {...field}
              className="md:w-1/2 px-2"
            />
          )}
        />
        <Controller
          name="donorName"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              label={t('helpUs:paymentName')}
              placeholder="Martin Luter King"
              id="donorName"
              onFocus={() => setFocussed('name')}
              errorText={
                errors.donorName ? t('helpUs:requiredField') : undefined
              }
              {...field}
              className="md:w-1/2 px-2"
            />
          )}
        />
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-2 flex flex-wrap justify-between">
          <Controller
            name="expiryMonth"
            control={control}
            defaultValue=""
            rules={{ pattern: /^\d{2}$/g, required: true }}
            render={({ field }) => (
              <TextInput
                label={t('helpUs:paymentMonth')}
                placeholder="MM"
                id="expiryMonth"
                onFocus={() => setFocussed('expiry')}
                errorText={
                  errors.expiryMonth ? t('helpUs:invalidMonth') : undefined
                }
                {...field}
                className="md:w-1/2 pr-2"
              />
            )}
          />
          <Controller
            name="expiryYear"
            control={control}
            defaultValue=""
            rules={{ pattern: /^\d{2}$/g, required: true }}
            render={({ field }) => (
              <TextInput
                label={t('helpUs:paymentYear')}
                placeholder="YY"
                onFocus={() => setFocussed('expiry')}
                id="expiryYear"
                errorText={
                  errors.expiryYear ? t('helpUs:invalidYear') : undefined
                }
                {...field}
                className="md:w-1/2 pl-2"
              />
            )}
          />
        </div>
        <Controller
          name="cvc"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextInput
              label={t('helpUs:paymentSecurityCode')}
              placeholder=""
              onFocus={() => setFocussed('cvc')}
              errorText={errors.cvc ? t('helpUs:invalidCVC') : undefined}
              id="cvc"
              {...field}
              className="md:w-1/2 px-2"
            />
          )}
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
        value="Otro"
      ></select>
      <input
        type="text"
        name="identificationNumber"
        value={Math.floor(Math.random() * (9000000 - 1000000 + 1) + 1000000)}
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
      <button
        onClick={handleSubmit(onSubmit)}
        className="text-primary bg-tertiary font-semibold rounded hover:bg-tertiary-light transition duration-300 cursor-pointer p-6"
      >
        {t('helpUs:paymentDonateButton')}
      </button>
    </form>
  )
}
