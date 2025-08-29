import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/notfound')({
  component: Notfound,
});

function Notfound() {
  return <div>Hello "/notfound"!</div>;
}
