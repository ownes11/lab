import { useState } from 'react'
import './App.css'

/**
 * Declarative Highlight Toggle - Lab 1.1 Task 2
 * Uses useState to hold boolean state; no direct DOM manipulation.
 * React re-renders when state changes; className depends on isHighlighted.
 */
function App() {
  const [isHighlighted, setIsHighlighted] = useState(false)

  const handleToggle = () => {
    setIsHighlighted(!isHighlighted)
  }

  return (
    <div className="app">
      <h1>Declarative Highlight Toggle</h1>
      <button onClick={handleToggle}>Toggle Highlight</button>
      <p className={isHighlighted ? 'highlight' : ''}>
        Click the button to toggle the highlight on this paragraph.
      </p>
    </div>
  )
}

export default App
