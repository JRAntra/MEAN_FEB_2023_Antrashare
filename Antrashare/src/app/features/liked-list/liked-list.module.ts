import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikedListComponent } from './liked-list/liked-list.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { LimitedTwentyCharacterPipe } from './liked-list/limited-twenty-character.pipe';



@NgModule({
  declarations: [LikedListComponent,LimitedTwentyCharacterPipe],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [LikedListComponent]
})
export class LikedListModule { }
