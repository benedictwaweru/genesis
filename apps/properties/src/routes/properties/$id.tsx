import { createFileRoute } from '@tanstack/react-router';

import { useApiQuery } from '@/hooks/useFetch';

import {
  //type PropertyCategories,
  type PropertyLocation,
  //type PropertyStatus,
  //type PropertyType,
} from '@/types/types';

export const Route = createFileRoute('/properties/$id')({
  component: PropertyDetails,
});

type TPropertyDetails = {
  propertyLocation: PropertyLocation;
}

function PropertyDetails() {
  const { id } = Route.useParams();
  const { data } = useApiQuery<TPropertyDetails>(
    ['products', id],
    `/properties/${id}`
  );
  return <div>Hello "/property-details"!</div>;
}
