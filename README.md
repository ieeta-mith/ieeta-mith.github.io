# MITH Presentation Website

This is the repository for the MITH Website presentation. It contains all of the necessary files and resources to showcase the MITH project. It was developed using [React + Vite](https://vite.dev/guide/) with the following dependencies:

- `tailwindcss/vite`: v4.3.2
- `@tanstack/react-router`: v1.170.17
- `lucide-react`: v1.23.0
- `tailwindcss`: v4.3.2
- `tailwind-merge`: v3.6.0,

## Getting Started

To get started with the MITH Presentation Website, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone git@github.com:ieeta-mith/ieeta-mith.github.io.git
```

2. Navigate to the project directory:

```bash
cd ieeta-mith.github.io
```

3. Install the dependencies:

```bash
npm install
# or
yarn
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## Project Structure

```bash
.
├── public # Contains static assets such as images and icons
│   ├── favicon.svg
│   ├── fct-logo.svg
│   ├── icons.svg
│   ├── ieeta-logo.png
│   ├── logo.svg
│   ├── nav_icon.svg
│   └── ua-logo.png
└── src
    ├── components # UI Components used throughout the website
    │   ├── avatar.tsx
    │   ├── badge.tsx
    │   ├── button.tsx
    │   ├── card.tsx
    │   ├── dropdown.tsx
    │   ├── footer.tsx
    │   ├── navbar.tsx
    │   ├── not-found.tsx
    │   ├── server-error.tsx
    │   └── table.tsx
    ├── data # Contains data files for various sections of the website
    │   ├── dissertations.ts
    │   ├── publications.ts
    │   ├── reasearch-grants.ts
    │   ├── tasks.ts
    │   ├── team.ts
    │   └── tools.ts
    ├── lib # Contains utility functions and constants
    │   ├── constants.ts
    │   ├── types.ts
    │   └── utils.ts
    └── routes # Contains the route definitions and page components
        ├── index.tsx
        ├── jobs.tsx
        ├── results.tsx
        ├── __root.tsx
        ├── tasks.$taskId.tsx
        └── team.tsx
```