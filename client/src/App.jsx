import { useState } from 'react'
import KnotBot from './assets/KnotBot_logo.png';
import Header from './components/Header.jsx';
import AIBot from './components/AIBot.jsx';
import Footer from './components/Footer.jsx';
import './App.css'

function App() {

  return (
    <>
      <div>
        <Header></Header>
        <AIBot></AIBot>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
