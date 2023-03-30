import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './features/news-feed/newsFeed/newsFeed.component';
import { AdminComponent } from './features/admin/admin.component';
import { LoginComponent } from './features/login/login/login.component';
const routes: Routes = [
  //localhost:4200/newsfeed
  {path:"",component:NewsFeedComponent},
  {path:"newsfeed",component:NewsFeedComponent},
  {path:"admin", component:AdminComponent},
  {path:"login",component: LoginComponent},
  {path:"**",component: NewsFeedComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
