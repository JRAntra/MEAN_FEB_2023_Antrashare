import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AngularMaterialModule } from 'src/app/share/angular-material/angular-material.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
