import { createContext, useContext } from 'react';
import { type Cookies } from 'react-cookie';

import { type StorageService } from '@/services/StorageService';

type StorageContextValue = {
  StorageService: StorageService;
  cookies: Cookies;
};

export const StorageContext = createContext<StorageContextValue | null>(null);

export function useStorage() {
  const context = useContext(StorageContext);
  if (!context)
    throw new Error('useStorage must be used within a StorageProvider');

  return context;
}
