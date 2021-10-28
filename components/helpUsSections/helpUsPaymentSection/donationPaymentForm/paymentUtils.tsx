import { Translate } from 'next-translate'
import { FormState } from 'react-hook-form'
import { submitDonation } from '../../../../apiClients'

export interface DonationFormFields {
  amount: string
  email: string
  creditCardNumber: string
  donorName: string
  expiryMonth: string
  expiryYear: string
  cvc: string
}

export const MPManager = new window.MercadoPago(
  process.env.NEXT_PUBLIC_MP_PUBLIC_KEY as string,
  {
    advancedFraudPrevention: false,
  }
)

export const getCleanCardNumber = (cardNumber: string) => {
  return cardNumber.replace(/\s/g, '')
}

export const getBin = (cardNumber: string) => {
  return cardNumber.replace(/\s/g, '').substr(0, 6)
}

/**Initializes MercadoPago card form */
export function submitMPCardForm(
  t: Translate,
  amount: string,
  form: FormState<DonationFormFields>
) {
  const cardForm = MPManager.cardForm({
    //harcoded for now! will use an effect to reinitialize this every time the value changes in the form
    amount,
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
        let element = document.getElementById(
          'form-checkout__identificationType'
        ) as HTMLSelectElement
        element.value = 'Otro'
        console.log('from is', form)
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
          identificationNumber,
          identificationType,
        } = cardForm.getCardFormData()

        const paymentPayload = {
          token,
          issuerId,
          paymentMethodId,
          transactionAmount: Number(amount),
          installments: 1,
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
  console.log('rhf', form)

  //if they have submitted before, lets remount the form to update any data
  if (form.submitCount > 1) {
    cardForm.unmount()
    cardForm.mount()
    // cardForm.submit()
  }
}
