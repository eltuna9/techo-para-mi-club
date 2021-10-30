import { Translate } from 'next-translate'
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

export const getCleanCardNumber = (cardNumber: string) => {
  return cardNumber.replace(/\s/g, '')
}

export const getBin = (cardNumber: string) => {
  return cardNumber.replace(/\s/g, '').substr(0, 6)
}

export const submitPayment = async (
  data: DonationFormFields,
  onError: (title: string, description: string) => void,
  t: Translate
) => {
  try {
    const MPManager = new window.MercadoPago(
      process.env.NEXT_PUBLIC_MP_PUBLIC_KEY as string,
      {
        advancedFraudPrevention: false,
      }
    )
    const cardNumber = getCleanCardNumber(data.creditCardNumber)
    const bin = getBin(data.creditCardNumber)
    const token = await MPManager.createCardToken({
      cardExpirationMonth: data.expiryMonth,
      cardExpirationYear: data.expiryYear,
      cardNumber: cardNumber,
      cardholderName: data.donorName,
      securityCode: data.cvc,
    })
    const paymentMethods = await MPManager.getPaymentMethods({ bin })
    if (paymentMethods.results.length < 1) {
      onError(t('helpUs:invalidCard'), t('helpUs:invalidCardDetails'))
      return false
    }
    const paymentPayload = {
      token: token.id,
      issuerId: `${paymentMethods.results[0].issuer.id}`,
      paymentMethodId: `${paymentMethods.results[0].id}`,
      transactionAmount: Number(data.amount),
      installments: 1,
      description: `Donacion de $${data.amount}`,
      email: data.email,
    }
    await submitDonation(paymentPayload)
    return true
  } catch (e) {
    onError(t('helpUs:invalidCard'), t('helpUs:invalidCardDetails'))
    console.log(e)
    return false
  }
}
