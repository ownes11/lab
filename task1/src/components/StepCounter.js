import React, { useState } from 'react';
import './StepCounter.css';

/**
 * StepCounter Component
 * 
 * A counter component that manages multiple pieces of state:
 * - count: current count value
 * - history: array of all count values
 * - operationCount: number of operations performed
 * 
 * Props vs State:
 * - Props (initialValue, step): Received from parent, immutable within component
 * - State (count, history, operationCount): Managed internally, can change via setState
 * Props provide initial configuration, while state tracks dynamic changes during component lifecycle
 */
function StepCounter({ initialValue = 0, step = 1 }) {
  // State for current count value, initialized from initialValue prop
  const [count, setCount] = useState(initialValue);
  
  // State for tracking history of count values
  const [history, setHistory] = useState([initialValue]);
  
  // State for tracking number of operations performed
  const [operationCount, setOperationCount] = useState(0);

  // Handler for increment button
  const handleIncrement = () => {
    const newCount = count + step;
    setCount(newCount);
    setHistory(prevHistory => [...prevHistory, newCount]);
    setOperationCount(prevCount => prevCount + 1);
  };

  // Handler for decrement button
  const handleDecrement = () => {
    const newCount = count - step;
    setCount(newCount);
    setHistory(prevHistory => [...prevHistory, newCount]);
    setOperationCount(prevCount => prevCount + 1);
  };

  // Handler for reset button
  const handleReset = () => {
    setCount(initialValue);
    setHistory([initialValue]);
    setOperationCount(0);
  };

  // Get last 5 values from history (or all if fewer than 5)
  const displayHistory = history.length > 5 
    ? history.slice(-5) 
    : history;

  return (
    <div className="step-counter">
      <div className="counter-display">
        <h2>Current Count: {count}</h2>
        <div className="button-group">
          <button onClick={handleDecrement} className="btn btn-decrement">
            Decrement (-{step})
          </button>
          <button onClick={handleIncrement} className="btn btn-increment">
            Increment (+{step})
          </button>
        </div>
      </div>

      <div className="statistics">
        <div className="stat-item">
          <strong>Total Operations:</strong> {operationCount}
        </div>
        <div className="stat-item">
          <strong>Last {displayHistory.length} values:</strong>
          <div className="history-list">
            {displayHistory.map((value, index) => (
              <span key={index} className="history-item">
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>

      <button onClick={handleReset} className="btn btn-reset">
        Reset
      </button>
    </div>
  );
}

export default StepCounter;

