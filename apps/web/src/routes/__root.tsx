'use client';

import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const rootRoute = createRootRoute({
  component: Root
})

function Root() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
