import { Translate } from 'next-translate'
import { DonationResponse, submitDonation } from '../../../../apiClients'
import {
  PaymentStatusDetails,
  PaymentStatuses,
} from '../../../../declarations/MercadoPago'

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

interface SubmitDonationReponse {
  status: 'success' | 'failure'
  paymentResultTitle: string
  paymentResultDescription: string
}

export const submitPayment = async (
  data: DonationFormFields,
  t: Translate
): Promise<SubmitDonationReponse> => {
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
      return {
        status: 'failure',
        paymentResultTitle: t('helpUs:invalidCreditCard'),
        paymentResultDescription: t('helpUs:invalidCardDetails'),
      }
    }
    const paymentPayload = {
      token: token.id,
      issuerId: `${paymentMethods.results[0].issuer.id}`,
      paymentMethodId: `${paymentMethods.results[0].id}`,
      transactionAmount: Number(data.amount),
      installments: 1,
      description: `Donacion de $${data.amount}`,
      email: data.email,
      deviceToken: window.MP_DEVICE_SESSION_ID,
    }
    var response = await submitDonation(paymentPayload)
    return processPaymentResponse(response, t)
  } catch (error) {
    console.error(error)
    return {
      status: 'failure',
      paymentResultTitle: t('helpUs:invalidCreditCard'),
      paymentResultDescription: t('helpUs:invalidCardDetails'),
    }
  }
}

const processPaymentResponse = (
  response: DonationResponse,
  t: Translate
): SubmitDonationReponse => {
  if (response.status === PaymentStatuses.ERROR)
    return {
      status: 'failure',
      paymentResultTitle: t('helpUs:invalidCreditCard'),
      paymentResultDescription: t('helpUs:invalidCardDetails'),
    }

  if (response.status === PaymentStatuses.APPROVED)
    return {
      status: 'success',
      paymentResultTitle: t('helpUs:paymentSuccessFullTitle'),
      paymentResultDescription: t('helpUs:paymentSuccessFullDescription'),
    }

  if (response.status === PaymentStatuses.IN_PROCESS) {
    return {
      status: 'success',
      paymentResultTitle: t('helpUs:paymentInProcessTitle'),
      paymentResultDescription: t('helpUs:paymentInProcessDescription'),
    }
  }
  let returnValue: SubmitDonationReponse = {
    status: 'failure',
    paymentResultTitle: t('helpUs:paymentRejectedTitle'),
    paymentResultDescription: t('helpUs:creditCardRejected'),
  }
  // if it got here, only chance is that payment has been rejected 😢
  switch (response.statusDetail) {
    case PaymentStatusDetails.BAD_CARD_NUMBER:
    case PaymentStatusDetails.BAD_CVC:
    case PaymentStatusDetails.BAD_DATE:
    case PaymentStatusDetails.BAD_FILLED_OTHER:
      returnValue.paymentResultDescription = t('helpUs:invalidCardDetails')
      break

    case PaymentStatusDetails.BLACKLISTED:
    case PaymentStatusDetails.CARD_DISABLED:
    case PaymentStatusDetails.CARD_REJECTED:
    case PaymentStatusDetails.HIGH_RISK:
    case PaymentStatusDetails.REJECTED_OTHER:
      returnValue.paymentResultDescription = t('helpUs:creditCardRejected')

    case PaymentStatusDetails.CALL_FOR_AUTHORIZE:
      returnValue.paymentResultDescription = t('helpUs:authorizationNeeded')

    case PaymentStatusDetails.INSUFFICIENT_FOUNDS:
      returnValue.paymentResultDescription = t('helpUs:insufficientAmount')

    default:
      break
  }

  return returnValue
}
