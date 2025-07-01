import { useState } from 'react'
import './Footer.css'

function Footer() {

  return (
    <>
    <footer className = "footer">
        <div className = "footer-contents">
            <p>&copy; {new Date().getFullYear()} KnotBot</p>
        </div>
    </footer>
    </>
  )
}

export default Footer