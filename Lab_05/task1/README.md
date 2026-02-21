# Lab 5.1: Typed Components & Props Validation

## Interfaces and Types

### `User` (interface)
Describes the shape of user data: `name`, `email`, and `age`. Used by `UserCard` and ensures all user objects have the same structure.

### `SkillLevel` (type alias)
Union type: `'Beginner' | 'Intermediate' | 'Expert'`. Used for skill proficiency so only these values are allowed (Ch. 6, p. 97).

### `Skill` (interface)
Describes a skill: `id`, `name`, and `level` (typed as `SkillLevel`). Used by `SkillList` for the skills array.

### `UserCardProps`
- `user: User` — required user object
- `isActive?: boolean` — optional; controls opacity (default `true`)
- `children: React.ReactNode` — any renderable content (e.g. Bio, Status sections)

### `SkillListProps`
- `skills: Skill[]` — array of skills; each item is typed with the `Skill` interface

## Project structure

- `types.ts` — shared interfaces and type aliases
- `UserCard.tsx` — displays user info and optional `children`
- `SkillList.tsx` — lists skills with conditional styling by `SkillLevel`
- `App.tsx` — sample data and composition of both components

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Project compiles with **strict** TypeScript and no `any`.
