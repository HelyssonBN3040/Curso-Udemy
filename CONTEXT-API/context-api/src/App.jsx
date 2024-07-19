
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <h1>Context API</h1>
      <Outlet />
    </>
  )
}

export default App
