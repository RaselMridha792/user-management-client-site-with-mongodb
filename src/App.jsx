import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <h1>simple crud server</h1>
      <Navbar></Navbar>
      <Outlet></Outlet>

    </>
  )
}

export default App
