import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'


function App() {

  const activeClassName = "nav-active"

  return (
    <BrowserRouter>
       <header>
        <h1>React-Router</h1>
       </header>
       <nav>
        <NavLink end to="/" className={({ isActive }) => isActive ? activeClassName : undefined }>Home</NavLink>        
        <NavLink to="/about" className={({ isActive }) => isActive ? activeClassName : undefined }>About</NavLink>        
        <NavLink to="/contact" className={({ isActive }) => isActive ? activeClassName : undefined }>Contact</NavLink>        
       </nav>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
