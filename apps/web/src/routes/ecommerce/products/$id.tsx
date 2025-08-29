import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/ecommerce/products/$id')({
  component: ProductDetails,
});

function ProductDetails() {
  return <div>Hello "/ecommerce/product-details"!</div>;
}
