'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Product } from '@/app/types';
import { client } from '@/sanity/lib/client';

export default function ProductPage() {
  const {  product_id } = useParams(); // Get the product ID from the dynamic route
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!product_id) return;

    const fetchProduct = async () => {
      const query = `*[_type == "product" && product_id == "${product_id}"] {
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
      }[0]`; // Fetch a single product by ID
      try {
        const data = await client.fetch<Product>(query);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [product_id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{product.product_name}</h1>
      <div className="flex gap-4">
        {product.images?.map((image, index) => (
          <img
            key={index}
            src={image.asset.url}
            alt={product.product_name}
            className="w-1/3 rounded-lg"
          />
        ))}
      </div>
      <p className="mt-4 text-gray-600">{product.description}</p>
      <p className="mt-2 text-2xl font-bold">${product.price}</p>
      <p className="mt-2 text-sm text-gray-500">Stock: {product.stock_quantity}</p>
      <div className="mt-4">
        <button
          className={`px-4 py-2 rounded-lg ${
            product.stock_quantity === 0
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
          disabled={product.stock_quantity === 0}
        >
          {product.stock_quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
