# Lab 7.2: Error Handling with Error Boundaries

## What is an Error Boundary?

An Error Boundary is a React **class component** that catches JavaScript errors in the component tree below it and renders a fallback UI instead of letting the whole app crash. It implements lifecycle methods such as `getDerivedStateFromError` (for updating state before render) and `componentDidCatch` (for logging).

## When should you use an Error Boundary?

Use Error Boundaries around parts of the UI that may fail independently, such as **lazy-loaded routes**, widgets, or complex components that depend on remote data. They are especially useful when working with `lazy()` and `Suspense` so that failed loads show a helpful message and retry option instead of a blank screen.

## Run

```bash
npm install
npm run dev
```

