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
