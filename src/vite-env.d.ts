/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_EMAIL_API_KEY_1: string;
  readonly VITE_EMAIL_API_KEY_2: string;
  readonly VITE_EMAIL_API_KEY_3: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
