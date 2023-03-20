import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from '../features/login/login.module';
import { MyProfileModule } from '../features/my-profile/my-profile.module';
import { NewsfeedModule } from '../features/newsfeed/newsfeed.module';
import { RegisterModule } from '../features/register/register.module';

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
    RegisterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
