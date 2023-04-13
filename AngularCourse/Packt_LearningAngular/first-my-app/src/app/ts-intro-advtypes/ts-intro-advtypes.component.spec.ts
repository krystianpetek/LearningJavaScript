import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsIntroAdvtypesComponent } from './ts-intro-advtypes.component';

describe('TsIntroAdvtypesComponent', () => {
  let component: TsIntroAdvtypesComponent;
  let fixture: ComponentFixture<TsIntroAdvtypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsIntroAdvtypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsIntroAdvtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
