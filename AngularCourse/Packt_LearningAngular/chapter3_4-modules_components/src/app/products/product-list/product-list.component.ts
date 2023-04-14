import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

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

  public selectedProduct: string = '';
  public products = ['Webcam', 'Microphone', 'Wireless keyboard'];

  onBuy(name: string) {
    window.alert(`You just bought ${name}!`);
  }

  trackByProducts(index: number, name: string): number {
    return index;
  }

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(`AfterViewInit: ${this.productDetail.name}`);
    }
  }
}
