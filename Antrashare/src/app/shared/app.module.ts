import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from '../features/login/login.module';
import { MyProfileModule } from '../features/my-profile/my-profile.module';
import { NewsfeedModule } from '../features/newsfeed/newsfeed.module';
import { RegisterModule } from '../features/register/register.module';
import { SettingModule } from "../features/setting/setting.module";
import { AdminModule } from "../features/admin/admin.module";
import { NavBarModule } from '../features/nav-bar/nav-bar.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    MyProfileModule,
    NewsfeedModule,
    RegisterModule,
    SettingModule,
    AdminModule,
    NavBarModule,
    AngularMaterialModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
