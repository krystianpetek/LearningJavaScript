import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumericKeyLoggerComponent } from './numeric-key-logger.component';

describe('NumericKeyLoggerComponent', () => {
  let component: NumericKeyLoggerComponent;
  let fixture: ComponentFixture<NumericKeyLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumericKeyLoggerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NumericKeyLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
