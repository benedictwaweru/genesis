import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/tenant')({
  component: TenantDashboard,
});

function TenantDashboard() {
  return <div>Hello "/dashboard/tenant"!</div>;
}
