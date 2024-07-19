import React, { useEffect, useLayoutEffect, useState } from 'react'

const HookUseLayoutEffect = () => {
    const [name, setName] = useState("Algum nome")

    useEffect(() => {
        console.log("2")
        setName("Mudou de novo!")
    },[])

    useLayoutEffect(() => {
        console.log("1")
        setName("Outro Nome")
    },[])
     
    console.log(name)

    return (
    <div>
        <hr />
        <h2>HookUseLayoutEffect</h2>
        <p>Nome:{name}</p>
        <hr />
    </div>
  )
}

export default HookUseLayoutEffect