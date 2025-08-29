import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/ecommerce/checkout')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/ecommerce/checkout"!</div>;
}
