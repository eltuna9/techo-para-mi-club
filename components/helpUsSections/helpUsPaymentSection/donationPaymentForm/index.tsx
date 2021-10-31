import useTranslation from 'next-translate/useTranslation'
import hash from 'object-hash'
import React, { useEffect, useRef, useState } from 'react'
import Cards, { Focused } from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { Controller, useForm } from 'react-hook-form'
import { MessageBanner, TextInput } from '../../..'
import { PaymentSuccessFull } from './PaymentSuccessFull'
import { DonationFormFields, submitPayment } from './paymentUtils'

const EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
const CARD_REGEX = /(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/g

interface PaymentResponseDetails {
  title: string
  description: string
}

export function DonationPaymentForm() {
  const { t } = useTranslation()
  const { watch, handleSubmit, formState, getValues, control, setFocus } =
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
  const [focussedCardField, setFocussedCardField] = useState<Focused>()
  const [submissionError, setSubmissionError] =
    useState<PaymentResponseDetails | null>(null)
  const [success, setSuccess] = useState<PaymentResponseDetails | null>(null)
  const form = useRef<HTMLFormElement>(null)
  let formHash = useRef(hash(watch()))

  useEffect(() => {
    if (formHash.current !== hash(watch())) setSubmissionError(null)
  }, [hash(watch())])

  const onSubmit = async (data: DonationFormFields) => {
    setSubmissionError(null)
    formHash.current = hash(watch())
    const submitPaymentResponse = await submitPayment(data, t)
    const paymentDescriptor = {
      title: submitPaymentResponse.paymentResultTitle,
      description: submitPaymentResponse.paymentResultDescription,
    }
    if (submitPaymentResponse.status === 'failure') {
      setSubmissionError(paymentDescriptor)
    } else {
      setSubmissionError(null)
      alert(JSON.stringify(paymentDescriptor))
      setSuccess(paymentDescriptor)
    }
  }

  if (success)
    return (
      <PaymentSuccessFull
        paymentResultTitle={success.title}
        paymentResultDescription={success.description}
      />
    )

  return (
    <form
      className="space-y-4 text-gray-700 w-11/12 xl:w-3/5 mx-auto"
      id="mp-checkout"
      ref={form}
    >
      <div className="flex pb-5">
        <Cards
          cvc={watch('cvc')}
          expiry={`${watch('expiryMonth') ?? ''}/${watch('expiryYear') ?? ''}`}
          focused={focussedCardField}
          name={watch('donorName')}
          number={watch('creditCardNumber')}
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
              disabled={formState.isSubmitting}
              {...field}
              className="w-full md:w-1/2 px-2 pb-3"
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
              disabled={formState.isSubmitting}
              {...field}
              className="w-full md:w-1/2 px-2 pb-3"
            />
          )}
        />
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
              onFocus={() => setFocussedCardField('number')}
              disabled={formState.isSubmitting}
              errorText={
                errors.creditCardNumber
                  ? t('helpUs:invalidCardNumber')
                  : undefined
              }
              {...field}
              className="w-full md:w-1/2 px-2 pb-3"
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
              onFocus={() => setFocussedCardField('name')}
              errorText={
                errors.donorName ? t('helpUs:requiredField') : undefined
              }
              {...field}
              disabled={formState.isSubmitting}
              className="w-full md:w-1/2 px-2 pb-3"
            />
          )}
        />
        <div className="w-full px-2 flex flex-wrap justify-between">
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
                onFocus={() => setFocussedCardField('expiry')}
                errorText={
                  errors.expiryMonth ? t('helpUs:invalidMonth') : undefined
                }
                disabled={formState.isSubmitting}
                {...field}
                className="w-1/3 pr-2 pb-3"
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
                onFocus={() => setFocussedCardField('expiry')}
                id="expiryYear"
                errorText={
                  errors.expiryYear ? t('helpUs:invalidYear') : undefined
                }
                {...field}
                disabled={formState.isSubmitting}
                className="w-1/3 pl-2 pb-3"
              />
            )}
          />
          <Controller
            name="cvc"
            control={control}
            rules={{ pattern: /^\d{3,4}$/g, required: true }}
            defaultValue=""
            render={({ field }) => (
              <TextInput
                label={t('helpUs:paymentSecurityCode')}
                placeholder=""
                onFocus={() => setFocussedCardField('cvc')}
                errorText={errors.cvc ? t('helpUs:invalidCVC') : undefined}
                disabled={formState.isSubmitting}
                id="cvc"
                {...field}
                onBlur={() => setFocussedCardField('number')}
                className="w-1/3 pl-4 pb-3"
              />
            )}
          />
        </div>
      </div>
      {submissionError !== null && (
        <MessageBanner
          title={submissionError.title}
          description={submissionError.description}
        />
      )}

      <button
        type="button"
        onClick={handleSubmit(onSubmit)}
        className="text-primary bg-tertiary font-semibold rounded hover:bg-tertiary-light transition duration-300 cursor-pointer px-8 py-2 w-full"
        disabled={formState.isSubmitting}
      >
        {formState.isSubmitting && (
          <span className="animate-spin rounded-full h-3 w-3 mr-3 border-t-2 border-b-2 border-primary inline-block"></span>
        )}
        {t('helpUs:paymentDonateButton')}
      </button>
    </form>
  )
}
