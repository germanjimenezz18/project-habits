// ControllerSesiones.js
import React from 'react'
import '../App.css'

const ControllerSesiones = ({ value, sumClick, restClick }) => {
  return (
    <div className='controllerSession'>
      <p className='counter'>{value}</p>
      <div className='btnControllerDiv'>
        <button onClick={restClick}>-</button>
        <button onClick={sumClick}>+</button>
      </div>
    </div>
  )
}

export default ControllerSesiones
