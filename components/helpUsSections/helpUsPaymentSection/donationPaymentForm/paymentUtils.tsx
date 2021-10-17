import { I18n } from 'next-translate'
import useTranslation from 'next-translate/useTranslation'
import { useEffect } from 'react'
import { submitDonation } from '../../../../apiClients'

/**Initializes MercadoPago card form */
export function initializeMPCardForm(i18n: I18n) {
  const { t } = i18n
  // @ts-ignore
  const mp = new MercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY)
  const cardForm = mp.cardForm({
    //harcoded for now! will use an effect to reinitialize this every time the value changes in the form
    amount: '100.5',
    autoMount: true,
    form: {
      id: 'mp-checkout',
      cardholderName: {
        id: 'donorName',
        placeholder: t('helpUs:paymentNamePh'),
      },
      cardholderEmail: {
        id: 'email',
        placeholder: t('helpUs:paymentEmailPh'),
      },
      cardNumber: {
        id: 'creditCardNumber',
        placeholder: t('helpUs:paymentCardPh'),
      },
      cardExpirationMonth: {
        id: 'expiryMonth',
        placeholder: t('helpUs:paymentMonthPh'),
      },
      cardExpirationYear: {
        id: 'expiryYear',
        placeholder: t('helpUs:paymentYearPh'),
      },
      securityCode: {
        id: 'cvc',
        placeholder: t('helpUs:paymentSecurityCodePh'),
      },
      installments: {
        id: 'form-checkout__installments',
        placeholder: 'Cuotas',
      },
      identificationType: {
        id: 'form-checkout__identificationType',
        placeholder: 'Tipo de documento',
      },
      identificationNumber: {
        id: 'form-checkout__identificationNumber',
        placeholder: 'Número de documento',
      },
      issuer: {
        id: 'form-checkout__issuer',
        placeholder: 'Banco emisor',
      },
    },
    callbacks: {
      onFormMounted: (error: any) => {
        if (error) return console.error('Form Mounted handling error: ', error)
        console.log('Form mounted')
      },
      onSubmit: async (event: any) => {
        event.preventDefault()

        console.log('cardFormnData', cardForm.getCardFormData())

        const {
          paymentMethodId,
          issuerId,
          cardholderEmail: email,
          amount,
          token,
          installments,
          identificationNumber,
          identificationType,
        } = cardForm.getCardFormData()

        const paymentPayload = {
          token,
          issuerId,
          paymentMethodId,
          transactionAmount: Number(amount),
          installments: Number(installments),
          description: 'Descripción del producto',
          email,
          identificationType,
          identificationNumber,
        }
        try {
          submitDonation(paymentPayload)
        } catch (error) {}
      },
      onFetching: (resource: any) => {
        console.log('Fetching resource: ', resource)

        // Animate progress bar
        const progressBar = document.querySelector('.progress-bar') as Element
        progressBar.removeAttribute('value')

        return () => {
          progressBar.setAttribute('value', '0')
        }
      },
    },
  })
}

export function useInitializeMPCardForm() {
  const i18n = useTranslation()
  useEffect(() => {
    initializeMPCardForm(i18n)
  }, [])
}
