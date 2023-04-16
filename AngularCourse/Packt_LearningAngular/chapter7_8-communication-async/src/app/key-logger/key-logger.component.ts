import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription, from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.css'],
})
export class KeyLoggerComponent implements OnInit {
  public keys = '';
  @ViewChild('keyContainer', { static: true }) input: ElementRef | undefined;
  public values = new Observable<number>();
  private ofSubscribe?: Subscription;
  private fromSubscribe?: Subscription;

  ngOnInit(): void {
    const logger$ = fromEvent<KeyboardEvent>(
      this.input?.nativeElement,
      'keyup'
    );
    logger$.subscribe((event) => (this.keys += event.key));

    this.values = of(1, 2, 3);
    this.ofSubscribe = this.values.subscribe((value) =>
      console.log(`of(${value}), ${value}`)
    );

    this.values = from([1, 2, 3]);
    this.fromSubscribe = this.values.subscribe((value) => {
      console.log(`from([${value}]), ${value}`);
    });
  }

  ngOnDestroy(): void {
    if (this.fromSubscribe) this.fromSubscribe.unsubscribe();
    if (this.ofSubscribe) this.ofSubscribe.unsubscribe();
  }
}
