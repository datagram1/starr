# Theme System

## Overview

The Starr frontend uses a theme system that supports light mode, dark mode, and system preference detection.

## Usage

### Basic Usage

Wrap your app with the ThemeProvider:

```tsx
import { ThemeProvider } from '@/contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### Using the Theme Hook

```tsx
import { useTheme } from '@/contexts/ThemeContext';

function MyComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme('dark')}>
      Current theme: {theme}
    </button>
  );
}
```

### Theme Switcher Component

Use the built-in ThemeSwitcher component:

```tsx
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

function Navbar() {
  return (
    <nav>
      <ThemeSwitcher />
    </nav>
  );
}
```

## Themes

- **light**: Light mode with bright background
- **dark**: Dark mode with dark background
- **system**: Follows system preference

## Persistence

Theme preference is automatically saved to localStorage and restored on page load.

## CSS Variables

All colors use CSS variables defined in `src/index.css`. These variables automatically switch based on the current theme.
