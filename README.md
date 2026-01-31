# Lab 03: React Components and Hooks

## Структура проекта

Проект разделен на две задачи согласно требованиям:

```
Lab_03/
├── task1/          # Lab 3.1: Component with State - Advanced Counter
└── task2/          # Lab 3.2: Data Loading with useEffect
```

## Lab 3.1: Component with State - Advanced Counter

**Расположение:** `Lab_03/task1/`

Реализует компонент счетчика с расширенной функциональностью:
- `StepCounter` - компонент счетчика с props и state
- `CounterApp` - родительский компонент с двумя независимыми счетчиками

**Запуск:**
```bash
cd task1
npm install
npm start
```

Подробности см. в [task1/README.md](task1/README.md)

## Lab 3.2: Data Loading with useEffect

**Расположение:** `Lab_03/task2/`

Реализует компонент для загрузки данных пользователя из API:
- `UserProfile` - компонент с useEffect для загрузки данных
- `UserProfileApp` - родительский компонент с управлением userId

**Запуск:**
```bash
cd task2
npm install
npm start
```

Подробности см. в [task2/README.md](task2/README.md)

## Технические требования

- React 18+
- Функциональные компоненты и хуки
- camelCase для именования
- Значимые комментарии в коде
- Правильная структура папок

## Структура файлов

Каждая задача содержит:
- `package.json` - зависимости проекта
- `public/index.html` - HTML шаблон
- `src/` - исходный код React приложения
- `README.md` - документация задачи
- `.gitignore` - игнорируемые файлы

