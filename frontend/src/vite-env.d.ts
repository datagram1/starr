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
