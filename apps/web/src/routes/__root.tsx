'use client';

import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { Footer } from '@/components/common/footer';
import { Header } from '@/components/common/header';

export const rootRoute = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  );
}
