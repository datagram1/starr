# Starr Frontend

Modern React frontend for Starr ERP (Tryton fork) built with React, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **React 19+** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS (to be added)
- **shadcn/ui** - Component library (to be added)
- **React Query** - Data fetching (to be added)
- **Zustand** - State management (to be added)
- **React Router** - Routing (to be added)

## Project Structure

```
frontend/
├── src/
│   ├── api/          # API client and endpoints
│   ├── components/   # React components
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utility libraries
│   ├── stores/       # Zustand stores
│   ├── types/        # TypeScript type definitions
│   └── utils/        # Utility functions
├── public/           # Static assets
└── ...config files
```

## Getting Started

### Development

```bash
npm run dev
```

Starts the development server at `http://localhost:3000`

### Build

```bash
npm run build
```

Creates an optimized production build

### Preview

```bash
npm run preview
```

Preview the production build locally

### Linting

```bash
npm run lint
```

Run ESLint to check code quality

### Format

```bash
npm run format
```

Format code with Prettier

## Path Aliases

The project uses path aliases for cleaner imports:

- `@/*` - `./src/*`
- `@/components/*` - `./src/components/*`
- `@/lib/*` - `./src/lib/*`
- `@/hooks/*` - `./src/hooks/*`
- `@/utils/*` - `./src/utils/*`
- `@/stores/*` - `./src/stores/*`
- `@/types/*` - `./src/types/*`
- `@/api/*` - `./src/api/*`

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Available variables:
- `VITE_API_URL` - Backend API URL
- `VITE_APP_TITLE` - Application title
- `VITE_APP_VERSION` - Application version

## Migration Status

This is a gradual migration from the existing jQuery-based SAO client. See `todo/frontend_tasks.md` for the complete migration plan and progress.
