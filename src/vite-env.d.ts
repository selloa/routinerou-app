/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PLATFORM: string
  readonly VITE_API_URL: string
  readonly VITE_STORAGE_TYPE: string
  readonly DEV: boolean
  readonly PROD: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
