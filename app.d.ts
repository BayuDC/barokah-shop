declare global {
  interface Category {
    id: number;
    name: string;
    color: string;
  }
  interface Product {
    id: number;
    name: string;
    price: number;
    unit: string;
    stock: number;
    category: Category;
    picture_url: string;
    pivot: {
      quantity: number;
    };
  }
  interface Transaction {
    id: number;
    created_at: string;
    final_price: number;
    status: 'created' | 'confirmed' | 'finished' | 'canceled';
    products: Product[];
  }
}

export {};
