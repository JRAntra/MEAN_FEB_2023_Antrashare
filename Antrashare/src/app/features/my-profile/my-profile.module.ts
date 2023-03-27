import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { PasswordPipe } from './password.pipe';


@NgModule({
  declarations: [
    MyProfileComponent,
    PasswordPipe
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    MyProfileComponent
  ]
})
export class MyProfileModule { }
