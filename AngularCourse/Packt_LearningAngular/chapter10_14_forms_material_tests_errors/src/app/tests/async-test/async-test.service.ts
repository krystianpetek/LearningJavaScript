import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsyncTestService {
  private heroes: string[] = ['aHero', 'bHero', 'cHero', 'dHero', 'eHero'];
  constructor() {}

  public getData(): Observable<string[]> {
    return of(this.heroes).pipe(delay(500));
  }

  public setData(hero: string) {
    this.heroes.push(hero);
    return this.heroes;
  }
}
