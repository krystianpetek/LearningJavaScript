import { Component, Host, OnInit, Optional } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { FavoritesService } from './favorites.service';
import { favoritesFactory } from './favorites.Factory';
import { ProductViewService } from '../product-view/product-view.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  providers: [
    {
      provide: ProductsService,
      useClass: FavoritesService,
    },
    {
      provide: ProductsService,
      useFactory: favoritesFactory(true),
      deps: [ProductViewService],
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
