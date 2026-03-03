# AI Usage Report (Lab 04)

**Student Name:** ____________________  
**Student ID:** ____________________  
**Date:** ____________________  

---

## Tool used

- **Tool:** Cursor AI (AI-assisted coding)
- **Context:** Lab 04 – Event Handling & Reusable Components (Week 4)

---

## Prompts used

1. Request to create the Lab 04 projects based on `lab_react_04_week4.pdf` and `AI_REPORT_TEMPLATE_EN.docx`, then add them to the GitHub repository `https://github.com/ownes11/lab`.
2. (Add here any other prompts you used, e.g. “improve validation messages”, “add initial demo articles for ArticleManager”.)

---

## How you modified / verified the code

- **Modifications:** The AI generated the structure for **Lab_04/task1** (RegistrationForm with controlled inputs, validation, and `preventDefault`) and **Lab_04/task2** (refactored `ArticleManager` with `AddArticle`, `ArticleList`, and `ArticleItem` components). It also added this `AI_REPORT.md` file under `Lab_04/`.
- **Verification:** I ran `npm install` and `npm run dev` in both `Lab_04/task1` and `Lab_04/task2`, checked that form validation works (errors shown, success message on valid data, no page reload on submit) and that in the article manager I can add new articles, toggle their summaries, and remove articles correctly. (Adjust this text to match what you actually did.)

---

## What you learned

- **Event handling in React:** How to declare `onChange` and `onSubmit` handlers, use the synthetic event object, and call `event.preventDefault()` to stop the default form submission.
- **Controlled components:** How to bind input `value` to React state and update it via `onChange`, keeping the form data as the single source of truth.
- **Validation patterns:** How to extract small validation functions (for name, email, age) that return error messages and display them with conditional rendering.
- **Refactoring into reusable components:** How to split a monolithic article manager into smaller components (`AddArticle`, `ArticleList`, `ArticleItem`) and move local UI state (expanded/collapsed article) into child components for better reuse.

---

*Fill in your name, ID, date, and any extra prompts/verification steps. If the course requires the report in AI_REPORT_TEMPLATE_EN.docx, copy this content into that document.*
