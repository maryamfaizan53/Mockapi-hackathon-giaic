// src/components/ProductCard.tsx
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { Product } from '@/app/types';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

// export default function ProductCard({ product }: ProductCardProps) {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
//       {product.images && product.images[0] && (
//         <div className="aspect-w-1 aspect-h-1 w-full">
//           <Image
//             src={urlFor(product.images[0]).url()}
//             alt={product.product_name}
//             width={400}
//             height={400}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       )}
//       <div className="p-4">
//         <h2 className="text-xl font-semibold mb-2">{product.product_name}</h2>
//         <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
//         <div className="flex items-center justify-between">
//           <span className="text-2xl font-bold">${product.price}</span>
//           <button 
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
//             disabled={product.stock_quantity === 0}
//           >
//             {product.stock_quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
//           </button>
//         </div>
//         <div className="mt-2 flex flex-wrap gap-2">
//           {product.tags.map((tag) => (
//             <span
//               key={tag}
//               className="px-2 py-1 bg-gray-100 text-sm rounded-full"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {product.images && product.images[0] && (
        <div className="aspect-w-1 aspect-h-1 w-full">
          <Image
            src={urlFor(product.images[0]).url()}
            alt={product.product_name}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
          <Link href={`/product/${product.product_id}`}>
            {product.product_name}
          </Link>
        </h2>
        <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${product.price}</span>
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            disabled={product.stock_quantity === 0}
          >
            {product.stock_quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}