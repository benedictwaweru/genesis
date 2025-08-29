import { createFileRoute } from '@tanstack/react-router';
import { Plane } from 'lucide-react';

import { PropertyCard } from '@/components/common/property-card';

export const Route = createFileRoute('/forgot-password')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/forgot-password"!
      <PropertyCard
        icon={Plane}
        propertyType="Vacational"
        propertyCategory={{ subType: 'Resort' }}
      />
    </div>
  );
}
