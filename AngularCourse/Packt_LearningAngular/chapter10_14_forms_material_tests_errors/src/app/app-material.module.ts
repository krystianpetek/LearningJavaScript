import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialControlsComponent } from './material-controls/material-controls.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [MaterialControlsComponent],
  imports: [
    ProductsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class AppMaterialModule {}
