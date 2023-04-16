import { Component, Input, OnInit } from '@angular/core';
import { ProductViewService } from './product-view.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  private _productViewService: ProductViewService;
  @Input() public id: number = -1;
  public name: string = '';

  public constructor(productViewService: ProductViewService) {
    this._productViewService = productViewService;
  }

  private getProduct(): void {
    this._productViewService.getProduct(this.id).subscribe((product) => {
      if (product) {
        this.name = product.name;
      }
    });
  }

  ngOnInit(): void {
    this.getProduct();
  }
}
