import { useState } from 'react'
import OptionCard from './OptionCard.jsx';
import Hook from '../assets/Hook_icon.png';
import Tape from '../assets/Tape_icon.png';
import Yarn from '../assets/Yarn_icon.png';
import './OptionGrid.css'

function OptionGrid() {

  return (
    <>
      <div className="grid-container">
        <OptionCard className="pattern-translation"
            title = "Pattern Translation"
            description = "Complicated instructions got you down? Have no fear! Let's figure it out together!"
            image = { Hook }
            borderColor= "#cfded1" >
        </OptionCard>
        <OptionCard className="yarn-estimation"
            title = "Yarn Estimation"
            description = "Not sure if you have enough yarn for your project? Let me do the math for you!"
            image = { Tape }
            borderColor = "#e5cdd4">
        </OptionCard>
        <OptionCard className="yarn-rec"
            title = "Yarn Recommendations"
            description = "Does your local crafts store not have what you're looking for? Let's find some substitutions!"
            image = { Yarn }
            borderColor = "#e5cccc">
        </OptionCard>
      </div>
    </>
  )
}

export default OptionGrid