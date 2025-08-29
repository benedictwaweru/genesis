import { type FC, type ReactNode } from 'react';

import { StorageContext } from '@/hooks/useStorage';
import { StorageService } from '@/services/StorageService';
import { Cookies, useCookies } from 'react-cookie';

export const StorageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cookieObj, setCookie, removeCookie] = useCookies();
  const cookies = new Cookies(cookieObj);
  const storage = new StorageService(cookies, setCookie, removeCookie);

  return (
    <StorageContext.Provider value={storage}>
      {children}
    </StorageContext.Provider>
  );
};
