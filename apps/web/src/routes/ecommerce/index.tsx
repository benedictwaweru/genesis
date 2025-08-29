import { createFileRoute } from '@tanstack/react-router';

import { Footer } from '@/components/common/footer';
import { Header } from '@/components/common/header';
import { ProductCard } from '@/components/common/product-card';

const mockProducts = [
  {
    id: "1",
    productTitle: "Wireless Bluetooth Headphones",
    beforePrice: 4500,
    afterPrice: 3200,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D"
  },
  {
    id: "2",
    productTitle: "Smart Fitness Watch",
    beforePrice: 8000,
    afterPrice: 5999,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D"
  },
  {
    id: "3",
    productTitle: "4K Ultra HD Smart TV",
    beforePrice: 65000,
    afterPrice: 52000,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D"
  },
  {
    id: "4",
    productTitle: "Ergonomic Gaming Chair",
    beforePrice: 20000,
    afterPrice: 17999,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D"
  },
  {
    id: "5",
    productTitle: "Stainless Steel Water Bottle",
    beforePrice: 1200,
    afterPrice: 900,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D"
  },
  {
    id: "6",
    productTitle: "Leather Office Backpack",
    beforePrice: 7500,
    afterPrice: 6400,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D"
  },
  {
    id: "7",
    productTitle: "DSLR Professional Camera",
    beforePrice: 95000,
    afterPrice: 79999,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D"
  },
  {
    id: "8",
    productTitle: "Wireless Mechanical Keyboard",
    beforePrice: 12000,
    afterPrice: 9500,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D"
  },
  {
    id: "9",
    productTitle: "Running Sneakers",
    beforePrice: 6000,
    afterPrice: 4499,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D"
  },
  {
    id: "10",
    productTitle: "Designer Sunglasses",
    beforePrice: 5000,
    afterPrice: 3999,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D"
  },
  {
    id: "11",
    productTitle: "Modern Wooden Desk",
    beforePrice: 30000,
    afterPrice: 24999,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D"
  },
  {
    id: "12",
    productTitle: "Gaming Mouse RGB",
    beforePrice: 3500,
    afterPrice: 2999,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D"
  },
  {
    id: "13",
    productTitle: "Luxury Wrist Watch",
    beforePrice: 55000,
    afterPrice: 42999,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D"
  },
  {
    id: "14",
    productTitle: "Portable Bluetooth Speaker",
    beforePrice: 7500,
    afterPrice: 5999,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D"
  },
  {
    id: "15",
    productTitle: "Stainless Steel Cookware Set",
    beforePrice: 18000,
    afterPrice: 15000,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D"
  },
  {
    id: "16",
    productTitle: "Ultra-thin Laptop",
    beforePrice: 125000,
    afterPrice: 109999,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D"
  },
];


export const Route = createFileRoute('/ecommerce/')({
  component: EcommerceIndex,
});

function EcommerceIndex() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex w-full p-2">
            <h1 className="text-lg text-left text-muted-foreground font-bold">
              Trending this week
            </h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockProducts.map((product) => (
              <ProductCard
                id={product.id}
                productTitle={product.productTitle}
                afterPrice={product.afterPrice}
                beforePrice={product.beforePrice}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
