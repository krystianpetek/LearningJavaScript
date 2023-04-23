import { Product } from './product';

export interface ProductDto {
  id: number;
  title: string;
  price: number;
}

export function convertToProduct(product: ProductDto): Product {
  return {
    id: product.id,
    name: product.title,
    price: product.price,
  };
}
