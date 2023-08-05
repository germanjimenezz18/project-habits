import { useState } from 'react'

export function ButtonAddSession () {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button onClick={() => { setIsModalOpen(true) }}>Add Session</button>

    </>
  )
}
