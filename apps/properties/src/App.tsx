import { StorageProvider } from '@/providers/storage-provider.tsx';
import { ThemeProvider } from '@/providers/theme-provider';
import { routeTree } from '@/routeTree.gen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { CookiesProvider } from 'react-cookie';

import { Toaster } from '@/components/ui/sonner';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const client = new QueryClient();

export default function App() {
  return (
    <CookiesProvider>
      <StorageProvider>
        <QueryClientProvider client={client}>
          <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
            <Toaster position="top-center" richColors />
          </ThemeProvider>
        </QueryClientProvider>
      </StorageProvider>
    </CookiesProvider>
  );
}
