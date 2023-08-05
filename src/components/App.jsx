// App.js
import React, { useState } from 'react'
import HabitTable from './HabitTable'
import ControllerSesiones from './ControllerSesiones'
import getCurrentDay from '../logic/dates'
import { exportObject } from '../logic/exportObject.'

export function App () {
  const [session, setSession] = useState(() => {
    const locaStorageData = window.localStorage.getItem('SESIONES')
    console.log(locaStorageData)
    return locaStorageData
      ? JSON.parse(locaStorageData)
      : Array(0)
  })
  const [controllerValue, setControllerValue] = useState(0)
  const today = getCurrentDay()

  const handleSave = () => {
    // TODO: if date = a ultima date del array elimina la anterior y deja esta
    const newSession = [...session, { date: today, count: controllerValue }]
    setSession(newSession)
    // meter en Useffect
    const parsed = JSON.stringify(newSession)
    window.localStorage.setItem('SESIONES', parsed)
    console.log(session)
    //
  }
  // TODO :meter un useEffect de session y que haga el push a localStorage en el Useffect

  const handleIncrement = () => {
    setControllerValue(prevValue => prevValue + 1) // Incrementa el valor
  }
  const handleDecrement = () => {
    if (controllerValue <= 0) return
    setControllerValue(prevValue => prevValue - 1)
  }

  return (
    <div className='page'>
      <h1>PROYECT 3</h1>

      <HabitTable array={session} />
      <p>{today}</p>
      <ControllerSesiones value={controllerValue} sumClick={handleIncrement} restClick={handleDecrement} />

      <button onClick={handleSave}>Guardar</button>
      <button onClick={exportObject}>Exportar</button>
    </div>
  )
}
/*
  TODO:
  [x] Modificar HabitTable con un controlador de sesiones
  [x] Guardar y modificar sesiones via LocalStorage(por ahora)
  [x] Exportar/descarga de archivo de sesiones
  [ ] Poder añadir sesiones en fechas elegidas --> selector de fechas
  [ ] Poder importar/merge de archivo
  [ ] Modificar colores de HabitTable (rangos de importancia)
  [ ] Detalles onHover de HabitTable enseñar count y fecha
*/
