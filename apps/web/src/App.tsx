import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { Toaster } from '@/components/ui/sonner';
import { routeTree } from '@/routeTree.gen';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  );
}
