import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ProductsService } from './products.service';
import { ProductDto } from './models/product-dto';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should get products', () => {
    service.getProducts().subscribe();
    const request = httpTestingController.expectOne(
      'https://fakestoreapi.com/products'
    );
    expect(request.request.method).toBe('GET');
  });

  it('should add a product', () => {
    service.addProduct('Fake product', 100).subscribe();
    const request = httpTestingController.expectOne(
      'https://fakestoreapi.com/products'
    );
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual({
      title: 'Fake product',
      price: 100,
    });
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
