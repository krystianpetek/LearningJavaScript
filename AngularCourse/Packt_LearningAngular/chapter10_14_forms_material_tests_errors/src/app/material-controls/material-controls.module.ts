import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MaterialControlsComponent } from './material-controls/material-controls.component';

@NgModule({
  declarations: [MaterialControlsComponent],
  imports: [MatButtonModule, MatIconModule, MatButtonToggleModule],
})
export class MaterialControlsModule {}
