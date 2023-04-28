import { EventEmitter, Injectable, Output } from '@angular/core';
import { Product } from './models/product';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
      ),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }

  public getProduct(id: number): Observable<Product> {
    return this._httpClient.get<ProductDto>(`${this._productsUrl}/${id}`).pipe(
      map((product) => {
        return convertToProduct(product);
      })
    );
  }

  public addProduct(name: string, price: number): Observable<Product> {
    return this._httpClient
      .post<ProductDto>(this._productsUrl, {
        title: name,
        price: price,
      })
      .pipe(map((product) => convertToProduct(product)));
  }

  public updateProduct(id: number, price: number): Observable<void> {
    return this._httpClient.patch<void>(`${this._productsUrl}/${id}`, {
      price,
    });
  }

  public deleteProduct(id: number): Observable<void> {
    return this._httpClient.delete<void>(`${this._productsUrl}/${id}`);
  }
}
