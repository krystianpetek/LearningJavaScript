import { Component, Host, OnInit, Optional } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { FavoritesService } from './favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  providers: [
    {
      provide: ProductsService,
      useClass: FavoritesService,
    },
  ],
})
export class FavoritesComponent implements OnInit {
  @Host() private _productService: ProductsService;

  public products: Product[] = [];

  public constructor(@Host() @Optional() productService: ProductsService) {
    this._productService = productService;
  }

  ngOnInit(): void {
    this.products = this._productService.getProducts();
  }
}
