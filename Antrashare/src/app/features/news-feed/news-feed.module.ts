import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './newsFeed/newsFeed.component';
import { StoryListComponent } from './newsFeed/story-list/story-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PostFormComponent } from './newsFeed/post-form/post-form.component';


const routes: Routes = [
  //localhost:4200/newsfeed/:storyId
  //localhost:4200/newsfeed/2
  // {path:"", component: NewsFeedComponent, pathMatch:'prefix',
  {path:":storyId", component: StoryListComponent,
  // children:[
  //   {path:'storyList/:storyId', component: StoryListComponent},
  //   {path:'**', component:PostFormComponent}
  // ]
  

}  

  // localhost:4200/newsfeed/storyList
  // localhost:4200/comments
];

@NgModule({
  declarations: [
    NewsFeedComponent,
    StoryListComponent,
    //b,
    //c
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    NewsFeedComponent,
    //b
    //c
  ]
})
export class NewsFeedModule {}

// NgModule(){
//   return function foo ({}){
//     return  NewsFeedComponent
//   }
  
// }

// @NgModule() foo