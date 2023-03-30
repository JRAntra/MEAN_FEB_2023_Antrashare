import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LikeHeadersComponent} from "./like-headers.component";
import {AngularMaterialModule} from "../../shared/angular-material/angular-material.module";
import {NewsfeedModule} from "../newsfeed/newsfeed.module";
// import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    LikeHeadersComponent
  ],
  exports: [
    LikeHeadersComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NewsfeedModule,
    // MatMenuModule
  ]
})
export class LikeHeadersModule { }
