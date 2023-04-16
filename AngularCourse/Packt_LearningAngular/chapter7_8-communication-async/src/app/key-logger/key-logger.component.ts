import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.css'],
})
export class KeyLoggerComponent implements OnInit {
  public keys = '';
  @ViewChild('keyContainer', { static: true }) input: ElementRef | undefined;

  ngOnInit(): void {
    const logger$ = fromEvent<KeyboardEvent>(
      this.input?.nativeElement,
      'keyup'
    );
    logger$.subscribe((event) => (this.keys += event.key));
  }
}
