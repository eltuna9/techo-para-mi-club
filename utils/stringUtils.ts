/** Extracts a number from a string, if the string doesnt have a number, it returns empty string */
export function extractNumberFromString(value: string) {
  const numbers = value.match(/(\d+)/g)
  return numbers ? numbers.join('') : ''
}
/** Formats a date to DD/MM/YYYY */
export function formatDateToString(value: Date) {
  const formattedDate = `${
    value.getDay() + 1
  }/${value.getMonth()}/${value.getFullYear()}`

  return formattedDate
    .split('/')
    .map((s) => {
      if (s.length === 1) return `0${s}`
      return s
    })
    .join('/')
}
