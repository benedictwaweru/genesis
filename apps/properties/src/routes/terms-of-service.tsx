import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/terms-of-service')({
  component: TermsOfService,
});

function TermsOfService() {
  return <div>Hello "/terms-of-service"!</div>;
}
