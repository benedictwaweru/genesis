import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/errors/service-unavailable')({
  component: ServiceUnavailable,
});

function ServiceUnavailable() {
  return <div>Hello "/errors/service-unavailable"!</div>;
}
