interface Env {
   VITE_APP_BASE_URL: string;
   DEV: boolean;
   PROD: boolean;
   MODE: string;
   BASE_URL: string;
}

export interface ImportMeta {
    url: string;
    env: Env
}