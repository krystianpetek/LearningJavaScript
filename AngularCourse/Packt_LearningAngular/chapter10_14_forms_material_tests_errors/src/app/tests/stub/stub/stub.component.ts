import { Component, OnInit } from '@angular/core';
import { StubService } from '../stub.service';

@Component({
  selector: 'app-stub',
  template: '<span>{{msg}}</span>',
})
export class StubComponent implements OnInit {
  private _stub: StubService;
  public msg: string = '';
  constructor(stub: StubService) {
    this._stub = stub;
  }
  ngOnInit(): void {
    this.msg = !this._stub.isBusy
      ? this._stub.name + ' is available'
      : this._stub.name + ' is on a mission';
  }
}
