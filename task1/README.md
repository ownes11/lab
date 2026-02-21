# Lab 6.1: Multi-Page Application with React Router

## Route structure

- **`/`** — Home (index route)
- **`/courses`** — Courses list
- **`/about`** — About the program
- **`*`** — 404 Not Found (catch-all)

Routes are declared in `src/main.tsx` with `createBrowserRouter`. The root route uses a `Layout` component; all other pages are nested as `children`. The `Layout` renders `<Outlet />` where the matched child route is rendered. Navigation uses `NavLink` (not `<a>`) so routing is client-side without full page reloads.

## Run

```bash
npm install
npm run dev
```

## Files

- `src/main.tsx` — router and `RouterProvider`
- `src/Layout.tsx` — nav, `Outlet`, footer
- `src/pages/Home.tsx`, `Courses.tsx`, `About.tsx`, `NotFound.tsx` — page components
