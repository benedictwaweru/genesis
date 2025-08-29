import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/errors/too-many-requests')({
  component: TooManyRequests,
});

function TooManyRequests() {
  return <div>Hello "/errors/too-many-requests"!</div>;
}
