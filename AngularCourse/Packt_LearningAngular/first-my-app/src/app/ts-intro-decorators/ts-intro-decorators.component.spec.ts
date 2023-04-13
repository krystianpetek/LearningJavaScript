import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsIntroDecoratorsComponent } from './ts-intro-decorators.component';

describe('TsIntroDecoratorsComponent', () => {
  let component: TsIntroDecoratorsComponent;
  let fixture: ComponentFixture<TsIntroDecoratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsIntroDecoratorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsIntroDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
