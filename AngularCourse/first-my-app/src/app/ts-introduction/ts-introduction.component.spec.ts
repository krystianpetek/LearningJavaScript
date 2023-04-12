import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsIntroductionComponent } from './ts-introduction.component';

describe('TsIntroductionComponent', () => {
  let component: TsIntroductionComponent;
  let fixture: ComponentFixture<TsIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsIntroductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
