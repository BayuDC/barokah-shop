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
  }
}

export {};
