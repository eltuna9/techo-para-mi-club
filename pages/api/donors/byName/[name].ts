// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { findDonorsByName } from '../../../../database/donorsData'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { name } = req.query
  const donors = await findDonorsByName(name as string)

  res.status(200).json(donors)
}
