// Descarga en .txt json de sesiones
export function exportObject () {
  // eslint-disable-next-line no-undef
  const SESIONES = localStorage.getItem('SESIONES')
  if (SESIONES) {
    // eslint-disable-next-line no-undef
    const blob = new Blob([SESIONES], { type: 'application/json' })
    const blobURL = URL.createObjectURL(blob)
    const enlaceDescarga = document.createElement('a')
    enlaceDescarga.href = blobURL
    enlaceDescarga.download = 'archivo.json' // Nombre del archivo que se descargará
    enlaceDescarga.click()
    URL.revokeObjectURL(blobURL)
  } else {
    console.error('No se encontró el contenido del archivo en localStorage.')
  }
}

export function testImportArray (array) {
  const parsedJson = JSON.parse(array)

  for (const obj of parsedJson) {
    if (!obj.hasOwnProperty('date') || !obj.hasOwnProperty('count')) {
      console.log('no pasa')

      return false
    }
  }
  console.log('pasa')
  return true
}

/* export function localStorageMerge (arr) {
  const existingSessions = JSON.parse(localStorage.getItem('SESIONES') || '[]')
  const parsedImport = JSON.parse(arr)
  const mergedSessions = [...existingSessions, ...parsedImport]
  window.localStorage.setItem('SESIONES', JSON.stringify(mergedSessions))
} */

export function pushLocalStorage (arr) {
  // pasarle siempre(arr) el array sin parsearlo a json
  const parseArr = JSON.stringify(arr)
  window.localStorage.setItem('SESIONES', parseArr)
}
