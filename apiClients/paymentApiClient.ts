import { PaymentPayload } from '../models/PaymentPayload'

export interface DonationResponse {
  status: string
  statusDetail: string
  id: number
}

export async function submitDonation(
  paymentData: PaymentPayload
): Promise<DonationResponse> {
  const response = await fetch('/api/donation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(paymentData),
  })
  return (await response.json()) as DonationResponse
}
