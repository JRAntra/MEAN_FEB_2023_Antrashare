import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsfeedModule } from './feature/newsfeed/newsfeed.module';
import { ProfileModule } from './feature/profile/profile.module';
import { SettingPageModule } from './feature/setting-page/setting-page.module';
import { RegisterModule } from './feature/register/register.module';
import { LoginModule } from './feature/login/login.module';
import { NavbarModule } from './feature/navbar/navbar.module';
import { AngularMaterialModule } from './share/angular-material/angular-material.module';
import { AdminModule } from './feature/admin/admin.module';
import { UserService } from './core/service/user.service';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ProfileModule,
    SettingPageModule,
    NewsfeedModule,
    AngularMaterialModule,
    LoginModule,
    NavbarModule,
    AdminModule,
    RegisterModule,
    HttpClientModule
  ],
  exports: [],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
