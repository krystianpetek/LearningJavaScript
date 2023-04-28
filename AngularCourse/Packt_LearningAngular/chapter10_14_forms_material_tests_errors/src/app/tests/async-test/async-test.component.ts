import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncTestService } from './async-test.service';

@Component({
  selector: 'app-async-test',
  template: '<p *ngFor="let hero of $data | async">',
})
export class AsyncTestComponent implements OnInit {
  private _asyncTestService: AsyncTestService;
  public $data: Observable<string[]> | undefined;

  constructor(asyncTestService: AsyncTestService) {
    this._asyncTestService = asyncTestService;
  }
  ngOnInit(): void {
    this.$data = this._asyncTestService.getData();
  }
}
