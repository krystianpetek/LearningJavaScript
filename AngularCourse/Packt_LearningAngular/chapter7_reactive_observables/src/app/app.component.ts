import { Component } from '@angular/core';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'chapter7_8-communication-async';

  public constructor() {
    this.title$.subscribe(this.setTitle);

    const complete$ = from(this.onComplete());
    const subscribe = complete$.subscribe(this.setTitle);
    subscribe.unsubscribe();
    // this.onComplete().then(this.setTitle);
    // this.changeTitle(this.setTitle);
  }

  private setTitle: () => void = () => {
    const timestamp = new Date().toLocaleTimeString();
    this.title = `Learning Angular ( ${timestamp} )`;
  };

  title$ = new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });

  private onComplete() {
    return new Promise<void>((resolve) => {
      setInterval(() => {
        resolve();
      }, 2000);
    });
  }

  // private changeTitle: (callback: Function) => void = (callback: Function) => {
  //   setTimeout(() => {
  //     callback();
  //   }, 2000);
  // };
}
