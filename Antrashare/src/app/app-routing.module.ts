import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './features/news-feed/newsFeed/newsFeed.component';
import { AdminComponent } from './features/admin/admin.component';
const routes: Routes = [
  //localhost:4200/newsfeed
  {path:"newsfeed",component:NewsFeedComponent},
  {path:"admin", component:AdminComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
