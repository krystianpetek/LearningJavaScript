import { Component } from '@angular/core';
import { Product } from '../products/models/product';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-material-controls',
  templateUrl: './material-controls.component.html',
  styleUrls: ['./material-controls.component.css'],
})
export class MaterialControlsComponent {
  public items: { name: string; surname: string; age: number }[] = [
    {
      name: 'Krystian',
      surname: 'Petek',
      age: 24,
    },
    {
      name: 'Krystian',
      surname: 'Petek',
      age: 23,
    },
    {
      name: 'Krystian',
      surname: 'Petek',
      age: 22,
    },
  ];

  public reorder(event: CdkDragDrop<Product[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
