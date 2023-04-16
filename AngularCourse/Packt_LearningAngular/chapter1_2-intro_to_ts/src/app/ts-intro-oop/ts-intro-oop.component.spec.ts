import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsIntroOopComponent } from './ts-intro-oop.component';

describe('TsIntroOopComponent', () => {
  let component: TsIntroOopComponent;
  let fixture: ComponentFixture<TsIntroOopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsIntroOopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsIntroOopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
