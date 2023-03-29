import { Component, OnInit } from '@angular/core';
import { LikelistService } from 'src/app/core/services/likelist/likelist.service';
import { Subscription } from 'rxjs';
import { DisplayCharPipe } from 'src/app/shared/display-char.pipe';

@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.sass'],
  providers: [DisplayCharPipe]
})
export class LikeListComponent implements OnInit {

  likes: string[] = [];
  private likelistSubscription!: Subscription;

  constructor(private likelistService: LikelistService) { }

  ngOnInit(): void {
    this.likelistSubscription = this.likelistService.likelistSubject.subscribe((likes) => {
      this.likes = likes;
    });
  }

  ngOnDestroy(): void {
    this.likelistSubscription.unsubscribe();
  }

}