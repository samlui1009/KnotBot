import { useState } from 'react'
import Name from '../assets/KnotBot_name.png';
import NavBar from './Navbar.jsx';
import './Header.css'

function Header() {

  return (
    <>
    <header className="header">
        <img className="name" src={ Name }></img>
        <NavBar></NavBar>
    </header>
    </>
  )
}

export default Header
