import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Product } from './models/product';
import { inject } from '@angular/core';
import { ProductsService } from './products.service';

// for prevent flickering after /products/:id
export const productDetailResolver: ResolveFn<Product> = (
  route: ActivatedRouteSnapshot
) => {
  const productService = inject(ProductsService);

  const id = Number(route.paramMap.get('id'));
  return productService.getProduct(id);
};
