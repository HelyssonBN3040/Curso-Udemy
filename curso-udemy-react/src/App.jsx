import { useState, useEffect } from 'react'
import './App.css'

function App({ initialCount }) {
  const [resourceType, setResourceType] = useState("Posts")
  const changeResourceType = (resourceType) => {
    setResourceType(resourceType)
  }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }, [resourceType])

  return (
    <>
      <h1>{resourceType}</h1>
      <div>
        <button onClick={() => changeResourceType("posts")}>Posts</button>
        <button onClick={() => changeResourceType("coment")}>Coments</button>
        <button onClick={() => changeResourceType("todos")}>Todos</button>
      </div>
    </>
  )
}

export default App
