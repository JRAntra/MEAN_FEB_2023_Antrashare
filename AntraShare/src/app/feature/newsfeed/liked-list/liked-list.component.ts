import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LikeListService } from 'src/app/core/liked_list_service/like-list.service';

@Component({
  selector: 'app-liked-list',
  templateUrl: './liked-list.component.html',
  styleUrls: ['./liked-list.component.scss'],
})
export class LikedListComponent implements OnInit {
  @Input('show-list')
  hideForm: boolean = true;
  @Output('hide-list')
  hideListEmitter = new EventEmitter<boolean>();
  likes: any[] = [];
  constructor(private likeService: LikeListService) {}

  ngOnInit(): void {
    this.likeService.likesListData.subscribe((data) => (this.likes = data));
  }
  toggleLikeList() {
    this.hideListEmitter.emit(!this.hideForm);
  }
}
