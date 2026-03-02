# Lab 1.1 Task 3: Imperative vs Declarative Comparison Report

**Student Name:** ____________________  
**Date:** ____________________

---

## Imperative vs Declarative UI: A Comparison

### The Difference Between Approaches

The imperative implementation uses jQuery to directly manipulate the DOM. When the user clicks the button, we call `$('#targetParagraph').toggleClass('highlight')`—we explicitly tell the browser *how* to change the DOM step by step. We select the element, then add or remove the class. This is imperative: we issue commands.

The declarative implementation uses React. We describe *what* the UI should look like given the current state. We hold a boolean `isHighlighted` in state; the paragraph's `className` is `{isHighlighted ? 'highlight' : ''}`. We never touch the DOM directly. When the user clicks, we call `setIsHighlighted(!isHighlighted)`. React then re-renders the component and updates the DOM to match the new state. As Ch. 1 "Declarative UI structures" explains, we describe the desired UI; React handles the updates.

### How React Avoids Manual DOM Steps

React's approach (state + re-render) avoids manual DOM manipulation. We do not call `element.classList.add()` or `element.classList.remove()`. Instead, we update state; React compares the previous and new virtual DOM (Ch. 1 "Data changes over time"), computes the minimal diff, and patches only what changed. The developer focuses on "what should be shown" rather than "how to change the DOM."

### Scalability

The declarative approach scales better. With more elements or complex UI, imperative code becomes a web of selectors, event handlers, and manual updates—easy to introduce bugs when multiple parts of the UI depend on the same state. In React, we centralize state; any component that uses it re-renders automatically. Adding more highlighted paragraphs or conditional styling is straightforward: we extend the state and the JSX. As the textbook notes, declarative structures make it easier to reason about the UI as a function of data.

---

*References: React and React Native, Fifth Edition (Packt 2024), Ch. 1 — "Declarative UI structures", "Data changes over time"*
