import { mockProperties } from '@/data/mockData';
import { Link, createFileRoute } from '@tanstack/react-router';

import { PropertyCard } from '@/components/common/property-card';
import { Separator } from '@/components/ui/separator';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const recommended = mockProperties.filter(
    (p) => p.propertyStatus === 'recommended',
  );
  const recentlyViewed = mockProperties.filter(
    (p) => p.propertyStatus === 'recentlyViewed',
  );
  const trending = mockProperties.filter(
    (p) => p.propertyStatus === 'trending',
  );

  return (
    <div className="flex flex-col">
      <main>
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex w-full p-2">
            <h1 className="text-lg text-left text-muted-foreground font-bold">
              Trending this week
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trending.map((property) => (
              <Link
                className="cursor-pointer hover:scale-105"
                key={property.id}
                to="/properties/$id"
                params={{ id: property.id }}
              >
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  isInStock={property.isInStock}
                  propertyTitle={property.propertyTitle}
                  propertyType={property.propertyType}
                  propertySize={property.propertySize}
                  propertyStatus={property.propertyStatus}
                  propertyCategory={property.propertyCategory}
                  propertyLocation={property.propertyLocation}
                  propertyPrice={property.propertyPrice}
                  rating={property.rating}
                  beds={property.beds}
                  baths={property.baths}
                  image={property.image}
                />
              </Link>
            ))}
          </div>
          <div className="my-12">
            <Separator />
          </div>
          <div className="flex w-full p-2">
            <h1 className="text-lg text-left text-muted-foreground font-bold">
              Personalized for you
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommended.map((property) => (
              <Link
                className="cursor-pointer hover:scale-105"
                key={property.id}
                to="/properties/$id"
                params={{ id: property.id }}
              >
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  isInStock={property.isInStock}
                  propertyTitle={property.propertyTitle}
                  propertyType={property.propertyType}
                  propertySize={property.propertySize}
                  propertyStatus={property.propertyStatus}
                  propertyCategory={property.propertyCategory}
                  propertyLocation={property.propertyLocation}
                  propertyPrice={property.propertyPrice}
                  rating={property.rating}
                  beds={property.beds}
                  baths={property.baths}
                  image={property.image}
                />
              </Link>
            ))}
          </div>
          <div className="my-12">
            <Separator />
          </div>
          <div className="flex w-full p-2">
            <h1 className="text-lg text-left text-muted-foreground font-bold">
              Recently Viewed
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentlyViewed.map((property) => (
              <Link
                className="cursor-pointer hover:scale-105"
                key={property.id}
                to="/properties/$id"
                params={{ id: property.id }}
              >
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  isInStock={property.isInStock}
                  propertyTitle={property.propertyTitle}
                  propertyType={property.propertyType}
                  propertySize={property.propertySize}
                  propertyStatus={property.propertyStatus}
                  propertyCategory={property.propertyCategory}
                  propertyLocation={property.propertyLocation}
                  propertyPrice={property.propertyPrice}
                  rating={property.rating}
                  beds={property.beds}
                  baths={property.baths}
                  image={property.image}
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
