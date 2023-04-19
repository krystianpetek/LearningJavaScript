import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  public authService: AuthService;

  public constructor(authService: AuthService) {
    this.authService = authService;
  }
}
