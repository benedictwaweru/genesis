import { Link } from '@tanstack/react-router';
import {
  Building,
  Clock,
  Factory,
  Flame,
  House,
  LandPlot,
  MapPin,
  Plane,
  Sparkles,
} from 'lucide-react';

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

import { formatCurrency } from '@/lib/utils';

import {
  type PropertyCategories,
  type PropertyLocation,
  type PropertyStatus,
  type PropertyType,
} from '@/types/types';

const categoryIcons: Record<string, React.ElementType> = {
  Residential: House,
  Commercial: Building,
  Industrial: Factory,
  Vacational: Plane,
  Land: LandPlot,
};

interface PropertyCardProps<K extends PropertyType = PropertyType> {
  id: string;
  isInStock: boolean;
  propertyType: K | string;
  propertyCategory: { subType: PropertyCategories[K] | string };
  propertyLocation: PropertyLocation;
  propertyPrice: number;
  propertySize: number;
  propertyStatus: PropertyStatus | string;
  propertyTitle: string;
  rating: number;
  beds?: number;
  baths?: number;
  description?: string;
  image?: string;
}

export function PropertyCard<K extends PropertyType>({
  id,
  image,
  isInStock,
  propertyTitle,
  propertyType,
  propertyCategory,
  propertyLocation,
  propertyPrice,
  propertySize,
  propertyStatus,
  beds,
  baths,
}: PropertyCardProps<K>) {
  const Icon = categoryIcons[propertyType];

  return isInStock ? (
    <Card className="w-full max-w-sm p-0">
      <CardContent className="w-full block p-0">
        <div className="relative">
          <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-t-md">
            <img
              className="object-cover rounded-t-md h-full w-full"
              src={image}
              alt={propertyTitle}
            />
          </AspectRatio>
          <Badge
            className="absolute top-3 right-3 text-xs rounded-md text-primary"
            variant="secondary"
          >
            <Icon />
            {propertyType}
          </Badge>
          {propertyStatus === "recommended" && (
            <Badge className="absolute top-3 left-3 text-xs rounded-md text-primary-foreground mx-1">
              <Sparkles />
              Recommended
            </Badge>
          )}
          {propertyStatus === "recentlyViewed" && (
            <Badge
              className="absolute top-3 left-3 text-xs rounded-md bg-gray-700 text-white mx-1"
              variant="secondary"
            >
              <Clock />
              Recently Viewed
            </Badge>
          )}
          {propertyStatus === "trending" && (
            <Badge className="absolute top-3 left-3 text-xs rounded-md text-primary-foreground mx-1 bg-amber-600">
              <Flame />
              Hot
            </Badge>
          )}
          <Badge
            className="flex flex-col absolute bottom-3 left-3 text-xs rounded-md px-3 bg-white/90"
            variant="secondary"
          >
            <div className="p-1">
              <p className="text-lg font-bold text-black/90">
                {formatCurrency('sw', 'KES', propertyPrice)}
              </p>
              <p className="text-xs text-gray-600">For Sale</p>
            </div>
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <div className="p-0 justify-start w-full">
          <h3 className="font-bold text-lg hover:text-primary mb-2">
            {propertyTitle}
          </h3>
          <div className="flex items-center gap-1 mb-3 text-xs text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="line-clamp-1 capitalize">
              {propertyLocation.townName},{' '}
              <span className="capitalize">{propertyLocation.countyName}</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-3 mb-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>{beds}</span>
              <span>Beds</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>{baths}</span>
              <span>Baths</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>{propertySize}</span>
              <span>m sq.</span>
            </div>
          </div>
          <div className="text-xs text-gray-500 italic mb-1 line-clamp-1">
            {propertyCategory.subType}
          </div>
          <div className="flex items-center justify-between my-2">
            <div className="text-primary text-sm font-medium group-hover:text-primary/80 transition-colors">
              <Link
                className="text-xs hover:underline"
                to="/properties/$id"
                params={{ id }}
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  ) : null;
}
