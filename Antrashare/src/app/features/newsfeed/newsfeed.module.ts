import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AppRoutingModule } from 'src/app/shared/app-routing.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { NewsfeedComponent } from './newsfeed.component';
import { WelcomeDirective } from "../../shared/welcome.directive";
import { DisplayCharPipe } from "../../shared/display-char.pipe";
import { LikeListComponent } from '../like-list/likelist.component';
import { MatMenuModule, MatMenuTrigger } from "@angular/material/menu";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { RouterModule, Routes } from '@angular/router';
import { PostformComponent } from './postform/postform.component';
import { StorylistComponent } from './storylist/storylist.component';

const routes: Routes = [
  { path: "", component: NewsfeedComponent },
  {
    path: ":storyId", component: StorylistComponent,
    canActivate: [],
    // CanDeactivate: [],
  }
  // {
  //   path: '',
  //   component: NewsfeedComponent,
  //   children: [
  //     { path: 'storylist/:storyId', component: StorylistComponent },
  //     { path: 'postform', component: PostformComponent }
  //   ]
  // }
];

@NgModule({
  declarations: [
    NewsfeedComponent,
    WelcomeDirective,
    DisplayCharPipe,
    LikeListComponent,
    PostformComponent,
    StorylistComponent
  ],
  imports: [
    CommonModule,
    // AppRoutingModule,
    AngularMaterialModule,
    MatMenuModule,
    MatSnackBarModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NewsfeedComponent,
    LikeListComponent
  ],
  providers: [
    DisplayCharPipe,
    MatMenuTrigger
  ],

})
export class NewsfeedModule { }
