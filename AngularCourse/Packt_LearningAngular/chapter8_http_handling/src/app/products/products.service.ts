import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductDto, convertToProduct } from './models/product-dto';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _productsUrl: string = 'https://fakestoreapi.com/products';
  private _httpClient: HttpClient;

  private _products?: Product[];

  public constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  public getProducts(): Observable<Product[]> {
    return this._httpClient.get<ProductDto[]>(this._productsUrl).pipe(
      map((products) =>
        products.map((product: ProductDto): Product => {
          return convertToProduct(product);
        })
      )
    );
  }

  public getProduct(id: number): Observable<Product> {
    return this._httpClient.get<ProductDto>(`${this._productsUrl}/${id}`).pipe(
      map((product) => {
        return convertToProduct(product);
      })
    );
  }
}
