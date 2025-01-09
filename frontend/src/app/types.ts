// src/types/index.ts
export interface Supplier {
    supplier_name: string;
    contact_number: string;
  }
  
  export interface Product {
    _id: string;
    product_id: string;
    product_name: string;
    description: string;
    price: number;
    tags: string[];
    sizes: string[];
    images: {
      asset: {
        url: string;
      };
    }[];
    stock_quantity: number;
    category: string;
    supplier: Supplier;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }