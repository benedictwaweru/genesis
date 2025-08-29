import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/logistics/auth')({
  component: LogisticsAuth,
});

function LogisticsAuth() {
  return (
    <div>
      Hello "/logistics/auth"! You must have a business account before accessing
      this page
    </div>
  );
}
