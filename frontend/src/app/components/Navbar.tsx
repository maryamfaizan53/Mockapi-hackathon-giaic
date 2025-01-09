// src/components/Navbar.tsx
import Link from 'next/link';
import CartIcon from './CartIcon';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              E-Commerce
            </Link>
          </div>
          <div className="flex items-center">
            <CartIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}