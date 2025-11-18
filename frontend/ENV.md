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
