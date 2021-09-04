import { Donor } from '../models'

export async function fetchAllDonors(): Promise<Donor[]> {
  const response = await fetch('/api/donors/all')
  return await response.json()
}
