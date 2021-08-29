export interface FaunaQueryResult<T> {
  ref: FaunaQueryResultRef
  ts: number
  data: T | T[]
}

export interface FaunaQueryResultRef {
  ['@ref']: {
    id: string
    collection: FaunaQueryResultRef | undefined
  }
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
  DonorsName = 'name',
}
