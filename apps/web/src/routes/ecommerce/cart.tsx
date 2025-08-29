import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/ecommerce/cart')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/ecommerce/cart"!</div>;
}
