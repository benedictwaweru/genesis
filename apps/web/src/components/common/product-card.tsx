import { ShoppingCart } from 'lucide-react';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';

interface ProductCardProps {
  id: string;
  afterPrice: number;
  beforePrice: number;
  image: string;
  productTitle: string;
}

export function ProductCard({
  id,
  afterPrice,
  beforePrice,
  image,
  productTitle,
}: ProductCardProps) {
  const isPriceReduced = beforePrice > afterPrice;
  const priceChange = Math.round((beforePrice - afterPrice) / beforePrice * 100);

  return (
    <Card className="w-full max-w-xs p-0">
      <CardContent className="w-full block p-0">
        <div className="relative">
          <AspectRatio ratio={16 / 8} className="overflow-hidden rounded-t-md">
            <img
              className="object-cover rounded-t-md h-full w-full"
              src={image}
              alt={productTitle}
            />
          </AspectRatio>
          {isPriceReduced && (
            <Badge
              className="absolute top-3 right-3 h-6 min-w-6 text-xs rounded-full font-mono tabular-nums p-1"
              variant="destructive"
            >
              -{priceChange}%
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <div className="p-0 justify-start w-full">
          <Link to='/ecommerce/products/$id' params={{ id }}>
            <h3 className="font-bold text-md hover:text-primary mb-2 truncate cursor-pointer">
              {productTitle}
            </h3>
          </Link>
          <div className="flex items-center gap-1 mb-3 text-xs">
            <span className="text-muted-foreground/70 line-through">
              KSh {beforePrice}
            </span>
            <span className="text-primary">KSh {afterPrice}</span>
          </div>
          <Button className="my-2 cursor-pointer">
            <ShoppingCart />
            Add to cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
