/// <reference types="expo/types" />

interface ImportMetaEnv {
  readonly API_BASE_URL: string;
  readonly NODE_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  glob<T = unknown>(
    pattern: string,
    options?: {
      eager?: boolean;
      import?: string;
    }
  ): Record<string, T>;
}