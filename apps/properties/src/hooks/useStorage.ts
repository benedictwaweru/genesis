import { createContext, useContext } from 'react';

import { type StorageService } from '@/services/StorageService';

export const StorageContext = createContext<StorageService | null>(null);

export function useStorage() {
  const context = useContext(StorageContext);
  if (!context)
    throw new Error('useStorage must be used within a StorageProvider');

  return context;
}
