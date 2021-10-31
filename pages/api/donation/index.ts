import type { NextApiRequest, NextApiResponse } from 'next'
import mercadopago from 'mercadopago'
mercadopago.configurations.setAccessToken(process.env.MP_ACCESS_TOKEN as string)
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log(req.body)

  const paymentData = {
    transaction_amount: Number(req.body.transactionAmount),
    token: req.body.token,
    description: req.body.description,
    installments: Number(req.body.installments),
    payment_method_id: req.body.paymentMethodId,
    issuer_id: req.body.issuer,
    payer: {
      email: req.body.email,
    },
  }

  try {
    const mpResponse = await mercadopago.payment.save(paymentData)
    console.log('paymentResponse', mpResponse)
    res.status(200).json({
      status: mpResponse.body.status,
      statusDetail: mpResponse.body.status_detail,
      id: mpResponse.body.id,
    })
  } catch (error) {
    console.log('returning error', error)
    res.status(400).send({ status: 'error' })
  }
}
