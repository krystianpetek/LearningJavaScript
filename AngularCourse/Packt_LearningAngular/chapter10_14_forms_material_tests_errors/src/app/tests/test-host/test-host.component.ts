import { Component } from '@angular/core';

@Component({
  selector: 'app-test-host',
  template: ` <app-bindings
    [title]="testTitle"
    (liked)="isFavorite = true"
  ></app-bindings>`,
})
export class TestHostComponent {
  public testTitle: string = 'My title';
  public isFavorite: boolean = false;
}
