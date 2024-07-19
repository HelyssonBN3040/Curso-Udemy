import React, { useState } from 'react'

const HookUseState = () => {
    // states iniciais
    const [name, setName] = useState("Helysson")
    let userName = "joão"
    const changeNames = () => {
        userName = "Joao da silva"
        setName("Cavalcante")
    }

    // 2  - useSTate com inputs

    const [age, setAge] = useState(12)
    return (
        <div>
            {/* useState */}
            <h2>Hook UseState</h2>
            <p>variavel: {userName}</p>
            <p>nome: {name}</p>

            <button onClick={changeNames}>click</button>
            <button onClick={() => setName("Helysson")}>click</button>

            <hr /><br />
            {/* useState com input */}
            <form onSubmit={(e) => {e.preventDefault(); console.log(age)}}>
                <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <input type="submit" value="Enviar" />
                <p>vc tem {age} anos!</p>
            </form>
        </div>
    )
}

export default HookUseState