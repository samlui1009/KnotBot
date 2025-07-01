import { useState } from 'react'
import './OptionCard.css'

function OptionCard({ title, image, description, borderColor }) {

  return (
    <>
      <div className="option-card"
      style={{ border: `3px solid ${borderColor}`}}>
        <h3>{ title }</h3>
        <img className = "icon" src= { image }
        style={{ backgroundColor: borderColor}}></img>
        <p className = "description">{ description }</p>
      </div>
    </>
  )
}

export default OptionCard