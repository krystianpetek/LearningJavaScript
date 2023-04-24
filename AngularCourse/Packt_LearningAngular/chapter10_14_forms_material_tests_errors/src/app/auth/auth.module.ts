import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [AuthComponent],
})
export class AuthModule {}
