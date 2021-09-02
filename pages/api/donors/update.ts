// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { updateDonor } from '../../../database/donorsData'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  /*  Adding some dodgy security check, to prevent anyone who doesnt know this password from calling this endpoint 
      NOT a best practice, but just to set up something quickly 😅
  */
  let donorResult: any = { error: 'Not valid auth header provided' }
  if (
    req.headers.authorization?.includes(
      process.env.ENCRYPTED_ADMIN_PASSWORD as string
    )
  )
    donorResult = await updateDonor(req.body)

  res.status(200).json(donorResult)
}
