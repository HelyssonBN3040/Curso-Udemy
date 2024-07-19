import React, { useReducer, useState } from 'react'

const HookUseReducer = () => {
    // hooks useReducer
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })

    // 2 - avaçando com reducer
    const lista = [
        {id: 1, nome: 'João', sobrenome: "Silva"},
        {id: 2, nome: 'Helysson', sobrenome: "Cavalcante"}
    ]


    // taskreducer criado para simular um CRUD de uma api
    const taskReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText
                }
                setTaskText("")
                return [...state, newTask]

            case "DELETE":
                return state.filter((task) => task.id !== action.id)


            default:
                return state
        }
    }

    // remoção dos valores da lista
    const removerTask = (id) => {
        dispatchTasks({ type: "DELETE", id })
    }

    // função de envio de dados para a lista
    const HandleSubmit = (e) => {
        e.preventDefault()
        if (taskText.trim()) {
            dispatchTasks({ type: "ADD" })
            setMessageError("")
        }
        else {
            setMessageError("Campo vazio")
        }
    }


    const [taskText, setTaskText] = useState("") //estado inicial do valor
    const [tasks, dispatchTasks] = useReducer(taskReducer, lista) // alteração da lista
    const [messageError, setMessageError] = useState("")

    return (
        <div>
            <hr />
            <h2>HookUseReducer</h2>
            <p>Numero: {number}</p>
            <button onClick={dispatch}>ALterar valor</button>
            <hr />
           

            <h3>Tarefas</h3>
            <form onSubmit={HandleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setTaskText(e.target.value)}
                    value={taskText}
                />

                <input type="submit" value="Enviar" />
            </form>
            {messageError && <p style={{ color: "red" }}>{messageError}</p>}
            <ul>
                {
                    tasks.map((task) => (
                        <li key={task.id}>Nome: {task.nome} {task.sobrenome} - <button onClick={() => removerTask(task.id)}>deletar</button></li>
                    ))
                }
            </ul>
            <hr />


        </div>
    )
}

export default HookUseReducer