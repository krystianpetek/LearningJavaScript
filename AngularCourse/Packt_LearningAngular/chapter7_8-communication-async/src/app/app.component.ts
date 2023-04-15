import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'chapter7_8-communication-async';

  public constructor() {
    this.changeTitle(this.setTitle);
  }

  private setTitle: () => void = () => {
    this.title = 'Learning Angular';
  };

  private changeTitle: (callback: Function) => void = (callback: Function) => {
    setTimeout(() => {
      callback();
    }, 2000);
  };
}
