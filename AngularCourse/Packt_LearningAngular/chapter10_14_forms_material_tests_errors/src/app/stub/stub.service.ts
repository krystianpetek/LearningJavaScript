import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StubService {
  public isBusy: boolean = false;
  public name: string = '';
}
