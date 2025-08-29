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
  static setLocal<K extends keyof StorageSchema['local']>(
    key: K,
    value: StorageSchema['local'][K],
  ): void {
    localStorage.setItem(key as string, JSON.stringify(value));
  }

  static getLocal<K extends keyof StorageSchema['local']>(
    key: K,
  ): StorageSchema['local'][K] | null {
    const item = localStorage.getItem(key as string);
    return item ? (JSON.parse(item) as StorageSchema['local'][K]) : null;
  }

  static removeLocal(key: keyof StorageSchema['local']): void {
    localStorage.removeItem(key as string);
  }

  static clearLocal(): void {
    localStorage.clear();
  }

  static setSession<K extends keyof StorageSchema['session']>(
    key: K,
    value: StorageSchema['session'][K],
  ): void {
    sessionStorage.setItem(key as string, JSON.stringify(value));
  }

  static getSession<K extends keyof StorageSchema['session']>(
    key: K,
  ): StorageSchema['session'][K] | null {
    const item = sessionStorage.getItem(key as string);
    return item ? (JSON.parse(item) as StorageSchema['session'][K]) : null;
  }

  static removeSession(key: keyof StorageSchema['session']): void {
    sessionStorage.removeItem(key as string);
  }

  static clearSession(): void {
    sessionStorage.clear();
  }

  static setCookieItem<K extends keyof StorageSchema['cookie']>(
    cookies: Cookies,
    key: K,
    value: StorageSchema['cookie'][K],
    options?: CookieOptions,
  ): void {
    cookies.set(key as string, JSON.stringify(value), options);
  }

  static getCookieItem<K extends keyof StorageSchema['cookie']>(
    cookies: Cookies,
    key: K,
  ): StorageSchema['cookie'][K] | null {
    const item = cookies.get(key as string);
    return item ? (JSON.parse(item) as StorageSchema['cookie'][K]) : null;
  }

  static removeCookieItem(
    cookies: Cookies,
    key: keyof StorageSchema['cookie'],
    options?: { path?: string },
  ): void {
    cookies.remove(key as string, options);
  }
}
