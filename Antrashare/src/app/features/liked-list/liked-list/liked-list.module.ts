import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikedListComponent } from '../liked-list.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { LimitedTwentyCharacterPipe } from '../limited-twenty-character.pipe';



@NgModule({
  declarations: [LikedListComponent,LimitedTwentyCharacterPipe],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [LikedListComponent]
})
export class LikedListModule { }
