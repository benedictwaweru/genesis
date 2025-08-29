import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/errors/request-timeout')({
  component: RequestTimeout,
});

function RequestTimeout() {
  return <div>Hello "/errors/request-timeout"!</div>;
}
