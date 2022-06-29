export interface Product {
  title: string;
  category: string;
  price: number;
  employee: string;
  description: string;
  reviews: string[];
}
export interface ApiProduct {
  id: string;
  data: Product;
}
