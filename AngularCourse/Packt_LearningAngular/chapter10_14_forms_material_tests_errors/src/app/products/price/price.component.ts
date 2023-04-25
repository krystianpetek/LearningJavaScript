import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent {
  private _dialogRef: MatDialogRef<PriceComponent>;
  public data: number;
  public price: number | undefined;

  public constructor(
    @Inject(MAT_DIALOG_DATA) data: number,
    dialogRef: MatDialogRef<PriceComponent>
  ) {
    this.data = data;
    this._dialogRef = dialogRef;
  }

  public save(): void {
    this._dialogRef.close(this.price);
  }
}
