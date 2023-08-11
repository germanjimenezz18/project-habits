// App.js
import React, { useEffect, useState } from 'react'
import HabitTable from './HabitTable'
import ControllerSesiones from './ControllerSesiones'
import { exportObject, pushLocalStorage } from '../logic/fileTreatment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import FileUpload from './FileUpload'

export function App () {
  const [session, setSession] = useState(() => {
    const locaStorageData = window.localStorage.getItem('SESIONES')
    return locaStorageData
      ? JSON.parse(locaStorageData)
      : Array(0)
  })
  const [controllerValue, setControllerValue] = useState(0)
  const [startDate, setStartDate] = useState(new Date())
  const handleSave = () => {
    const newSession = [...session, { date: startDate, count: controllerValue }]
    setSession(newSession)
  }

  const handleIncrement = () => {
    setControllerValue(prevValue => prevValue + 1) // Incrementa el valor
  }
  const handleDecrement = () => {
    if (controllerValue <= 0) return
    setControllerValue(prevValue => prevValue - 1)
  }

  const handleNewContent = (nuevoValor) => {
    console.log(nuevoValor)
    const merge = [...session, ...nuevoValor]
    setSession(merge)
  }

  useEffect(() => {
    if (session) {
      pushLocalStorage(session)
    }
  }, [session])

  return (
    <div className='page'>
      <h1 className='title'>PROYECT HABITS</h1>

      <HabitTable array={session} />
      <div className='managerSession'>
        <DatePicker
          dateFormat='dd/MM/yyyy'
          className='datePicker'
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <ControllerSesiones value={controllerValue} sumClick={handleIncrement} restClick={handleDecrement} />
        <button className='btnSave' onClick={handleSave}>Guardar</button>
      </div>

      <button onClick={exportObject}>Exportar</button>
      <FileUpload devolverNewContent={handleNewContent} session={session} />
    </div>
  )
}
/*
  TODO:
  [x] Modificar HabitTable con un controlador de sesiones
  [x] Guardar y modificar sesiones via LocalStorage(por ahora)
  [x] Exportar/descarga de archivo de sesiones
  [x] Poder añadir sesiones en fechas elegidas --> selector de fechas
  [x] Poder importar/merge de archivo
  [ ] Modificar colores de HabitTable (rangos de importancia)
  [ ] Sacar CustomHooks
  [ ] Detalles onHover de HabitTable enseñar count y fecha
  [ ] Arreglar el arrays que se guardan (sobreescribir del mismo dia)
  [ ] Crear menu/modal de opciones
  [ ] Timer Pomodoro de Sesiones
*/
