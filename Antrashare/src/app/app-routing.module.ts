import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './features/news-feed/newsFeed/newsFeed.component';
import { AdminComponent } from './features/admin/admin.component';
import { LoginComponent } from './features/login/login/login.component';
import { CanVisitAdminGuard } from './shared/guards/can-visit-admin.guard';
import { FetchAdminDataResolver } from './shared/fetch-admin-data.resolver';
const routes: Routes = [
  //localhost:4200/newsfeed
  // {path:"",component:NewsFeedComponent},
  {path:"admin", component:AdminComponent,
  canActivate:[CanVisitAdminGuard],
  resolve:[FetchAdminDataResolver]
},
  {path:"login",component: LoginComponent},
  {path:'newsfeed', loadChildren: () => import('./features/news-feed/news-feed.module').then(m => m.NewsFeedModule),

},
  // {path:"**",component: LoginComponent},

  // localhost:4200/newsfeed/stroy/id

  //Path Parameter// Query Parameter// Data Injection
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
