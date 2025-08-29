import * as React from 'react';

import { Outlet, createRootRoute } from '@tanstack/react-router';

import { Footer } from '@/components/common/footer';
import { Header } from '@/components/common/header';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}
