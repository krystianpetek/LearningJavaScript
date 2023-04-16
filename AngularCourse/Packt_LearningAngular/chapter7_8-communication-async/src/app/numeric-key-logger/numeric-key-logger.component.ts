import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable, filter, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-numeric-key-logger',
  templateUrl: './numeric-key-logger.component.html',
  styleUrls: ['./numeric-key-logger.component.css'],
})
export class NumericKeyLoggerComponent implements OnInit {
  public keys = '';
  @Input() numeric: boolean = false;

  @ViewChild('numericKeys', { static: true }) public input:
    | ElementRef
    | undefined;

  ngOnInit(): void {
    const logger$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(
      this.input?.nativeElement,
      'keyup'
    );
    logger$
      .pipe(
        map((event) => event.key.charCodeAt(0)),
        filter((code) => {
          if (this.numeric) {
            return (code > 31 && (code < 48 || code > 57)) === false;
          }
          return true;
        }),
        tap((digit) => (this.keys += String.fromCharCode(digit)))
      )
      .subscribe();
  }
}
