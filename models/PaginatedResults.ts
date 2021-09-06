export interface PaginatedResults<T> {
  nextRecordId?: string
  data: T[]
}
