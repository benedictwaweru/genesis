import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/errors/notfound')({
  component: NotFound,
});

function NotFound() {
  return <div>Hello "/errors/notfound"!</div>;
}
