import faunadb from 'faunadb'
import { Donor } from '../models'
import { faunaClient } from './client'
import { FaunaIndexes, FaunaQueryResult, FaunaRef } from './faunaTypes'
const q = faunadb.query

/** Implemeting search by name, based on the first approach discussed here: https://stackoverflow.com/questions/62109035/how-to-get-documents-that-contain-sub-string-in-faunadb/62131536#62131536 */
export async function findDonorsByName(name: string): Promise<Donor[]> {
  interface FindDonorsByNameQueryResult {
    data: [string, FaunaRef][]
  }
  try {
    const queryResult = await faunaClient.query<FindDonorsByNameQueryResult>(
      q.Filter(
        q.Paginate(q.Match(q.Index(FaunaIndexes.DonorsName))),
        q.Lambda(
          ['fullName', 'ref'],
          q.ContainsStr(q.LowerCase(q.Var('fullName')), name.toLowerCase())
        )
      )
    )

    const donorRefs = queryResult.data.map((rawResult) => {
      return q.Get(rawResult[1])
    })

    const donorsData = await faunaClient.query<FaunaQueryResult<Donor>[]>(
      donorRefs
    )
    return donorsData.map((record) => record.data)
  } catch (error) {
    console.log(error)
    throw error
  }
}

/** Just that, get all donors */
export async function getAllDonors() {
  // First get the raw result of the query
  const donorsQueryResult = await faunaClient.query<
    FaunaQueryResult<FaunaRef[]>
  >(q.Paginate(q.Match(q.Ref(`indexes/${FaunaIndexes.DonorsAll}`))))

  // Extract the refs (ids) for all the documents
  const donorRefs = donorsQueryResult.data.map((ref) => {
    return q.Get(ref)
  })

  // Query based on the refs to get the actual data
  const donorsData = await faunaClient.query<FaunaQueryResult<Donor>[]>(
    donorRefs
  )
  return donorsData.map((record) => record.data)
}
