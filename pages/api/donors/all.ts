// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllDonors } from '../../../database/donorsData'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const donors = await getAllDonors()

  res.status(200).json(donors)
}
