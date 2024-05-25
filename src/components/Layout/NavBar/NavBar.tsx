import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'wouter'
import './NavBar.css'

const NavBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [location] = useLocation()

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState)
  }

  useEffect(() => {
    setShowMenu(false)
  }, [location])

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Rick and Morty App</h1>
      </div>
      <div className={`navbar-right ${showMenu ? 'show' : ''}`}>
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/">Personajes</Link>
          </li>
          <li>
            <Link href="/locaciones">Locaciones</Link>
          </li>
        </ul>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        {showMenu ? 'x' : '☰'}
      </button>
    </nav>
  )
}

export default NavBar
