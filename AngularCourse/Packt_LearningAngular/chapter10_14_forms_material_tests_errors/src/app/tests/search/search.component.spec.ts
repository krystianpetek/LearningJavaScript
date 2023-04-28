import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set the searchText', () => {
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    input.value = 'Angular';
    input.dispatchEvent(new CustomEvent('input'));
    expect(component.searchText.value).toBe('Angular');
  });
});
