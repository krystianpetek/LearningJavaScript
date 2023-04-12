import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public brand: string = 'Chevrolet';
  public title: string = 'Learning Angular';
  public description: string = 'Hello World!';
  public message: string = `Today it's a happy day! I just bought a new ${this.brand} car`;
}
