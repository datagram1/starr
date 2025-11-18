# Parallel Agent Execution Plan - Frontend Migration

## Overview
This document provides completely independent instructions for running multiple Claude Code agents simultaneously to accelerate the frontend migration. Each agent works on an isolated branch with self-contained tasks that don't require cross-referencing other documents.

**Reference Document:** `todo/frontend_tasks.md` contains the complete migration plan, but you don't need to read it to complete your assigned tasks below.

---

## ⚠️ Prerequisites

**Before starting any parallel agents:**
- Agent 1 must complete their task: Create new React app in `/frontend` directory
- Main branch must have the initial React app committed and pushed
- All agents should pull latest main before creating their branches

---

## 🌊 Wave 1: Phase 1 - Initial Setup (6 Agents)

### Agent 1: React App Creation
**Branch:** `feature/react-app-init`
**Status:** START FIRST

**Complete Instructions:**

You are creating the initial React + TypeScript + Vite application.

**Steps:**
1. From the project root, create the new frontend app:
   ```bash
   npm create vite@latest frontend -- --template react-ts
   ```

2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Test that the app runs:
   ```bash
   npm run dev
   ```
   - Verify it opens at http://localhost:5173
   - Stop the dev server

5. Create a basic README:
   ```bash
   cat > README.md << 'EOF'
   # Starr Frontend

   Modern React frontend for the Starr ERP system (Tryton fork).

   ## Tech Stack
   - React 18+
   - TypeScript
   - Vite
   - Tailwind CSS (to be added)
   - shadcn/ui (to be added)

   ## Development

   ```bash
   npm install
   npm run dev
   ```

   ## Build

   ```bash
   npm run build
   ```
   EOF
   ```

6. Update the main README at project root to mention the new frontend:
   ```bash
   cd ..
   echo "" >> README.md
   echo "## Frontend Development" >> README.md
   echo "" >> README.md
   echo "The new React-based frontend is located in the \`frontend/\` directory. See [frontend/README.md](frontend/README.md) for details." >> README.md
   ```

7. Commit and push:
   ```bash
   git add .
   git commit -m "feat: initialize React + TypeScript + Vite frontend

   - Create new frontend directory with Vite + React + TypeScript
   - Add basic project structure
   - Add development and build scripts
   - Update main README with frontend info

   🤖 Generated with [Claude Code](https://claude.com/claude-code)

   Co-Authored-By: Claude <noreply@anthropic.com>"

   git push origin feature/react-app-init
   ```

8. Create a Pull Request and merge to main
9. Notify others that they can begin Wave 1 tasks

**Done!** Other agents can now start their work.

---

### Agent 2: Vite Configuration & TypeScript
**Branch:** `feature/vite-typescript-config`
**Status:** Start after Agent 1 merges

**Complete Instructions:**

You are configuring Vite build settings and TypeScript with strict mode.

**Steps:**

1. Pull latest main and create your branch:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/vite-typescript-config
   cd frontend
   ```

2. Update `vite.config.ts` with comprehensive settings:
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import path from 'path'

   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [react()],
     resolve: {
       alias: {
         '@': path.resolve(__dirname, './src'),
         '@/components': path.resolve(__dirname, './src/components'),
         '@/hooks': path.resolve(__dirname, './src/hooks'),
         '@/utils': path.resolve(__dirname, './src/utils'),
         '@/types': path.resolve(__dirname, './src/types'),
         '@/api': path.resolve(__dirname, './src/api'),
         '@/stores': path.resolve(__dirname, './src/stores'),
         '@/styles': path.resolve(__dirname, './src/styles'),
       },
     },
     server: {
       port: 5173,
       strictPort: false,
       host: true,
       open: true,
     },
     build: {
       outDir: 'dist',
       sourcemap: true,
       rollupOptions: {
         output: {
           manualChunks: {
             vendor: ['react', 'react-dom'],
           },
         },
       },
     },
   })
   ```

3. Install path types:
   ```bash
   npm install -D @types/node
   ```

4. Update `tsconfig.json` with strict mode and path mappings:
   ```json
   {
     "compilerOptions": {
       "target": "ES2020",
       "useDefineForClassFields": true,
       "lib": ["ES2020", "DOM", "DOM.Iterable"],
       "module": "ESNext",
       "skipLibCheck": true,

       /* Bundler mode */
       "moduleResolution": "bundler",
       "allowImportingTsExtensions": true,
       "resolveJsonModule": true,
       "isolatedModules": true,
       "noEmit": true,
       "jsx": "react-jsx",

       /* Linting */
       "strict": true,
       "noUnusedLocals": true,
       "noUnusedParameters": true,
       "noFallthroughCasesInSwitch": true,
       "noImplicitReturns": true,
       "noUncheckedIndexedAccess": true,

       /* Path Mappings */
       "baseUrl": ".",
       "paths": {
         "@/*": ["./src/*"],
         "@/components/*": ["./src/components/*"],
         "@/hooks/*": ["./src/hooks/*"],
         "@/utils/*": ["./src/utils/*"],
         "@/types/*": ["./src/types/*"],
         "@/api/*": ["./src/api/*"],
         "@/stores/*": ["./src/stores/*"],
         "@/styles/*": ["./src/styles/*"]
       }
     },
     "include": ["src"],
     "references": [{ "path": "./tsconfig.node.json" }]
   }
   ```

5. Update `tsconfig.node.json`:
   ```json
   {
     "compilerOptions": {
       "composite": true,
       "skipLibCheck": true,
       "module": "ESNext",
       "moduleResolution": "bundler",
       "allowSyntheticDefaultImports": true
     },
     "include": ["vite.config.ts"]
   }
   ```

6. Add build and type-check scripts to `package.json`:
   ```bash
   npm pkg set scripts.type-check="tsc --noEmit"
   npm pkg set scripts.build="tsc && vite build"
   npm pkg set scripts.preview="vite preview"
   ```

7. Test everything works:
   ```bash
   npm run type-check
   npm run build
   npm run preview
   ```

8. Commit and push:
   ```bash
   cd ..
   git add .
   git commit -m "feat: configure Vite build and TypeScript strict mode

   - Add comprehensive Vite configuration with path aliases
   - Enable TypeScript strict mode with additional checks
   - Configure build optimizations and code splitting
   - Add type-check script to package.json
   - Configure dev server settings

   🤖 Generated with [Claude Code](https://claude.com/claude-code)

   Co-Authored-By: Claude <noreply@anthropic.com>"

   git push origin feature/vite-typescript-config
   ```

9. Create Pull Request

**Done!**

---

### Agent 3: Code Quality Tools (ESLint + Prettier)
**Branch:** `feature/code-quality`
**Status:** Start after Agent 1 merges

**Complete Instructions:**

You are setting up ESLint and Prettier for code quality and formatting.

**Steps:**

1. Pull latest main and create your branch:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/code-quality
   cd frontend
   ```

2. Install ESLint and Prettier dependencies:
   ```bash
   npm install -D eslint @eslint/js @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh prettier eslint-config-prettier eslint-plugin-prettier
   ```

3. Create `.eslintrc.cjs`:
   ```javascript
   module.exports = {
     root: true,
     env: { browser: true, es2020: true },
     extends: [
       'eslint:recommended',
       'plugin:@typescript-eslint/recommended',
       'plugin:@typescript-eslint/recommended-requiring-type-checking',
       'plugin:react/recommended',
       'plugin:react/jsx-runtime',
       'plugin:react-hooks/recommended',
       'plugin:prettier/recommended',
     ],
     ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
     parser: '@typescript-eslint/parser',
     parserOptions: {
       ecmaVersion: 'latest',
       sourceType: 'module',
       project: ['./tsconfig.json'],
       tsconfigRootDir: __dirname,
     },
     plugins: ['react-refresh', '@typescript-eslint'],
     rules: {
       'react-refresh/only-export-components': [
         'warn',
         { allowConstantExport: true },
       ],
       '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
       '@typescript-eslint/no-explicit-any': 'warn',
       'react/prop-types': 'off',
     },
     settings: {
       react: {
         version: 'detect',
       },
     },
   }
   ```

4. Create `.prettierrc`:
   ```json
   {
     "semi": true,
     "trailingComma": "es5",
     "singleQuote": true,
     "printWidth": 80,
     "tabWidth": 2,
     "useTabs": false,
     "arrowParens": "always",
     "endOfLine": "lf"
   }
   ```

5. Create `.prettierignore`:
   ```
   node_modules
   dist
   build
   coverage
   .vite
   ```

6. Add scripts to `package.json`:
   ```bash
   npm pkg set scripts.lint="eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
   npm pkg set scripts.lint:fix="eslint . --ext ts,tsx --fix"
   npm pkg set scripts.format="prettier --write \"src/**/*.{ts,tsx,json,css,md}\""
   npm pkg set scripts.format:check="prettier --check \"src/**/*.{ts,tsx,json,css,md}\""
   ```

7. Test linting and formatting:
   ```bash
   npm run lint
   npm run format
   npm run lint
   ```

8. Commit and push:
   ```bash
   cd ..
   git add .
   git commit -m "feat: set up ESLint and Prettier for code quality

   - Install ESLint with TypeScript and React plugins
   - Configure Prettier with project standards
   - Add lint and format scripts
   - Enable strict TypeScript rules
   - Configure React Hooks linting

   🤖 Generated with [Claude Code](https://claude.com/claude-code)

   Co-Authored-By: Claude <noreply@anthropic.com>"

   git push origin feature/code-quality
   ```

9. Create Pull Request

**Done!**

---

### Agent 4: Environment Configuration
**Branch:** `feature/env-config`
**Status:** Start after Agent 1 merges

**Complete Instructions:**

You are setting up environment variable configuration for the frontend.

**Steps:**

1. Pull latest main and create your branch:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/env-config
   cd frontend
   ```

2. Create `.env.example` file:
   ```bash
   cat > .env.example << 'EOF'
   # Starr Frontend Environment Variables

   # API Configuration
   VITE_API_BASE_URL=http://localhost:8000
   VITE_API_TIMEOUT=30000

   # RPC Configuration
   VITE_RPC_URL=http://localhost:8000/rpc
   VITE_RPC_DATABASE=starr

   # Application Configuration
   VITE_APP_NAME=Starr
   VITE_APP_VERSION=1.0.0
   VITE_APP_ENVIRONMENT=development

   # Feature Flags
   VITE_ENABLE_DARK_MODE=true
   VITE_ENABLE_STORYBOOK=true
   VITE_ENABLE_DEVTOOLS=true

   # Session Configuration
   VITE_SESSION_TIMEOUT=3600000
   VITE_TOKEN_REFRESH_INTERVAL=300000
   EOF
   ```

3. Create `.env.local` (for local development):
   ```bash
   cat > .env.local << 'EOF'
   # Local Development Environment
   VITE_API_BASE_URL=http://localhost:8000
   VITE_RPC_URL=http://localhost:8000/rpc
   VITE_RPC_DATABASE=starr_dev
   VITE_APP_ENVIRONMENT=local
   VITE_ENABLE_DEVTOOLS=true
   EOF
   ```

4. Ensure `.env.local` is in `.gitignore`:
   ```bash
   echo "" >> .gitignore
   echo "# Environment variables" >> .gitignore
   echo ".env.local" >> .gitignore
   echo ".env.*.local" >> .gitignore
   ```

5. Create environment variable types in `src/vite-env.d.ts`:
   ```typescript
   /// <reference types="vite/client" />

   interface ImportMetaEnv {
     // API Configuration
     readonly VITE_API_BASE_URL: string
     readonly VITE_API_TIMEOUT: string

     // RPC Configuration
     readonly VITE_RPC_URL: string
     readonly VITE_RPC_DATABASE: string

     // Application Configuration
     readonly VITE_APP_NAME: string
     readonly VITE_APP_VERSION: string
     readonly VITE_APP_ENVIRONMENT: 'development' | 'staging' | 'production' | 'local'

     // Feature Flags
     readonly VITE_ENABLE_DARK_MODE: string
     readonly VITE_ENABLE_STORYBOOK: string
     readonly VITE_ENABLE_DEVTOOLS: string

     // Session Configuration
     readonly VITE_SESSION_TIMEOUT: string
     readonly VITE_TOKEN_REFRESH_INTERVAL: string
   }

   interface ImportMeta {
     readonly env: ImportMetaEnv
   }
   ```

6. Create environment validation utility `src/utils/env.ts`:
   ```typescript
   export const env = {
     api: {
       baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
       timeout: parseInt(import.meta.env.VITE_API_TIMEOUT || '30000', 10),
     },
     rpc: {
       url: import.meta.env.VITE_RPC_URL || 'http://localhost:8000/rpc',
       database: import.meta.env.VITE_RPC_DATABASE || 'starr',
     },
     app: {
       name: import.meta.env.VITE_APP_NAME || 'Starr',
       version: import.meta.env.VITE_APP_VERSION || '1.0.0',
       environment: import.meta.env.VITE_APP_ENVIRONMENT || 'development',
     },
     features: {
       darkMode: import.meta.env.VITE_ENABLE_DARK_MODE === 'true',
       storybook: import.meta.env.VITE_ENABLE_STORYBOOK === 'true',
       devtools: import.meta.env.VITE_ENABLE_DEVTOOLS === 'true',
     },
     session: {
       timeout: parseInt(import.meta.env.VITE_SESSION_TIMEOUT || '3600000', 10),
       refreshInterval: parseInt(import.meta.env.VITE_TOKEN_REFRESH_INTERVAL || '300000', 10),
     },
   } as const;

   // Validate required environment variables
   export function validateEnv(): void {
     const required = [
       'VITE_API_BASE_URL',
       'VITE_RPC_URL',
     ];

     const missing = required.filter((key) => !import.meta.env[key]);

     if (missing.length > 0) {
       throw new Error(
         `Missing required environment variables: ${missing.join(', ')}\n` +
         'Please check your .env file.'
       );
     }
   }
   ```

7. Create `ENV.md` documentation:
   ```bash
   cat > ENV.md << 'EOF'
   # Environment Variables

   This document describes all environment variables used in the Starr frontend.

   ## Setup

   1. Copy `.env.example` to `.env.local`:
      ```bash
      cp .env.example .env.local
      ```

   2. Update values in `.env.local` for your local environment

   3. Never commit `.env.local` to version control

   ## Variables

   ### API Configuration

   - `VITE_API_BASE_URL`: Base URL for API requests (default: http://localhost:8000)
   - `VITE_API_TIMEOUT`: API request timeout in milliseconds (default: 30000)

   ### RPC Configuration

   - `VITE_RPC_URL`: URL for Tryton RPC endpoint (default: http://localhost:8000/rpc)
   - `VITE_RPC_DATABASE`: Database name for RPC connections (default: starr)

   ### Application Configuration

   - `VITE_APP_NAME`: Application name displayed in UI (default: Starr)
   - `VITE_APP_VERSION`: Application version (default: 1.0.0)
   - `VITE_APP_ENVIRONMENT`: Environment name (development, staging, production, local)

   ### Feature Flags

   - `VITE_ENABLE_DARK_MODE`: Enable dark mode support (default: true)
   - `VITE_ENABLE_STORYBOOK`: Enable Storybook (default: true)
   - `VITE_ENABLE_DEVTOOLS`: Enable development tools (default: true)

   ### Session Configuration

   - `VITE_SESSION_TIMEOUT`: Session timeout in milliseconds (default: 3600000 = 1 hour)
   - `VITE_TOKEN_REFRESH_INTERVAL`: Token refresh interval in milliseconds (default: 300000 = 5 minutes)

   ## Usage

   Import the validated environment object:

   ```typescript
   import { env } from '@/utils/env';

   const apiUrl = env.api.baseUrl;
   const isDarkModeEnabled = env.features.darkMode;
   ```

   ## Validation

   Environment variables are validated on app startup. Missing required variables will throw an error.
   EOF
   ```

8. Create utils directory if it doesn't exist:
   ```bash
   mkdir -p src/utils
   ```

9. Test that validation works by importing it in `src/main.tsx`:
   ```typescript
   // Add at the top of src/main.tsx
   import { validateEnv } from './utils/env';

   // Validate environment before app starts
   validateEnv();
   ```

10. Commit and push:
    ```bash
    cd ..
    git add .
    git commit -m "feat: set up environment variable configuration

    - Create .env.example with all required variables
    - Add TypeScript types for environment variables
    - Create environment validation utility
    - Add ENV.md documentation
    - Configure local development environment

    🤖 Generated with [Claude Code](https://claude.com/claude-code)

    Co-Authored-By: Claude <noreply@anthropic.com>"

    git push origin feature/env-config
    ```

11. Create Pull Request

**Done!**

---

### Agent 5: Development Tools Setup
**Branch:** `feature/dev-tools`
**Status:** Start after Agent 1 merges

**Complete Instructions:**

You are setting up Storybook, Vitest, React Testing Library, Playwright, and Husky.

**Steps:**

1. Pull latest main and create your branch:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/dev-tools
   cd frontend
   ```

2. Install Storybook:
   ```bash
   npx storybook@latest init --type react --builder vite --yes
   ```

3. Install testing libraries:
   ```bash
   npm install -D vitest @vitest/ui jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
   ```

4. Install Playwright:
   ```bash
   npm install -D @playwright/test
   npx playwright install
   ```

5. Install Husky and lint-staged:
   ```bash
   npm install -D husky lint-staged
   npx husky init
   ```

6. Create `vitest.config.ts`:
   ```typescript
   import { defineConfig } from 'vitest/config';
   import react from '@vitejs/plugin-react';
   import path from 'path';

   export default defineConfig({
     plugins: [react()],
     test: {
       globals: true,
       environment: 'jsdom',
       setupFiles: ['./src/test/setup.ts'],
       coverage: {
         provider: 'v8',
         reporter: ['text', 'json', 'html'],
         exclude: [
           'node_modules/',
           'src/test/',
           '**/*.d.ts',
           '**/*.config.*',
           '**/mockData/',
           '**/*.test.{ts,tsx}',
         ],
       },
     },
     resolve: {
       alias: {
         '@': path.resolve(__dirname, './src'),
       },
    },
   });
   ```

7. Create test setup file `src/test/setup.ts`:
   ```typescript
   import { expect, afterEach } from 'vitest';
   import { cleanup } from '@testing-library/react';
   import * as matchers from '@testing-library/jest-dom/matchers';

   expect.extend(matchers);

   afterEach(() => {
     cleanup();
   });
   ```

8. Create example test `src/App.test.tsx`:
   ```typescript
   import { describe, it, expect } from 'vitest';
   import { render, screen } from '@testing-library/react';
   import App from './App';

   describe('App', () => {
     it('renders without crashing', () => {
       render(<App />);
       expect(screen.getByRole('heading')).toBeInTheDocument();
     });
   });
   ```

9. Create Playwright config `playwright.config.ts`:
   ```typescript
   import { defineConfig, devices } from '@playwright/test';

   export default defineConfig({
     testDir: './e2e',
     fullyParallel: true,
     forbidOnly: !!process.env.CI,
     retries: process.env.CI ? 2 : 0,
     workers: process.env.CI ? 1 : undefined,
     reporter: 'html',
     use: {
       baseURL: 'http://localhost:5173',
       trace: 'on-first-retry',
     },
     projects: [
       {
         name: 'chromium',
         use: { ...devices['Desktop Chrome'] },
       },
     ],
     webServer: {
       command: 'npm run dev',
       url: 'http://localhost:5173',
       reuseExistingServer: !process.env.CI,
     },
   });
   ```

10. Create example E2E test `e2e/example.spec.ts`:
    ```typescript
    import { test, expect } from '@playwright/test';

    test('homepage has title', async ({ page }) => {
      await page.goto('/');
      await expect(page).toHaveTitle(/Vite \+ React \+ TS/);
    });
    ```

11. Configure Husky pre-commit hook `.husky/pre-commit`:
    ```bash
    cat > .husky/pre-commit << 'EOF'
    #!/usr/bin/env sh
    . "$(dirname -- "$0")/_/husky.sh"

    cd frontend && npm run lint-staged
    EOF
    chmod +x .husky/pre-commit
    ```

12. Add lint-staged configuration to `package.json`:
    ```bash
    npm pkg set lint-staged.='*.{ts,tsx}'
    npm pkg set lint-staged.=eslint --fix
    npm pkg set lint-staged.=prettier --write
    ```

13. Add test scripts to `package.json`:
    ```bash
    npm pkg set scripts.test="vitest"
    npm pkg set scripts.test:ui="vitest --ui"
    npm pkg set scripts.test:coverage="vitest --coverage"
    npm pkg set scripts.e2e="playwright test"
    npm pkg set scripts.e2e:ui="playwright test --ui"
    npm pkg set scripts.storybook="storybook dev -p 6006"
    npm pkg set scripts.build-storybook="storybook build"
    ```

14. Create VS Code extensions recommendations `.vscode/extensions.json`:
    ```json
    {
      "recommendations": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "bradlc.vscode-tailwindcss",
        "ms-playwright.playwright",
        "vitest.explorer"
      ]
    }
    ```

15. Create VS Code settings `.vscode/settings.json`:
    ```json
    {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true,
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
      },
      "typescript.tsdk": "node_modules/typescript/lib",
      "typescript.enablePromptUseWorkspaceTsdk": true,
      "files.associations": {
        "*.css": "tailwindcss"
      }
    }
    ```

16. Run tests to verify setup:
    ```bash
    npm run test -- --run
    npm run build-storybook
    ```

17. Commit and push:
    ```bash
    cd ..
    git add .
    git commit -m "feat: set up development tools and testing framework

    - Install and configure Storybook for component development
    - Set up Vitest with React Testing Library
    - Configure Playwright for E2E testing
    - Add Husky pre-commit hooks with lint-staged
    - Create VS Code workspace settings and extensions
    - Add test scripts to package.json
    - Create example tests

    🤖 Generated with [Claude Code](https://claude.com/claude-code)

    Co-Authored-By: Claude <noreply@anthropic.com>"

    git push origin feature/dev-tools
    ```

18. Create Pull Request

**Done!**

---

### Agent 6: Core Dependencies Installation
**Branch:** `feature/core-deps`
**Status:** Start after Agent 1 merges

**Complete Instructions:**

You are installing React Router, Tailwind CSS, shadcn/ui, Zustand, React Query, and Axios.

**Steps:**

1. Pull latest main and create your branch:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/core-deps
   cd frontend
   ```

2. Install React Router:
   ```bash
   npm install react-router-dom
   npm install -D @types/react-router-dom
   ```

3. Install and configure Tailwind CSS:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. Update `tailwind.config.js`:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

5. Update `src/index.css` with Tailwind directives:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   :root {
     font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
     line-height: 1.5;
     font-weight: 400;

     color-scheme: light dark;
     color: rgba(255, 255, 255, 0.87);
     background-color: #242424;

     font-synthesis: none;
     text-rendering: optimizeLegibility;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
   }

   body {
     margin: 0;
     display: flex;
     place-items: center;
     min-width: 320px;
     min-height: 100vh;
   }
   ```

6. Install shadcn/ui dependencies:
   ```bash
   npm install class-variance-authority clsx tailwind-merge lucide-react
   npm install -D @types/node
   ```

7. Create shadcn/ui config `components.json`:
   ```json
   {
     "$schema": "https://ui.shadcn.com/schema.json",
     "style": "default",
     "rsc": false,
     "tsx": true,
     "tailwind": {
       "config": "tailwind.config.js",
       "css": "src/index.css",
       "baseColor": "slate",
       "cssVariables": true
     },
     "aliases": {
       "components": "@/components",
       "utils": "@/lib/utils"
     }
   }
   ```

8. Create utils for shadcn/ui `src/lib/utils.ts`:
   ```typescript
   import { type ClassValue, clsx } from 'clsx';
   import { twMerge } from 'tailwind-merge';

   export function cn(...inputs: ClassValue[]) {
     return twMerge(clsx(inputs));
   }
   ```

9. Install Zustand:
   ```bash
   npm install zustand
   ```

10. Install React Query:
    ```bash
    npm install @tanstack/react-query @tanstack/react-query-devtools
    ```

11. Install Axios:
    ```bash
    npm install axios
    ```

12. Install additional utility libraries:
    ```bash
    npm install date-fns
    npm install react-hook-form
    npm install zod
    npm install @hookform/resolvers
    ```

13. Verify all dependencies in `package.json`:
    ```bash
    npm list --depth=0
    ```

14. Test that app still runs:
    ```bash
    npm run dev
    ```
    - Open http://localhost:5173
    - Verify no errors in console
    - Stop dev server

15. Test that build works:
    ```bash
    npm run build
    ```

16. Create a simple test component to verify Tailwind `src/components/Test.tsx`:
    ```typescript
    export function Test() {
      return (
        <div className="p-4 bg-blue-500 text-white rounded-lg">
          Tailwind CSS is working!
        </div>
      );
    }
    ```

17. Update `src/App.tsx` to test Tailwind:
    ```typescript
    import { Test } from './components/Test';

    function App() {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <Test />
        </div>
      );
    }

    export default App;
    ```

18. Run dev server and verify Tailwind styles appear:
    ```bash
    npm run dev
    ```

19. Commit and push:
    ```bash
    cd ..
    git add .
    git commit -m "feat: install core dependencies

    - Install React Router for routing
    - Install and configure Tailwind CSS
    - Set up shadcn/ui foundation with utilities
    - Install Zustand for state management
    - Install React Query for data fetching
    - Install Axios for HTTP requests
    - Add utility libraries (date-fns, react-hook-form, zod)
    - Create test component to verify Tailwind works

    🤖 Generated with [Claude Code](https://claude.com/claude-code)

    Co-Authored-By: Claude <noreply@anthropic.com>"

    git push origin feature/core-deps
    ```

20. Create Pull Request

**Done!**

---

## 📋 Next Steps After Wave 1

Once all Wave 1 agents have completed and merged their work:

1. All agents pull latest main
2. Verify the frontend runs without errors
3. Begin Wave 2 (instructions to be added in next update)

---

## 📊 Wave 1 Progress Tracking

- [ ] Agent 1: React App Creation
- [ ] Agent 2: Vite Configuration & TypeScript
- [ ] Agent 3: Code Quality Tools
- [ ] Agent 4: Environment Configuration
- [ ] Agent 5: Development Tools Setup
- [ ] Agent 6: Core Dependencies Installation

---

## 🚀 Quick Start Commands (For All Agents)

```bash
# Pull latest main
git checkout main
git pull origin main

# Create your feature branch
git checkout -b feature/[your-task-name]

# Do your work...

# Test before committing (when applicable)
cd frontend
npm run lint
npm run type-check
npm run test -- --run

# Commit and push
cd ..
git add .
git commit -m "your commit message"
git push origin feature/[your-task-name]

# Create PR on GitHub
```

---

**Last Updated:** 2025-01-18
**Current Wave:** Wave 1 - Initial Setup
**Next Wave:** Wave 2 - Design System (coming after Wave 1 completion)
