import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from '../features/login/login.module';
import { MyProfileModule } from '../features/my-profile/my-profile.module';
import { SettingModule} from "../features/setting/setting.module";
import {AdminModule} from "../features/admin/admin.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LoginModule,
        MyProfileModule,
        SettingModule,
        AdminModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
