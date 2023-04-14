import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements AfterViewInit {
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

  @ViewChild(ProductDetailComponent) productDetail:
    | ProductDetailComponent
    | undefined;

  public selectedProduct: Product | undefined;
  public products: Product[] = [
    { name: 'Webcam', price: 100 },
    { name: 'Microphone', price: 200 },
    { name: 'Wireless keyboard', price: 85 },
  ];

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
