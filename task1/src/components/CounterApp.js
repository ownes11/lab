import React from 'react';
import StepCounter from './StepCounter';
import './CounterApp.css';

/**
 * CounterApp Component
 * 
 * Parent component that renders two independent StepCounter instances.
 * Each counter maintains its own separate state, demonstrating component composition.
 */
function CounterApp() {
  return (
    <div className="counter-app">
      <StepCounter initialValue={0} step={1} />
      <StepCounter initialValue={10} step={5} />
    </div>
  );
}

export default CounterApp;

