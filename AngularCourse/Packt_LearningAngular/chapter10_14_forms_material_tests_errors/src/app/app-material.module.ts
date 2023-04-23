import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MaterialControlsComponent } from './material-controls/material-controls.component';

@NgModule({
  declarations: [MaterialControlsComponent],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
  ],
})
export class AppMaterialModule {}
