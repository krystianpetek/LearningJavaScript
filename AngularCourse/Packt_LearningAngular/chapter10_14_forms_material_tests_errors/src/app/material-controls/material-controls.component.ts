import { Component } from '@angular/core';

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
}
