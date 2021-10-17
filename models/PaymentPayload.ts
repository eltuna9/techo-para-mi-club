export interface PaymentPayload {
  token: string
  issuerId: string
  paymentMethodId: string
  transactionAmount: number
  installments: number
  description: string
  email: string
  identificationNumber: number
  identificationType: string
}
