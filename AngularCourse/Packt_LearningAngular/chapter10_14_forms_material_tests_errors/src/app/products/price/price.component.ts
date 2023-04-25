import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent {
  public data: number;
  public price: number | undefined;

  public constructor(@Inject(MAT_DIALOG_DATA) data: number) {
    this.data = data;
  }
}
