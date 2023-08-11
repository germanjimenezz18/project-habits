/* export default function getCurrentDay () {
  const date = new Date()
  const dd = today.getDate()
  const mm = today.getMonth() + 1
  // Arreglar mes no coincide
  const yyyy = today.getFullYear()
  return `${yyyy}/${mm}/${dd}`
} */

export default function parseDate (dataFromDatePicker) {
  const date = dataFromDatePicker
  const dd = date.getDate()
  console.log(dd)
  const mm = date.getMonth() + 1
  // Arreglar mes no coincide
  const yyyy = date.getFullYear()
  return `${yyyy}/${mm}/${dd}`
}
