export function exportObject () {
  // eslint-disable-next-line no-undef
  const SESIONES = localStorage.getItem('SESIONES')
  if (SESIONES) {
    // eslint-disable-next-line no-undef
    const blob = new Blob([SESIONES], { type: 'text/plain' })
    const blobURL = URL.createObjectURL(blob)
    const enlaceDescarga = document.createElement('a')
    enlaceDescarga.href = blobURL
    enlaceDescarga.download = 'archivo.txt' // Nombre del archivo que se descargará
    enlaceDescarga.click()
    URL.revokeObjectURL(blobURL)
  } else {
    console.error('No se encontró el contenido del archivo en localStorage.')
  }
}
