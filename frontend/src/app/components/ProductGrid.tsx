// src/components/ProductGrid.tsx
'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/app/types';
import { client } from '@/sanity/lib/client';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] {
        _id,
        product_id,
        product_name,
        description,
        price,
        discountPercentage,
        tags,
        sizes,
        images,
        stock_quantity,
        category,
        rating,
        ratingCount,
        supplier
      }`;
      try {
        const data = await client.fetch<Product[]>(query);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>


        


    </div>
  );
}

