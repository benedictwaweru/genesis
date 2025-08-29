import { type StorageSchema } from '@/schemas/storageSchema';
import { type Cookies } from 'react-cookie';

type CookieOptions = {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
};

export class StorageService {
  private cookies: Cookies;
  private setCookie: (
    name: string,
    value: string,
    options?: CookieOptions,
  ) => void;
  private removeCookie: (name: string, options?: { path?: string }) => void;

  constructor(
    cookies: Cookies,
    setCookie: (name: string, value: string, options?: CookieOptions) => void,
    removeCookie: (name: string, options?: { path?: string }) => void,
  ) {
    this.cookies = cookies;
    this.setCookie = setCookie;
    this.removeCookie = removeCookie;
  }

  setLocal<K extends keyof StorageSchema['local']>(
    key: K,
    value: StorageSchema['local'][K],
  ): void {
    localStorage.setItem(key as string, JSON.stringify(value));
  }

  getLocal<K extends keyof StorageSchema['local']>(
    key: K,
  ): StorageSchema['local'][K] | null {
    const item = localStorage.getItem(key as string);
    return item ? (JSON.parse(item) as StorageSchema['local'][K]) : null;
  }

  removeLocal(key: keyof StorageSchema['local']): void {
    localStorage.removeItem(key as string);
  }

  clearLocal(): void {
    localStorage.clear();
  }

  setSession<K extends keyof StorageSchema['session']>(
    key: K,
    value: StorageSchema['session'][K],
  ): void {
    sessionStorage.setItem(key as string, JSON.stringify(value));
  }

  getSession<K extends keyof StorageSchema['session']>(
    key: K,
  ): StorageSchema['session'][K] | null {
    const item = sessionStorage.getItem(key as string);
    return item ? (JSON.parse(item) as StorageSchema['session'][K]) : null;
  }

  removeSession(key: keyof StorageSchema['session']): void {
    sessionStorage.removeItem(key as string);
  }

  clearSession(): void {
    sessionStorage.clear();
  }

  // ================= Cookies =================
  setCookieItem<K extends keyof StorageSchema['cookie']>(
    key: K,
    value: StorageSchema['cookie'][K],
    options?: CookieOptions,
  ): void {
    this.setCookie(key as string, JSON.stringify(value), options);
  }

  getCookie<K extends keyof StorageSchema['cookie']>(
    key: K,
  ): StorageSchema['cookie'][K] | null {
    const item = this.cookies.get(key as string);
    return item ? (JSON.parse(item) as StorageSchema['cookie'][K]) : null;
  }

  removeCookieItem(
    key: keyof StorageSchema['cookie'],
    options?: { path?: string },
  ): void {
    this.removeCookie(key as string, options);
  }
}
