import { useState } from 'react'
import { regexJSON } from '../constants'
import { testImportArray } from '../logic/fileTreatment'

export default function FileUpload ({ session, devolverNewContent }) {
  console.log('actualiza')

  const [importError, setImportError] = useState('')
  const handleFileChange = (event) => {
    const file = event.target.files[0]

    if (!file) {
      return
    }

    if (!regexJSON.test(file.name)) {
      setImportError('El archivo debe ser un JSON')
      return
    }

    // eslint-disable-next-line no-undef
    const reader = new FileReader()
    reader.onload = (e) => {
      if (testImportArray(e.target.result)) {
        devolverNewContent(JSON.parse(e.target.result))
        // cumple --> devolver array testeado a juntarlo con session
      } else {
        setImportError('El JSON no cumple con el formato correcto')
      }
    }
    reader.readAsText(file)
  }

  return (
    <div>

      <input type='file' onChange={handleFileChange} />
      <div style={{ color: 'red' }}>{importError}</div>
    </div>
  )
}
