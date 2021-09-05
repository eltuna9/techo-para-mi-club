import faunadb from 'faunadb'

export const faunaClient = new faunadb.Client({
  secret: process.env.FAUNA_SECRET_KEY as string,
  domain: 'db.eu.fauna.com',
})
