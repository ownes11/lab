# Lab 5.2: Typing State & Event Handlers

## Why `React.ChangeEvent<HTMLInputElement>` instead of `any`?

- **Type safety**: The handler receives a typed event, so `event.target` is known to be an `HTMLInputElement` and `event.target.value` is a string. With `any`, mistakes (e.g. wrong property names) are only found at runtime.
- **IDE support**: Autocomplete and refactoring work correctly.
- **Alignment with the book**: Ch. 6, p. 101 recommends typing event handlers with specific React types (e.g. `React.ChangeEvent<HTMLInputElement>`).

## When explicit generics are needed vs type inference

- **Explicit generics** (e.g. `useState<User[]>([])`): Needed when the initial value does not carry the full type (e.g. empty array `[]`). TypeScript cannot infer `User[]` from `[]`, so the generic is required (Ch. 6, p. 100).
- **Inference** (e.g. `useState("")`): When the initial value clearly has a type (string, number, etc.), TypeScript infers it and the generic can be omitted.
- **Same for events**: We use explicit types like `React.ChangeEvent<HTMLInputElement>` and `React.MouseEvent<HTMLButtonElement>` so the event and its `target` are correctly typed.

## Project structure

- `types.ts` — `User` interface (reused from Lab 5.1 concept)
- `UserCard.tsx` — reused to render each filtered user
- `SearchApp.tsx` — typed `useState`, `handleSearch` (ChangeEvent), `handleClear` (MouseEvent), filter logic, and “No results found” message

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

No `any`; all event handlers use the appropriate React event types.
