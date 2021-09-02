export interface FaunaQueryResult<T> {
  ['@ref']?: FaunaRef
  ref: FaunaRef
  ts: number
  data: T
}

export interface FaunaQueryResultRef {
  ['@ref']: FaunaRef
}

export interface FaunaRef {
  id: string
  collection: FaunaQueryResultRef | undefined
}

export interface FaunaResultsPage<T> {
  value: T[]
}

export enum FaunaCollections {
  Donors = 'donors',
}

export enum FaunaIndexes {
  DonorsName = 'donors_name_word',
  DonorsAll = 'all_donors',
}
