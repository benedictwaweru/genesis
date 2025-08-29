import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/errors/forbidden')({
  component: Forbidden,
});

function Forbidden() {
  return <div>Hello "/errors/forbidden"!</div>;
}
