export interface FaunaQueryResult<T> {
  ['@ref']?: FaunaRef
  ref: FaunaRef
  ts: number
  data: T
  after: FaunaRef[]
}

export interface FaunaQueryResultRef {
  ['@ref']: FaunaRef
}

export interface FaunaRef {
  id: string
  collection: FaunaQueryResultRef | undefined
  ['@ref']: FaunaRef
}

export enum FaunaCollections {
  Donors = 'donors',
}

export enum FaunaIndexes {
  DonorsName = 'donors_name_word',
  DonorsAll = 'all_donors',
}
