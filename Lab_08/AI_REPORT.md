# AI_REPORT.md

## Tool Used
GitHub Copilot (Cursor AI) for code generation and assistance in creating the Next.js blog application.

## Prompts Used
- "Create a Next.js project with TypeScript for a blog application, including setup and basic structure as per Lab 8.1 instructions. Include types for Post and Author, and mock data in lib/api.ts."
- "Implement blog pages using different rendering strategies: home page (SSG), individual posts (SSG dynamic), about page (SSG), profile page (SSR)."
- "Create README files and AI report for Lab 8."

## How Code Was Modified & Verified
1. **Project Setup**: Created two Next.js projects (task1 and task2) using `npx create-next-app` with TypeScript and Tailwind CSS.
2. **Data Structures**: Added TypeScript interfaces in `types/index.ts` and mock data functions in `lib/api.ts`.
3. **Pages Implementation**:
   - Home page: Static generation displaying post previews
   - Dynamic post pages: SSG with `generateStaticParams` for static generation of routes
   - About page: Pure SSG static content
   - Profile page: SSR with `dynamic = 'force-dynamic'` for per-request rendering
4. **Verification**: 
   - Ran `npm run dev` to ensure projects start without errors
   - Checked TypeScript compilation
   - Verified routing and data fetching work correctly
   - Tested different rendering strategies by examining build output

## What I Learned
- **SSR vs SSG**: Understanding when to use Server-Side Rendering (for dynamic, user-specific content) vs Static Site Generation (for content that can be pre-built).
- **Next.js App Router**: Using the modern App Router with dynamic routes, static generation, and forced dynamic rendering.
- **TypeScript Integration**: Properly typing data structures and API functions in a Next.js application.
- **Mock Data Patterns**: Creating realistic mock data and API functions for development and testing.
- **Project Structure**: Organizing a multi-task lab with clear separation between setup and implementation phases.