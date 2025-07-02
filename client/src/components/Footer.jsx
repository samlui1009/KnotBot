import { useState } from 'react'
import { FaGithub } from "react-icons/fa6";
import './Footer.css'

function Footer() {

  return (
    <>
    <footer className = "footer">
        <div className = "footer-contents">
            <p>&copy; {new Date().getFullYear()} KnotBot | Built with ❤️ & 🧶 by Sam L. | <a href="https://github.com/samlui1009/KnotBot" className="github-link"><FaGithub/> GitHub Repo</a></p>
        </div>
    </footer>
    </>
  )
}

export default Footer