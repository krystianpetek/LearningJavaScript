import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'chapter9_routing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('chapter9_routing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'chapter9_routing app is running!'
    );
  });
});

describe('Calculator', () => {
  let total: number;
  beforeEach(() => {
    total = 1;
  });

  it('should add two numbers', () => {
    total = total + 1;
    expect(total).toBe(2);
  });

  it('should subtract two numbers', () => {
    total = total - 1;
    expect(total).toBe(0);
  });

  afterEach(() => {
    total = 0;
  });
});
