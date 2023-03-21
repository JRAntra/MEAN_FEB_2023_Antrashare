import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [NewsfeedComponent, ContentComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    RouterModule,
  ],
  exports: [NewsfeedComponent],
})
export class NewsfeedModule {}
