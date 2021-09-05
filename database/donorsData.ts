import faunadb from 'faunadb'
import { Donor } from '../models'
import { faunaClient } from './client'
import {
  FaunaCollections,
  FaunaIndexes,
  FaunaQueryResult,
  FaunaRef,
} from './faunaTypes'
const q = faunadb.query

// All these functions have been built based on (aka copy/pasted) the FaunaDB examples :
// https://github.com/netlify/netlify-faunadb-example

/**
 *  Gets all donors saved in the FaunDB collection
 *
 * See -> https://github.com/netlify/netlify-faunadb-example/blob/master/functions/todos-read-all.js
 */
export async function getAllDonors(): Promise<Donor[]> {
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

  return donorsData.map((record) => ({
    ...record.data,
    id: record.ref.id,
  }))
}

/** Inserts a new Donor document in FaunaDB
 *
 * See -> https://github.com/netlify/netlify-faunadb-example/blob/master/functions/todos-create.js
 */
export async function createDonor(donor: Donor) {
  const donorData = { data: donor }
  try {
    var queryResult = await faunaClient.query(
      q.Create(q.Collection(FaunaCollections.Donors), donorData)
    )
    return queryResult
  } catch (error) {
    console.log(error)
    throw error
  }
}

/** Updates an existent Donor in FaunaDB
 *
 * See -> https://github.com/netlify/netlify-faunadb-example/blob/master/functions/todos-update.js
 */
export async function updateDonor(donor: Donor) {
  const donorData = { data: donor }
  try {
    var queryResult = await faunaClient.query(
      q.Update(
        q.Ref(q.Collection(FaunaCollections.Donors), donor.id),
        donorData
      )
    )
    return queryResult
  } catch (error) {
    console.log(error)
    throw error
  }
}

/**
 * Search donors by a substring present in their name. i.e search for "a" will return all donors with an "a" pressent in their `fullName` attribute
 *
 * Based on the first approach discussed here: https://stackoverflow.com/questions/62109035/how-to-get-documents-that-contain-sub-string-in-faunadb/62131536#62131536
 * */
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
    return donorsData.map((record) => ({
      ...record.data,
      id: record.ref.id,
    }))
  } catch (error) {
    console.log(error)
    throw error
  }
}
