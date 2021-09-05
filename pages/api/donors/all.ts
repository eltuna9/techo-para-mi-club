// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllDonors } from '../../../database/donorsData'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const nextRecordId = req.query['nextRecordId'] as string
  const donors = await getAllDonors(nextRecordId)

  res.status(200).json(donors)
}
