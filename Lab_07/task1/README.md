# Lab 7.1: Lazy Loading Components

## What is code splitting?

Code splitting is a technique that breaks your application bundle into smaller chunks that are loaded **on demand** instead of all at once. In this lab, the `Dashboard`, `Settings`, and `Profile` pages are each in their own bundle and only load when you navigate to them.

## Why use `lazy()`?

React's `lazy()` function lets you declare components that are loaded dynamically via `import()`. The component code is downloaded the first time it is rendered, which improves the initial load time of the app and ensures users only download the code they actually need.

## What does `Suspense` do?

`Suspense` wraps lazy-loaded components and shows a **fallback UI** while they are loading. In this project, `LoadingSpinner` is used as the fallback so users see a friendly loading state when switching between lazy routes.

## Run

```bash
npm install
npm run dev
```

