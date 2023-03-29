import { Component, OnInit } from '@angular/core';
import { LikeListService } from 'src/app/core/likeList_service/like-list.service';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.scss']
})
export class LikeListComponent implements OnInit {
  hideForm: boolean = true;
  likeListArray: any[] = [];
  constructor(private likeList: LikeListService) { }

  ngOnInit(): void {
    this.likeList.likeListContent.subscribe((res) => {
      this.likeListArray = res;
    }
    )
  }

  toggleLikeList() {
    console.log("check")
    if (this.hideForm) {
      this.hideForm = false;
    } else {
      this.hideForm = true;
    }
  }
}
