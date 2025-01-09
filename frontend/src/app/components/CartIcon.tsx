// src/components/CartIcon.tsx
'use client';

import { useRouter } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';

export default function CartIcon() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/cart')}
      className="p-2 hover:bg-gray-100 rounded-full relative"
    >
      <ShoppingCart className="h-6 w-6" />
    </button>
  );
}