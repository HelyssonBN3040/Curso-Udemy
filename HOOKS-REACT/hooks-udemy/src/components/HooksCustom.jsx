import React, { useState } from 'react'
import { usePrevius } from '../hooks/usePrevius'

const HooksCustom = () => {
    const [number, setNumber] = useState(0)
    const previusValue = usePrevius(number)


  return (
    <div>
        <hr />
        <h2>HooksCustom</h2>
        <p>Atual: {number}</p>
        <p>Anterior: {previusValue}</p>
        <button onClick={() => setNumber(Math.random())}>Alterar</button>
    </div>
  )
}

export default HooksCustom