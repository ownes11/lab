# Lab 8.2: Next.js Blog Pages Implementation

This task implements the blog pages using different rendering strategies in Next.js.

## Features

- Home page (SSG): Displays latest posts, statically generated
- Individual post pages (SSG with dynamic routes): Static generation for each post
- About page (SSG): Purely static content
- Profile page (SSR): Server-side rendered for dynamic user content

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the blog.

## Pages

- `/` - Home page with post previews
- `/posts/[id]` - Individual post pages
- `/about` - About page
- `/profile` - User profile with SSR

## Rendering Strategies

- **SSG (Static Site Generation)**: Home, About, Posts - generated at build time
- **SSR (Server-Side Rendering)**: Profile - rendered on each request
