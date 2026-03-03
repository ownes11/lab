# Lab 4.2 – Refactoring: Article Manager

This project implements the **Lab 4.2** requirements:

- `ArticleManager` keeps the articles array and form state for adding new articles.
- `AddArticle` is a reusable form component that receives title/summary and handler props.
- `ArticleList` renders a list of articles using the `ArticleItem` component.
- `ArticleItem` manages its own expansion state with `useState` (local `isOpened`) and exposes a toggle link and remove button.

## How to run

```bash
npm install
npm run dev
```

Then open the local URL that Vite prints in the console.

