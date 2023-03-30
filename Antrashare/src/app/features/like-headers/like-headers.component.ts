import { Component, OnInit } from '@angular/core';
import {LikeListService} from "../../core/services/like-list/like-list.service";
import {DisplayCharPipe} from "../../shared/display-char.pipe";

@Component({
  selector: 'app-like-headers',
  templateUrl: './like-headers.component.html',
  styleUrls: ['./like-headers.component.sass']
})
export class LikeHeadersComponent implements OnInit {

  constructor(private likeListService:LikeListService) { }
  likeList :string[] = []


  ngOnInit(): void {
    this.likeListService.getStorySubject().subscribe({
      next: value => {
        this.likeList = value
      },
      error: err => console.log(err)
    })
  }
  openMenu() {
    // @ts-ignore
    this.trigger.openMenu();
  }

}
