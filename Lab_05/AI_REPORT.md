# AI Usage Report — Lab 05: TypeScript & Props Validation

**Course / Assignment:** Week 5 Lab 05 (09.02–15.02.2026)  
**Student Name:** ____________________  
**Student ID:** ____________________  
**Date:** ____________________  

---

## 1. Tool used

- **Tool:** Cursor AI (assistant with code generation and editing)
- **Purpose:** To implement Lab 5.1 (typed components, interfaces, UserCard, SkillList) and Lab 5.2 (SearchApp with typed state and event handlers) according to the lab PDF criteria.

---

## 2. Prompts used

1. **Main prompt (paraphrased):** “Do everything according to the criteria in lab_react_05_week5 (1).pdf and the AI_REPORT_TEMPLATE_EN.docx.”
2. **Implicit context:** The assistant was given the lab PDF (task descriptions, rubrics, code examples) and created the project structure, `types.ts`, `UserCard.tsx`, `SkillList.tsx`, `App.tsx`, `SearchApp.tsx`, READMEs, and this report to satisfy the stated criteria.

---

## 3. How the code was modified and verified

- **Structure:** Two folders were created: `Lab_05/task1/` (Lab 5.1) and `Lab_05/task2/` (Lab 5.2), each as a Vite + React + TypeScript project, as required.
- **Task 1 (Lab 5.1):**
  - Added `types.ts` with `User`, `SkillLevel` (union type), and `Skill` interfaces.
  - Implemented `UserCard.tsx` with `UserCardProps` (user, optional `isActive`, `children: React.ReactNode`).
  - Implemented `SkillList.tsx` with `SkillListProps` (skills array) and conditional styling by `SkillLevel`.
  - Wired sample data in `App.tsx` and ensured `tsconfig.json` has `"strict": true`.
- **Task 2 (Lab 5.2):**
  - Implemented `SearchApp.tsx` with `useState<User[]>` for users and filtered list, typed `handleSearch` with `React.ChangeEvent<HTMLInputElement>` and `handleClear` with `React.MouseEvent<HTMLButtonElement>`.
  - Rendered filtered users with `UserCard` and added “No results found” when the list is empty.
- **Verification:** `npm run build` was run in both `task1` and `task2`; both projects compile with zero TypeScript errors. No `any` was used; all event handlers use the required React types.

---

## 4. What I learned

- **Interfaces vs type aliases:** Use interfaces for object shapes (e.g. `User`, `Skill`); use type aliases for unions like `SkillLevel` (Ch. 6, p. 96–97).
- **Typed props:** Defining interfaces for props (e.g. `UserCardProps`, `SkillListProps`) gives compile-time checks and better IDE support than PropTypes.
- **Generics with `useState`:** For `useState<User[]>([])` the generic is necessary because an empty array does not specify the element type (Ch. 6, p. 100).
- **Typing event handlers:** Using `React.ChangeEvent<HTMLInputElement>` and `React.MouseEvent<HTMLButtonElement>` ensures correct access to `event.target` and avoids runtime errors.
- **Strict mode:** Keeping `"strict": true` in `tsconfig.json` helps catch type errors early and aligns with the lab requirements.

---

*This report is submitted in accordance with the course AI Usage Policy. Missing or incomplete report when AI is used may result in point deductions.*
