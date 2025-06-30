import { useState } from 'react'
import './Footer.css'

function Footer() {

  return (
    <>
    <footer>
        <p>&copy; {new Date().getFullYear()} KnotBot</p>
    </footer>
    </>
  )
}

export default Footer