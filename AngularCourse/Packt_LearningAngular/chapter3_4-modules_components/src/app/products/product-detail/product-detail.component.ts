import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() product: Product | undefined;
  @Output() bought = new EventEmitter<Product>();

  constructor() {
    console.log(`Name is ${this.product?.name} in the constructor`);
  }

  ngOnInit(): void {
    console.log(`Name is ${this.product?.name} in the ngOnInit`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if (!product.firstChange) {
      const oldValue: Product = product.previousValue;
      const newValue: Product = product.currentValue;
      console.log(`Product changed from ${oldValue.name} to ${newValue.name}`);
    }
  }

  buy() {
    this.bought.emit(this.product);
  }

  get productName(): string {
    console.log(`Get ${this.product?.name}`);
    return this.product?.name ?? '';
  }
}
