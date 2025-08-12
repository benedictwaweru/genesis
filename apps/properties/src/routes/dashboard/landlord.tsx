import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/landlord')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/landlord"!</div>
}
