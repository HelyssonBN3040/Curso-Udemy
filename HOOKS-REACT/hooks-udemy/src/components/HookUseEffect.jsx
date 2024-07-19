import React, { useEffect, useState } from 'react'

const HookUseEffect = () => {

  // UseEffect sem denpendencia
  useEffect(() => {
    console.log("Estou sendo executado")
  })
  const [count, setCount] = useState(0)

  // array de dependencias vazio
  useEffect(() => {
    console.log("Serei executado apenas uma vez!")
  }, [])

  // array de dependencias com valores
  const [anotherNumber, setAnotherNumber] = useState(0)
  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando muda o anotherNumber")
    }

  }, [anotherNumber])

  // 4 - Cleanup no useEffect
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log("Hello world!")
  //     setAnotherNumber(anotherNumber + 1)
  //   }, 2000)
  //   return () => clearTimeout(timer) // O clear so irá ser aplicado após a mudança de pagina!
  //   // enquanto isso o componente continuará sendo renderizado
  // }, [anotherNumber])


  return (
    <div>
      <h2>HookUseEffect</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Adicionar</button>
      <hr />
      <p>Resultado: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}> adicionar</button>
    </div>
  )
}

export default HookUseEffect