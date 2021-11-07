export interface MercadoPago {
  new (public_key: string, options: any): MercadoPago
  createCardToken: (
    cardTokenParams: CardTokenParams
  ) => Promise<CardTokenResponse>
  getPaymentMethods: (
    params: PaymentMethodsParams
  ) => Promise<PaymentMethodsResponse>
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

export enum PaymentStatuses {
  APPROVED = 'approved',
  IN_PROCESS = 'in_process',
  REJECTED = 'rejected',
  /**Not oficially supported by MP, but use in our API */
  ERROR = 'error',
}

export enum PaymentStatusDetails {
  ACCREDITED = 'accredited',
  PENDING_CONTINGENCY = 'pending_contingency',
  PENDING_REVIEW_MANUAL = 'pending_review_manual',
  BAD_CARD_NUMBER = 'cc_rejected_bad_filled_card_number',
  BAD_DATE = 'cc_rejected_bad_filled_date',
  BAD_FILLED_OTHER = 'cc_rejected_bad_filled_other',
  BAD_CVC = 'cc_rejected_bad_filled_security_code',
  BLACKLISTED = 'cc_rejected_blacklist',
  CALL_FOR_AUTHORIZE = 'cc_rejected_call_for_authorize',
  CARD_DISABLED = 'cc_rejected_card_disabled',
  CARD_REJECTED = 'cc_rejected_card_error',
  DUPLICATED_PAYMENT = 'cc_rejected_duplicated_payment',
  HIGH_RISK = 'cc_rejected_high_risk',
  INSUFFICIENT_FOUNDS = 'cc_rejected_insufficient_amount',
  MAX_ATTEMPTS = 'cc_rejected_max_attempts',
  REJECTED_OTHER = 'cc_rejected_other_reason',
}
