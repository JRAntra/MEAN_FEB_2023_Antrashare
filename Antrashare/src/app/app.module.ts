import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { Route,RouterModule } from '@angular/router';
import { NewsFeedModule } from './features/news-feed/news-feed.module';
import { NewsFeedComponent } from './features/news-feed/newsFeed/newsFeed.component';
// import { TestService } from './core/services/test.service';
import { HttpClientModule } from '@angular/common/http'
import { LoginModule } from './features/login/login.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewsFeedModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
