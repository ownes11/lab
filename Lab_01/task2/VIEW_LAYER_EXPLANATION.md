# Lab 1.2 Task 3: View Layer Explanation

**Student Name:** ____________________  
**Date:** ____________________

---

## React as the View Layer

React acts as the "view layer" (Ch. 1, "React is just the view layer"): it is responsible only for rendering the UI from data and state. The flow is **data (state) → component → UI**. We hold the counter value in `useState(0)`; the `Counter` component receives that state and renders JSX that displays the number and buttons. React does not provide routing, data fetching, or global state management—it focuses on turning data into the DOM.

## Re-render and DOM Updates

When the user clicks "Increment" or "Decrement", we call `setCount(count + 1)` or `setCount(count - 1)`. This updates the state. React then re-renders the `Counter` component: it runs the function again, produces new JSX with the updated count, and updates the DOM to match. We never manually change the DOM; we only update state, and React handles the rest.

## Virtual DOM and Diffing

React uses a virtual DOM (Ch. 1, "Performance matters"): an in-memory representation of the real DOM. When state changes, React builds a new virtual DOM tree, compares it with the previous one (diffing), and computes the minimal set of changes. It then patches only those changes into the real DOM. This avoids expensive full re-renders and keeps updates efficient.

## References

- Ch. 1: "Setting up a new React project" — project setup with Vite
- Ch. 1: "React is just the view layer" — React's scope and responsibilities
