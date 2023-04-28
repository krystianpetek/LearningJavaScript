import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bindings',
  template: `
    <p>{{ title }}</p>
    <button mat-button (click)="liked.emit()">Like!</button>
  `,
})
export class BindingsComponent {
  @Input() title: string = '';
  @Output() liked: EventEmitter<void> = new EventEmitter();
}
