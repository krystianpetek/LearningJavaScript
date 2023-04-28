import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyComponent } from './spy.component';
import { Title } from '@angular/platform-browser';

describe('with spy object', () => {
  let component: SpyComponent;
  let fixture: ComponentFixture<SpyComponent>;

  let titleSpy: jasmine.SpyObj<Title>;

  beforeEach(async () => {
    titleSpy = jasmine.createSpyObj('Title', ['getTitle', 'setTitle']);
    titleSpy.getTitle.and.returnValue('My title');

    TestBed.configureTestingModule({
      declarations: [SpyComponent],
      providers: [{ provide: Title, useValue: titleSpy }],
    });

    fixture = TestBed.createComponent(SpyComponent);
    component = fixture.componentInstance;
  });

  it('should get the title', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('My title');
  });
});
