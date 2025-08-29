import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return <div>Hello "/privacy-policy"!</div>;
}
