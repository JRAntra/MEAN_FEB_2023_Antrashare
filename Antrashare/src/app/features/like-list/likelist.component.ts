import {Component, OnInit, ViewChild} from '@angular/core';
import { LikelistService } from 'src/app/core/services/likelist/likelist.service';
import { Subscription } from 'rxjs';
import { DisplayCharPipe } from 'src/app/shared/display-char.pipe';
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.sass'],
  providers: [DisplayCharPipe, MatMenuTrigger]

})
export class LikeListComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger?: MatMenuTrigger;
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
  openMenu() {
    // @ts-ignore
    this.trigger.openMenu();
  }

}
