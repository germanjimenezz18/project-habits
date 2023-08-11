// ControllerSesiones.js
import React from 'react'
import '../App.css'

const ControllerSesiones = ({ value, sumClick, restClick }) => {
  return (
    <div className='controllerSession'>
      <button className='controllerBtn' onClick={restClick}>-</button>
      <p className='counter'>{value}</p>
      <button className='controllerBtn' onClick={sumClick}>+</button>
    </div>
  )
}

export default ControllerSesiones
