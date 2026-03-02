# AI Usage Report (Lab 07)

**Student Name:** ____________________  
**Student ID:** ____________________  
**Date:** ____________________  

---

## Tool used

- **Tool:** Cursor AI (AI-assisted coding)
- **Context:** Lab 07 – Code Splitting with Suspense & Error Boundaries (Week 7)

---

## Prompts used

1. Request to implement both Lab 7.1 (lazy loading with Suspense) and Lab 7.2 (Error Boundaries for lazy-loaded routes) from `lab_react_07_week7.pdf` and to add the result into the `ownes11/lab` GitHub repository.
2. (Add here any other prompts you used, for example: “explain how Suspense works with lazy routes”, “add a simulated broken route for the error boundary”, etc.)

---

## How you modified / verified the code

- **Modifications:** The AI created a new `Lab_07/` folder with two Vite + React + TypeScript projects:
  - **task1 (Lab 7.1):** Implemented routing with `createBrowserRouter`, a `Layout` component with navigation, and lazy-loaded pages (`Dashboard`, `Settings`, `Profile`) wrapped in `Suspense` with a custom `LoadingSpinner` fallback.
  - **task2 (Lab 7.2):** Reused the lazy-loaded dashboard idea but wrapped the lazy routes in an `ErrorBoundary` class component with `getDerivedStateFromError` and `componentDidCatch`, added an `ErrorFallback` UI, and introduced a `BrokenPage` that throws an error to exercise the boundary and “Try Again” logic.
- **Verification:** (Describe what you actually did, e.g. ran `npm install` and `npm run dev` in both `Lab_07/task1` and `Lab_07/task2`, navigated between routes to see lazy loading and the spinner, opened `/broken` to trigger the error boundary, checked that the error fallback appears and that the retry button resets the state.)

---

## What you learned

- **Code splitting:** How `lazy(() => import('./SomePage'))` splits code into separate chunks that are only loaded when the component is first rendered, improving initial load time.
- **Suspense fallback UI:** How to wrap lazy routes in `<Suspense fallback={...}>` so that users see a friendly loading spinner while bundles are being downloaded.
- **Error Boundaries:** How a class component with `getDerivedStateFromError` and `componentDidCatch` can catch render-time errors in lazy components and show a fallback UI instead of crashing the whole app.
- **Retry patterns:** How to add a `resetError` method to the Error Boundary and provide a “Try Again” button so the user can retry rendering after a failure.

---

*Fill in your name, ID, date, and adjust the prompts / verification steps to match your actual session. If the course requires the report in `AI_REPORT_TEMPLATE_EN.docx`, you can copy this content into that document.*
