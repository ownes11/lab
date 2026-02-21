# AI Usage Report (Lab 06)

**Student Name:** ____________________  
**Student ID:** ____________________  
**Date:** ____________________  

---

## Tool used

- **Tool:** Cursor AI (AI-assisted coding)
- **Context:** Lab 06 – React Router & Navigation (Week 6)

---

## Prompts used

1. Request to complete the lab fully according to the criteria from the lab PDF and to follow the AI report template.
2. (Add here any other prompts you used, e.g. “add error handling for invalid course ID”, “explain useParams vs useSearchParams”.)

---

## How you modified / verified the code

- **Modifications:** The AI generated the initial structure for both task1 (Lab 6.1) and task2 (Lab 6.2): Vite + React TS project, `createBrowserRouter`, `Layout` with `NavLink` and `Outlet`, page components (`Home`, `Courses`, `About`, `NotFound`), then in task2 added `data.ts`, `CourseDetail`, `CourseNotFound`, and updated `Courses.tsx` with `useSearchParams` for sorting.
- **Verification:** I ran `npm install` and `npm run dev` in both `task1` and `task2`, checked that navigation works without full page reload, that `/courses/999` shows the “Course not found” error element, and that the Sort button toggles the URL between `?sort=asc` and `?sort=desc` and re-orders the list. (Adjust this to what you actually did.)

---

## What you learned

- **React Router:** How to declare routes with `createBrowserRouter`, nest routes under a layout, and render child routes with `<Outlet />`.
- **Navigation:** Using `Link` and `NavLink` (not `<a>`) for client-side routing; building dynamic links with template literals, e.g. `` `/courses/${c.id}` ``.
- **Route params:** Using `useParams()` to read dynamic path segments (e.g. `:id`) and `useLoaderData()` to use data from the route’s `loader`.
- **Query params:** Using `useSearchParams()` to read and set query string parameters (e.g. `?sort=asc|desc`) without extra router configuration.
- **Error handling:** Using `errorElement` and a loader that throws when a resource is not found (e.g. invalid course ID).

---

*Fill in your name, ID, date, and any extra prompts/verification steps. If the course requires the report in AI_REPORT_TEMPLATE_EN.docx, copy this content into that document.*
