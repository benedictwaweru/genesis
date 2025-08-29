import { type FC, type ReactNode } from 'react';

import { StorageContext } from '@/hooks/useStorage';
import { StorageService } from '@/services/StorageService';
import { Cookies, useCookies } from 'react-cookie';

export const StorageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cookieObj] = useCookies();
  const cookies = new Cookies(cookieObj);

  return (
    <StorageContext.Provider value={{ StorageService, cookies }}>
      {children}
    </StorageContext.Provider>
  );
};
