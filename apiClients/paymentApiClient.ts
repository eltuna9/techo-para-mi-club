import { PaymentPayload } from '../models/PaymentPayload'

export async function submitDonation(
  paymentData: PaymentPayload
): Promise<any> {
  const response = await fetch('/api/donation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(paymentData),
  })
  return await response.json()
}
