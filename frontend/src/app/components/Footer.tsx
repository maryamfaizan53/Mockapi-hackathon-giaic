// src/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-300">
                Your trusted source for quality products.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-300">
                Email: contact@example.com<br />
                Phone: (555) 123-4567
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  