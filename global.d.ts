/* Netlify Identity Widget - inyectado en runtime por el script de Netlify */
interface NetlifyIdentityUser {
  id?: string;
  email?: string;
  app_metadata?: Record<string, unknown>;
  user_metadata?: Record<string, unknown>;
}

interface NetlifyIdentity {
  on(event: "init", callback: (user: NetlifyIdentityUser | null) => void): void;
  on(event: "login", callback: () => void): void;
  on(event: string, callback: (user?: NetlifyIdentityUser | null) => void): void;
}

/* Decap CMS - inyectado en runtime por el script de decap-cms */
interface DecapCMSEntry {
  get(key: string): unknown;
}

interface DecapCMS {
  registerEventListener(options: {
    name: string;
    handler: (args: { entry: DecapCMSEntry }) => void | unknown;
  }): void;
}

declare global {
  interface Window {
    netlifyIdentity?: NetlifyIdentity;
    CMS?: DecapCMS;
  }
}

export {};
