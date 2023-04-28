import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  waitForAsync,
} from '@angular/core/testing';

import { AsyncTestComponent } from './async-test.component';

describe('AsyncTestComponent', () => {
  let component: AsyncTestComponent;
  let fixture: ComponentFixture<AsyncTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsyncTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AsyncTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data with waitForAsync', waitForAsync(async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const heroDisplay: HTMLElement[] =
      fixture.nativeElement.querySelectorAll('p');
    expect(heroDisplay.length).toBe(5);
  }));

  it('should get data with fakeAsync', fakeAsync(() => {
    fixture.detectChanges();
    tick(500);
    fixture.detectChanges();
    const heroDisplay: HTMLElement[] =
      fixture.nativeElement.querySelectorAll('p');
    expect(heroDisplay.length).toBe(5);
  }));
});
