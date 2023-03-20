import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { AngularMaterialModule } from 'src/app/share/angular-material/angular-material.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [ProfileComponent],
})
export class ProfileModule {}
