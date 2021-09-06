/* bootstrap database in your FaunaDB account */
const faunadb = require('faunadb')
const donors = require('./donors').default
const q = faunadb.query

const faunaClient = new faunadb.Client({
  secret: 'nokeybro',
  domain: 'db.eu.fauna.com',
})

async function createDonor(donor) {
  const donorData = { data: donor }
  try {
    var queryResult = await faunaClient.query(
      q.Create(q.Collection('donors'), donorData)
    )
    return queryResult
  } catch (error) {
    console.log(error)
    throw error
  }
}

//https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript
function titleCase(str) {
  if (!str) return ''
  var splitStr = str.toLowerCase().split(' ')
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
  }
  // Directly return the joined string
  return splitStr.join(' ')
}

donorsData = donors
  .map((d) => {
    const donorData = {
      fullName: `${titleCase(d.Nombre).trim()} ${titleCase(d.Apellido).trim()}`,
      amountDonated: d.Monto,
      donationDate: d.Fecha,
      donatedFrom: d.Origen,
    }
    return donorData
  })
  .filter((d) => !!d.amountDonated)

donorsData.forEach(async (d, i) => {
  try {
    await createDonor(d)
    console.log('Donor saved: ', i + 1)
  } catch (e) {
    console.error('Couldn`t save', d)
  }
})
