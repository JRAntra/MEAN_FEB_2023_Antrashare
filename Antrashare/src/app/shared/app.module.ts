import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from '../features/login/login.module';
import { MyProfileModule } from '../features/my-profile/my-profile.module';
import { NewsfeedComponent } from '../features/newsfeed/newsfeed.component';
import { RegisterComponent } from '../features/register/register.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    MyProfileModule,
    NewsfeedComponent,
    RegisterComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
