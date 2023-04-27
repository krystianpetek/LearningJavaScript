import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialControlsComponent } from './material-controls.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppMaterialModule } from '../app-material.module';
import { CopyTextComponent } from '../copy-text/copy-text.component';
import { AppModule } from '../app.module';

describe('MaterialControlsComponent', () => {
  let component: MaterialControlsComponent;
  let fixture: ComponentFixture<MaterialControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialControlsComponent],
      imports: [AppModule, ReactiveFormsModule, FormsModule, AppMaterialModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
