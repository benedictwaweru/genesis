import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/errors/unauthorized')({
  component: Unauthorized,
});

function Unauthorized() {
  return <div>Hello "/errors/unauthorized"!</div>;
}
