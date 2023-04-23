import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent {
  private _router: Router;

  public constructor(router: Router) {
    this._router = router;
  }
  public goHome(): void {
    this._router.navigate(['/']);
  }
}
