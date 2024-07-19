import React, { useState, useEffect, useRef } from 'react'

const HookUseRef = () => {
    // 1 - useRef
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })

    // 2 - UseRef e DOM
    const inputRef = useRef()
    const [text, setText] = useState("")


    const HandleSubmit = (e) => {
        e.preventDefault()
        setText("")

        inputRef.current.focus()
    }

    return (
        <div>
            <h2>HookUseRef</h2>
            <p>O componente renderizou: {numberRef.current}</p>
            <p>Counter 1: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Contador A</button>
            <p>Counter 2: {counterB}</p>
            <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
            <hr />
            <form onSubmit={HandleSubmit}>
                <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} />
                <input type="submit" value="Enviar" />
            </form>
            
        </div>
    )
}

export default HookUseRef