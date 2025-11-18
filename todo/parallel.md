# Parallel Agent Execution Plan - Frontend Migration

## Overview
This document provides instructions for running multiple Claude Code agents simultaneously to accelerate the frontend migration. Each agent works on an isolated branch and specific tasks.

---

## ⚠️ Prerequisites

**Before starting any parallel agents:**
- Agent 1 must complete Phase 1.1 Task 1: "Create new React app in `/frontend` directory"
- Main branch must have the initial React app committed
- All agents should pull latest main before creating their branches

---

## 🌊 Wave 1: Phase 1 - Initial Setup (6 Agents)

### Agent 1: Vite Configuration
**Branch:** `feature/vite-config`
**Status:** Start after React app is created

**Instructions:**
```
Work on Phase 1.1 tasks 2-3 from todo/frontend_tasks.md:
1. Set up Vite build configuration in the /frontend directory
2. Configure TypeScript with strict mode
3. Ensure the app runs with `npm run dev`
4. Add build scripts to package.json
5. Test that builds work with `npm run build`
6. Commit your changes and push to feature/vite-config branch
```

---

### Agent 2: Code Quality Tools
**Branch:** `feature/code-quality`
**Status:** Can start immediately after React app exists

**Instructions:**
```
Work on Phase 1.1 tasks 4-5 from todo/frontend_tasks.md:
1. Set up ESLint with React and TypeScript rules in /frontend
2. Configure Prettier for code formatting
3. Add .eslintrc.json and .prettierrc files
4. Configure path aliases (@/ for src, @/components, etc.) in tsconfig.json and vite.config.ts
5. Add lint and format scripts to package.json
6. Test that `npm run lint` and `npm run format` work
7. Commit and push to feature/code-quality branch
```

---

### Agent 3: Environment Configuration
**Branch:** `feature/env-config`
**Status:** Can start immediately after React app exists

**Instructions:**
```
Work on Phase 1.1 task 6 from todo/frontend_tasks.md:
1. Create .env.example file with API endpoint configurations
2. Set up .env.local for local development (add to .gitignore if not already)
3. Create environment variable types in src/types/env.d.ts
4. Add validation for required environment variables
5. Document all environment variables in a ENV.md file
6. Commit and push to feature/env-config branch
```

---

### Agent 4: Development Tools Setup
**Branch:** `feature/dev-tools`
**Status:** Can start immediately after React app exists

**Instructions:**
```
Work on Phase 1.3 tasks 1-6 from todo/frontend_tasks.md:
1. Set up Storybook for component development in /frontend
2. Configure Vitest for unit testing
3. Set up React Testing Library
4. Configure Playwright for E2E testing
5. Set up Git hooks with Husky (lint-staged) - run on pre-commit
6. Create .vscode/extensions.json with recommended extensions
7. Create .vscode/settings.json with project settings
8. Add test scripts to package.json
9. Create example test file to verify setup works
10. Commit and push to feature/dev-tools branch
```

---

### Agent 5: Theme System Architecture
**Branch:** `feature/theme-foundation`
**Status:** Can start immediately after React app exists

**Instructions:**
```
Work on Phase 1.4 from todo/frontend_tasks.md:
1. Design theme architecture using CSS variables approach
2. Create src/contexts/ThemeContext.tsx with theme provider
3. Create src/hooks/useTheme.ts hook
4. Define light theme tokens in src/styles/themes/light.ts (colors, spacing, typography)
5. Define dark theme tokens in src/styles/themes/dark.ts
6. Create theme configuration schema in src/types/theme.ts
7. Set up theme persistence using localStorage
8. Create src/components/ThemeSwitcher.tsx component
9. Add theme switching demo to App.tsx
10. Document theme system in THEMING.md
11. Commit and push to feature/theme-foundation branch
```

---

### Agent 6: Core Dependencies Installation
**Branch:** `feature/core-deps`
**Status:** Can start immediately after React app exists

**Instructions:**
```
Work on Phase 1.2 tasks 1-7 from todo/frontend_tasks.md:
1. Install React Router DOM (npm install react-router-dom)
2. Install TypeScript type definitions for React Router
3. Install Tailwind CSS and configure (npx tailwindcss init -p)
4. Set up Tailwind in src/index.css
5. Install shadcn/ui CLI and initialize (npx shadcn-ui@latest init)
6. Install Zustand for state management (npm install zustand)
7. Install React Query (npm install @tanstack/react-query)
8. Install Axios (npm install axios)
9. Update package.json with all dependencies
10. Test that app still runs with new dependencies
11. Commit and push to feature/core-deps branch
```

---

## 🌊 Wave 2: Phase 2.1 & 2.2 - Design System (8 Agents)

**Prerequisites:** All Wave 1 agents must merge their work first

---

### Agent 7: Design Tokens & Tailwind Config
**Branch:** `feature/design-tokens`
**Status:** Requires Wave 1 completion

**Instructions:**
```
Work on Phase 2.1 from todo/frontend_tasks.md:
1. Define color palette in tailwind.config.js (primary, secondary, accent, neutral, semantic colors)
2. Configure Tailwind theme extensions
3. Set up CSS custom properties for theming in src/styles/variables.css
4. Define typography scale (font sizes, weights, line heights)
5. Define spacing scale (matching Tailwind defaults or custom)
6. Define responsive breakpoints (sm, md, lg, xl, 2xl)
7. Create animation/transition utilities
8. Document all design tokens in DESIGN_TOKENS.md
9. Create examples of each token in Storybook
10. Commit and push to feature/design-tokens branch
```

---

### Agent 8: shadcn Components Group 1
**Branch:** `feature/shadcn-components-1`
**Status:** Requires Wave 1 completion

**Instructions:**
```
Work on Phase 2.2 tasks 1-5 from todo/frontend_tasks.md:
Install the following shadcn/ui components:
1. npx shadcn-ui@latest add button
2. npx shadcn-ui@latest add input
3. npx shadcn-ui@latest add select
4. npx shadcn-ui@latest add dialog
5. npx shadcn-ui@latest add toast

For each component:
- Create a Storybook story showing usage
- Add TypeScript types
- Test in light and dark themes
- Document any customizations

Commit and push to feature/shadcn-components-1 branch
```

---

### Agent 9: shadcn Components Group 2
**Branch:** `feature/shadcn-components-2`
**Status:** Requires Wave 1 completion

**Instructions:**
```
Work on Phase 2.2 tasks 6-10 from todo/frontend_tasks.md:
Install the following shadcn/ui components:
1. npx shadcn-ui@latest add card
2. npx shadcn-ui@latest add table
3. npx shadcn-ui@latest add tabs
4. npx shadcn-ui@latest add accordion
5. npx shadcn-ui@latest add popover

For each component:
- Create a Storybook story showing usage
- Add TypeScript types
- Test in light and dark themes
- Document any customizations

Commit and push to feature/shadcn-components-2 branch
```

---

### Agent 10: shadcn Components Group 3
**Branch:** `feature/shadcn-components-3`
**Status:** Requires Wave 1 completion

**Instructions:**
```
Work on Phase 2.2 tasks 11-14 from todo/frontend_tasks.md:
Install the following shadcn/ui components:
1. npx shadcn-ui@latest add tooltip
2. npx shadcn-ui@latest add badge
3. npx shadcn-ui@latest add avatar
4. npx shadcn-ui@latest add skeleton

For each component:
- Create a Storybook story showing usage
- Add TypeScript types
- Test in light and dark themes
- Document any customizations

Commit and push to feature/shadcn-components-3 branch
```

---

### Agent 11: Layout Components
**Branch:** `feature/layout-components`
**Status:** Requires Wave 1 completion

**Instructions:**
```
Work on Phase 2.3 task 1 from todo/frontend_tasks.md:
Create custom layout components in src/components/layout/:
1. Container.tsx - responsive container with max-width
2. Grid.tsx - CSS grid wrapper with props for columns, gap
3. Stack.tsx - vertical flexbox layout with spacing
4. Flex.tsx - flexible flexbox layout with direction, justify, align props

For each component:
- Add TypeScript interfaces for props
- Create Storybook stories with examples
- Add responsive behavior
- Write unit tests
- Export from src/components/layout/index.ts

Commit and push to feature/layout-components branch
```

---

### Agent 12: Form Components
**Branch:** `feature/form-components`
**Status:** Requires Wave 1 completion

**Instructions:**
```
Work on Phase 2.3 task 3 from todo/frontend_tasks.md:
Create form components in src/components/form/:
1. FormField.tsx - wrapper for form fields with label and error
2. FormGroup.tsx - groups multiple form fields
3. FormLabel.tsx - accessible form labels
4. FormError.tsx - error message display
5. FormHelperText.tsx - help text for fields

For each component:
- Add TypeScript interfaces
- Integrate with React Hook Form (install if needed)
- Create Storybook stories
- Add accessibility (ARIA labels)
- Write unit tests
- Export from src/components/form/index.ts

Commit and push to feature/form-components branch
```

---

### Agent 13: State Components
**Branch:** `feature/state-components`
**Status:** Requires Wave 1 completion

**Instructions:**
```
Work on Phase 2.3 tasks 4-6 from todo/frontend_tasks.md:
Create state components in src/components/state/:
1. LoadingSpinner.tsx - spinner with sizes (sm, md, lg)
2. LoadingSkeleton.tsx - skeleton loader layouts
3. EmptyState.tsx - empty state with icon, title, description, action
4. ErrorBoundary.tsx - React error boundary wrapper
5. ErrorMessage.tsx - error display component

For each component:
- Add TypeScript interfaces
- Create Storybook stories
- Test different states
- Add accessibility
- Write unit tests
- Export from src/components/state/index.ts

Commit and push to feature/state-components branch
```

---

### Agent 14: Icon System & Navigation
**Branch:** `feature/icons-navigation`
**Status:** Requires Wave 1 completion

**Instructions:**
```
Work on Phase 2.3 tasks 2 and 7 from todo/frontend_tasks.md:

1. Icon System:
   - Install lucide-react (npm install lucide-react)
   - Create src/components/Icon.tsx wrapper component
   - Export commonly used icons from src/components/icons/index.ts
   - Create Storybook story showing all available icons

2. Navigation Components (basic structure):
   - Create src/components/navigation/Navbar.tsx (basic structure)
   - Create src/components/navigation/Sidebar.tsx (basic structure)
   - Create src/components/navigation/Breadcrumbs.tsx
   - Add TypeScript interfaces for navigation props
   - Create Storybook stories
   - Export from src/components/navigation/index.ts

Note: Navigation will be enhanced in later phases

Commit and push to feature/icons-navigation branch
```

---

## 🌊 Wave 3: Phase 2.4 - Routing (3 Agents)

**Prerequisites:** Wave 2 completion (especially Agent 6's React Router installation)

---

### Agent 15: Router Configuration
**Branch:** `feature/router-config`
**Status:** Requires Wave 2 completion

**Instructions:**
```
Work on Phase 2.4 tasks 1-2 from todo/frontend_tasks.md:
1. Set up React Router configuration in src/router/index.tsx
2. Create route definitions for main sections in src/router/routes.ts:
   - Dashboard route
   - Login route
   - Settings route
   - Placeholder routes for future views
3. Create route constants in src/constants/routes.ts
4. Set up router provider in main.tsx
5. Create basic route navigation test
6. Document routing structure in ROUTING.md

Commit and push to feature/router-config branch
```

---

### Agent 16: Protected Routes & Error Pages
**Branch:** `feature/protected-routes`
**Status:** Requires Agent 15 completion

**Instructions:**
```
Work on Phase 2.4 tasks 3-4 from todo/frontend_tasks.md:
1. Create ProtectedRoute component in src/components/ProtectedRoute.tsx
2. Implement authentication check (can be mock for now)
3. Add redirect to login for unauthenticated users
4. Create 404 Not Found page in src/pages/NotFound.tsx
5. Create 403 Forbidden page in src/pages/Forbidden.tsx
6. Create 500 Error page in src/pages/Error.tsx
7. Add error pages to router configuration
8. Test protected route behavior

Commit and push to feature/protected-routes branch
```

---

### Agent 17: Navigation Guards & History
**Branch:** `feature/nav-guards-history`
**Status:** Requires Agent 15 completion

**Instructions:**
```
Work on Phase 2.4 tasks 5-7 from todo/frontend_tasks.md:
1. Implement breadcrumb system in src/components/Breadcrumbs.tsx
2. Create breadcrumb context/hook for dynamic breadcrumbs
3. Set up navigation guards in src/router/guards.ts:
   - Auth guard
   - Permission guard
   - Unsaved changes guard
4. Create navigation history management utility
5. Add browser history integration
6. Create hook for navigation history access
7. Test navigation guard behavior

Commit and push to feature/nav-guards-history branch
```

---

## 🌊 Wave 4: Phase 3 - API Integration (4 Agents)

**Prerequisites:** Wave 1-3 completion

---

### Agent 18: API Client & Interceptors
**Branch:** `feature/api-client`
**Status:** Requires Wave 3 completion

**Instructions:**
```
Work on Phase 3.1 from todo/frontend_tasks.md:
1. Create Axios instance in src/api/client.ts
2. Implement request interceptors (add auth token, logging)
3. Implement response interceptors (error handling, token refresh)
4. Set up authentication token handling in src/api/auth.ts
5. Create API endpoint constants in src/api/endpoints.ts
6. Implement retry logic for failed requests
7. Create API error handling utilities in src/api/errors.ts
8. Set up request cancellation using AbortController
9. Add TypeScript types for API responses
10. Write unit tests for API client
11. Document API usage in API.md

Commit and push to feature/api-client branch
```

---

### Agent 19: RPC Client Migration
**Branch:** `feature/rpc-client`
**Status:** Requires Wave 3 completion

**Instructions:**
```
Work on Phase 3.2 from todo/frontend_tasks.md:
1. Analyze existing sao/src/rpc.js Tryton RPC protocol
2. Create TypeScript types for RPC in src/types/rpc.ts
3. Implement RPC client class in src/api/rpc/client.ts
4. Create RPC method wrappers in src/api/rpc/methods.ts
5. Implement batch request handling
6. Add request queuing/throttling
7. Create RPC error handling in src/api/rpc/errors.ts
8. Write unit tests for RPC client
9. Create examples of RPC usage
10. Document RPC protocol in RPC.md

Commit and push to feature/rpc-client branch
```

---

### Agent 20: React Query Setup
**Branch:** `feature/react-query`
**Status:** Requires Agent 18 completion

**Instructions:**
```
Work on Phase 3.3 from todo/frontend_tasks.md:
1. Configure QueryClient with defaults in src/api/queryClient.ts
2. Set up QueryClientProvider in main.tsx
3. Create custom hooks for data fetching in src/hooks/api/:
   - useQuery wrappers
   - useMutation wrappers
4. Implement optimistic updates utilities
5. Set up cache invalidation strategies
6. Create pagination hooks in src/hooks/api/usePagination.ts
7. Create infinite query hooks in src/hooks/api/useInfiniteQuery.ts
8. Add React Query DevTools (dev only)
9. Write examples for each hook type
10. Document React Query patterns in REACT_QUERY.md

Commit and push to feature/react-query branch
```

---

### Agent 21: State Management (Zustand)
**Branch:** `feature/state-management`
**Status:** Requires Wave 3 completion

**Instructions:**
```
Work on Phase 3.4 from todo/frontend_tasks.md:
1. Design global state structure
2. Create authentication store in src/stores/authStore.ts
3. Create user preferences store in src/stores/preferencesStore.ts
4. Create session store in src/stores/sessionStore.ts
5. Create UI state store in src/stores/uiStore.ts (sidebar, modals, etc.)
6. Create notification/toast store in src/stores/notificationStore.ts
7. Implement state persistence middleware using zustand/middleware
8. Create store DevTools integration
9. Add TypeScript types for all stores
10. Write unit tests for stores
11. Document state management in STATE_MANAGEMENT.md

Commit and push to feature/state-management branch
```

---

## 📋 Agent Coordination Guidelines

### Branch Naming Convention
- `feature/[task-name]` for feature branches
- `fix/[issue-name]` for bug fixes
- Keep branch names lowercase with hyphens

### Merge Strategy
1. Each agent creates a Pull Request when done
2. Review checklist:
   - [ ] All tests pass
   - [ ] No TypeScript errors
   - [ ] Storybook stories work
   - [ ] Documentation is updated
   - [ ] No merge conflicts
3. Merge to `main` after approval
4. Delete feature branch after merge

### Communication
- Each agent should document blockers in their PR description
- If waiting on another agent, note the dependency
- Update this document if tasks need reordering

### Testing Before PR
Each agent should run:
```bash
npm run lint
npm run type-check
npm run test
npm run build
```

All must pass before creating PR.

---

## 📊 Progress Tracking

### Wave 1 Status (6 agents)
- [ ] Agent 1: Vite Configuration
- [ ] Agent 2: Code Quality Tools
- [ ] Agent 3: Environment Configuration
- [ ] Agent 4: Development Tools Setup
- [ ] Agent 5: Theme System Architecture
- [ ] Agent 6: Core Dependencies Installation

### Wave 2 Status (8 agents)
- [ ] Agent 7: Design Tokens & Tailwind Config
- [ ] Agent 8: shadcn Components Group 1
- [ ] Agent 9: shadcn Components Group 2
- [ ] Agent 10: shadcn Components Group 3
- [ ] Agent 11: Layout Components
- [ ] Agent 12: Form Components
- [ ] Agent 13: State Components
- [ ] Agent 14: Icon System & Navigation

### Wave 3 Status (3 agents)
- [ ] Agent 15: Router Configuration
- [ ] Agent 16: Protected Routes & Error Pages
- [ ] Agent 17: Navigation Guards & History

### Wave 4 Status (4 agents)
- [ ] Agent 18: API Client & Interceptors
- [ ] Agent 19: RPC Client Migration
- [ ] Agent 20: React Query Setup
- [ ] Agent 21: State Management

---

## 🚀 Quick Start Commands

### For Each Agent:
```bash
# Pull latest main
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/[task-name]

# Do your work...

# Before committing
npm run lint
npm run type-check
npm run test

# Commit and push
git add .
git commit -m "feat: [description of changes]"
git push origin feature/[task-name]

# Create PR via GitHub
```

---

## ⏱️ Estimated Timeline

- **Wave 1**: 1-2 days (6 agents working in parallel)
- **Wave 2**: 2-3 days (8 agents working in parallel)
- **Wave 3**: 1-2 days (3 agents working in parallel)
- **Wave 4**: 2-3 days (4 agents working in parallel)

**Total**: ~1-2 weeks for Phases 1-3 (vs 6-8 weeks sequential)

---

## 📝 Notes

- This covers approximately Phases 1-3 of the migration plan
- Future waves will cover Phases 4-16
- Update this document as tasks complete
- Add new waves as previous ones finish

---

**Last Updated:** 2025-01-18
**Current Wave:** Wave 1 - Phase 1 Setup
**Agents Active:** 1 (more to be added)
