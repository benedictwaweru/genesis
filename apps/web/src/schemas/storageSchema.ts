export interface LocalStorageSchema {
  ecommerce?: unknown;
  logistics?: unknown;
}

export interface SessionStorageSchema {
  ecommerce?: unknown;
  logistics?: unknown;
}

export interface CookieStorageSchema {
  ecommerce?: unknown;
  logistics?: unknown;
}

export interface StorageSchema {
  local: LocalStorageSchema;
  session: SessionStorageSchema;
  cookie: CookieStorageSchema;
}
