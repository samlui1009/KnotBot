import { useState } from 'react'
import KnotBot from './assets/KnotBot_logo.png';
import Footer from './components/Footer.jsx';
import OptionCard from './components/OptionCard.jsx';
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Hi! I'm KnotBot, your personalized AI assistant for all your crochet and crafting needs.</h1>
        <h2>What can I help you with today? Please select the option below!</h2>
        <OptionCard></OptionCard>
        <img src={KnotBot}></img>
        <button>Ask KnotBot!</button>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
