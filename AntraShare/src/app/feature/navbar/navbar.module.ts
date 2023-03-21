import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AngularMaterialModule } from 'src/app/share/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
