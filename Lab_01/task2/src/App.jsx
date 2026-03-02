import { useState } from 'react'
import Counter from './Counter'
import './App.css'

/**
 * Lab 1.2 - Minimal React app demonstrating view layer, state, and re-rendering.
 * Renders the Counter component in the main App.
 */
function App() {
  return (
    <div className="app">
      <h1>Lab 1.2 - Counter</h1>
      <Counter />
    </div>
  )
}

export default App
