import { useState } from 'react'
import KnotBot from '../assets/KnotBot_logo.png';
import About from '../components/About.jsx';
import OptionGrid from './OptionGrid.jsx';
import './AIBot.css'

function AIBot() {

  return (
    <>
        <div className = "ai-bot-section">
            <h1>Hi! I'm KnotBot, your personalized AI assistant for all your crochet and crafting needs.</h1>
            <About></About>
            <img src={ KnotBot } className = "logo"></img>
            <h2 className="help-tagline">What can I help you with today?</h2>
            <OptionGrid></OptionGrid>
            <button className="ask-btn">Ask KnotBot!</button>
        </div>
    </>
  )
}

export default AIBot
