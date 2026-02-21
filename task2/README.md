# Lab 6.2: Route Parameters & Dynamic Pages

## What is useParams vs useSearchParams?

- **useParams()** — Returns an object of key/value pairs from the **path** (dynamic segments). For a route like `/courses/:id`, `useParams()` gives `{ id: "3" }`. Use it when the parameter identifies a **resource** (e.g. which course, which user).
- **useSearchParams()** — Returns the **query string** as a `URLSearchParams` object. For `/courses?sort=desc`, you use `searchParams.get("sort")` to get `"desc"`. Use it for **optional** or **multiple** options (sort order, filters, pagination) that don’t change the “identity” of the page.

## When to use URL params vs query params

- **URL (path) params** — For a single resource or required segment: e.g. `/courses/5`, `/users/42`. One course or one user. Good for bookmarking and sharing a specific item.
- **Query params** — For optional or list-style options: e.g. `?sort=asc`, `?page=2&limit=10`. The same page (e.g. `/courses`) can have different query strings without defining new routes.

## Route structure (extended)

- `/` — Home  
- `/courses` — Course list; supports `?sort=asc` or `?sort=desc`  
- `/courses/:id` — Course detail (loader + `errorElement` for invalid ID)  
- `/about` — About  
- `*` — 404  

## Run

```bash
npm install
npm run dev
```

## Files added/updated for Lab 6.2

- `src/data.ts` — `Course` interface, `courses` array, `getCourseById()`
- `src/pages/CourseDetail.tsx` — uses `useParams()` and `useLoaderData()`
- `src/pages/CourseNotFound.tsx` — `errorElement` for invalid course ID
- `src/pages/Courses.tsx` — `Link` to `/courses/:id`, `useSearchParams()` for sort
- `src/main.tsx` — route `courses/:id` with `loader` and `errorElement`
