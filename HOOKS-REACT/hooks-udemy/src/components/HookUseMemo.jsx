import React, { useEffect, useMemo, useState } from 'react'

const HookUseMemo = () => {
    const [number, setNumber] = useState(0)
    //  adição do useMemo, onde não permite a renderização do componente
    const premiumNumbers = useMemo(()=>{
        return ["0", "1", "2", "4"]
    }, [])

    useEffect(() => {
        console.log("Premium numbers foi alterado!")
    }, [premiumNumbers])

    return (
        <div>
            <h2>HookUseMemo</h2>
            <input type="text" onChange={(e) => setNumber(e.target.value)} />
            {premiumNumbers.includes(number) ? <p>Acertou o número: {number}</p> : ""}

        </div>
    )
}

export default HookUseMemo