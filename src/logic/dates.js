export default function getCurrentDay () {
  const today = new Date()
  const dd = today.getDate()
  const mm = today.getMonth() + 1
  // Arreglar mes no coincide
  const yyyy = today.getFullYear()
  return `${yyyy}/${mm}/${dd}`
}
