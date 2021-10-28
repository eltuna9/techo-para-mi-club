export interface MercadoPago {
  new (public_key: string, options: any): MercadoPago
  createCardToken: (
    cardTokenParams: CardTokenParams
  ) => Promise<CardTokenResponse>
  getPaymentMethods: (
    params: PaymentMethodsParams
  ) => Promise<PaymentMethodsResponse>
  getIssuers: (issuersParams: IssuersParams) => Promise<IssuersResponse>
  cardForm: (params: any) => any
}

interface CardTokenParams {
  cardNumber: string
  cardholderName: string
  cardExpirationMonth: string
  cardExpirationYear: string
  securityCode: string
}

interface CardTokenResponse {
  id: string
}

interface PaymentMethodsParams {
  bin: string
  processingMode?: 'aggregator' | 'gateway'
}

/**https://github.com/mercadopago/sdk-js#return-promise-showing-most-common-used-results */
interface PaymentMethodsResponse {
  paging: {
    total: number
    limit: number
    offset: number
  }
  results: [
    {
      secure_thumbnail: string
      min_accreditation_days: number
      max_accreditation_days: number
      id: string
      payment_type_id: string
      accreditation_time: number
      thumbnail: string
      marketplace: string
      deferred_capture: string
      labels: string[]
      name: string
      site_id: string
      processing_mode: string
      additional_info_needed: string[]
      status: string
      settings: [
        {
          security_code: {
            mode: string
            card_location: string
            length: number
          }
          card_number: {
            length: number
            validation: string
          }
          bin: {
            pattern: string
            installments_pattern: string
            exclusion_pattern: string
          }
        }
      ]
      issuer: {
        default: boolean
        name: string
        id: number
      }
    }
  ]
}

interface IssuersParams {
  paymentMethodId: string
  bin: string
}

interface IssuersResponse {
  id: string
  name: string
  secure_thumbnail: string
  thumbnail: string
  processing_mode: string
  merchant_account_id?: string
}
