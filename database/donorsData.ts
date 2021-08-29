import faunadb from 'faunadb'
import { Donor } from '../models'
import { faunaClient } from './client'
import { FaunaIndexes, FaunaQueryResult, FaunaRef } from './faunaTypes'
const q = faunadb.query
const { Get, Ref, Collection } = faunadb.query

export async function findDonorsByName(name: string): Promise<Donor | null> {
  try {
    // Getting al refs that match the index businessCode with the value `code`, which should be only one as the index has the UNIQUE constraint
    const refs = await faunaClient.query<FaunaQueryResult<FaunaRef>>(
      q.Paginate(q.Match(q.Index(FaunaIndexes.DonorsName), name))
    )

    const results: FaunaRef[] = refs.data as FaunaRef[]

    if (!results.length) return null

    // get the only ref that should have been returned as a result
    const resultRef = results[0]

    const response = await faunaClient.query<FaunaQueryResult<Donor>>(
      Get(Ref(Collection('Businesses'), resultRef.id))
    )
    return response.data as Donor
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function getAllDonors() {
  return faunaClient
    .query(q.Paginate(q.Match(q.Ref('donor index goes here'))))
    .then((response) => {
      const donorsRef = response.data

      // create new query out of todo refs. http://bit.ly/2LG3MLg
      const getAllDonorsDataQuery = donorsRef.map((ref) => {
        return q.Get(ref)
      })
      // then query the refs
      return client.query(getAllDonorsDataQuery).then((ret) => {
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify(ret),
        })
      })
    })
}
