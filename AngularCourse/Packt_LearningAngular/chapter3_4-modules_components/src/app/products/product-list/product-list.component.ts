import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductsService],
})
export class ProductListComponent implements AfterViewInit, OnInit {
  private readonly _productService: ProductsService;

  public title: string = 'product-list';
  public isLiked: boolean = false;
  public currentClasses: { star: boolean; active: boolean } = {
    star: true,
    active: false,
  };
  public currentStyles: {
    color: string;
    width: string;
    backgroundColor: string;
  } = {
    color: 'green',
    width: '250px',
    backgroundColor: 'yellow',
  };

  public selectedProduct: Product | undefined;
  public products: Product[] = [];

  public constructor(productService: ProductsService) {
    this._productService = productService;
  }

  ngOnInit(): void {
    this.products = this._productService.getProducts();
  }

  @ViewChild(ProductDetailComponent) productDetail:
    | ProductDetailComponent
    | undefined;

  onBuy(product: Product) {
    window.alert(`You just bought ${product.name}!`);
  }

  trackByProducts(index: number, product: Product): number {
    return index;
  }

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(`AfterViewInit: ${this.productDetail.product}`);
    }
  }
}
