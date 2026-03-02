import { useState } from 'react'
import './Counter.css'

/**
 * Counter component - Lab 1.2 Task 2
 * Displays a number (initial 0), Increment and Decrement buttons.
 * Uses useState for the counter value; updates on button click.
 */
function Counter() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="counter">
      <p className="counter-value">{count}</p>
      <div className="counter-buttons">
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </div>
  )
}

export default Counter
