import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDatepickerModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
} from '@angular/material';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [NewsfeedComponent, NavbarComponent, ContentComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  exports: [NewsfeedComponent, NavbarComponent],
})
export class NewsfeedModule {}
