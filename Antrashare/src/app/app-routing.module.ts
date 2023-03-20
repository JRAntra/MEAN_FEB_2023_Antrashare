import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './features/my-profile/my-profile/my-profile.component';
import { NewsFeedComponent } from './features/news-feed/news-feed/news-feed.component';

const routes: Routes = [
  {path: 'my-profile', component: MyProfileComponent},
  {path: 'news-feed', component: NewsFeedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
