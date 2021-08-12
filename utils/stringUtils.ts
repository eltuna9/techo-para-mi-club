/** Extracts a number from a string, if the string doesnt have a number, it returns empty string */
export function extractNumberFromString(value: string) {
  const numbers = value.match(/(\d+)/g)
  return numbers ? numbers.join('') : ''
}
