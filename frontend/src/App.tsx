import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
    <NavLink to="/">Menetrend</NavLink>
    <NavLink to="/create">Új járat</NavLink>
    </nav>
      <Outlet />
    </>
  )
}

export default App
