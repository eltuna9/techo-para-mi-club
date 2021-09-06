import { Donor, PaginatedResults } from '../models'

export async function fetchAllDonors(
  nextRecordId?: string
): Promise<PaginatedResults<Donor>> {
  const response = await fetch(
    `/api/donors/all?nextRecordId=${nextRecordId ?? ''}`
  )
  return await response.json()
}
