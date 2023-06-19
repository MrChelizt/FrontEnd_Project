export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
};

export type CartRecord = {
  product: Product;
  count: number;
};
