import { useState } from 'react'
import KnotBot from './assets/KnotBot_logo.png';
import Header from './components/Header.jsx';
import AIBot from './components/AIBot.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import './App.css'

function App() {

  return (
    <>
      <div className="app-container">
        <Header></Header>
        <AIBot></AIBot>
        <Footer className="footer"></Footer>
      </div>
    </>
  )
}

export default App
