import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
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

  public selectedProduct: string = 'Microphone';

  onBuy(name: string) {
    window.alert(`You just bought ${name}!`);
  }
}
