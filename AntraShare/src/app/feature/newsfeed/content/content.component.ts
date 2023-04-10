import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsfeedServiceService } from 'src/app/feature/newsfeed/newsfeed_service/newsfeed-service.service';
import { AdminServiceService } from 'src/app/core/adminService/admin-service.service';
import { AngularMaterialModule } from 'src/app/share/angular-material/angular-material.module';
import { Observable, map, tap } from 'rxjs';
import { Story } from '../interface/story';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  story1: any;
  id: string | null = '';
  blur: string = '';
  showComment = false;
  showLike = false;
  users: any;
  likeList: any[] = [];
  story$: Observable<Story> = new Observable();
  constructor(
    private newService: NewsfeedServiceService,
    private route: ActivatedRoute,
    private userService: AdminServiceService
  ) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params) => {
    //   this.id = params.get('id');
    //   // console.log(params.get('id'));

    //   this.newService.getNewById(params.get('id')).subscribe((n) => {
    //     this.story = n;
    //     console.log(this.story);
    //   });
    //   // console.log(this.id);
    // });
    this.story$ = this.route.data.pipe(map((data) => data?.['content']));
    // this.story$.pipe(tap((res) => console.log(res, 123)));
    // console.log(this.story1);

    // this.story = this.story$.pipe(map((res) => res as Story));
    // this.userService.getUsers().subscribe((u) => {
    //   this.users = u;
    //   this.users.forEach((u: any) => {
    //     this.story.likedIdList.forEach((id: any) => {
    //       if (id.userId == u._id) {
    //         this.likeList.push(u);
    //       }
    //     });
    //   });
    //   // console.log(this.likeList);
    // });
  }
  toggleCommentWindow() {
    if (this.showComment) {
      this.blur = '';
      this.showComment = false;
      return;
    }
    this.blur = 'blur';
    this.showComment = true;
  }
  toggleLikeWindow() {
    if (this.showLike) {
      this.blur = '';
      this.showLike = false;
      return;
    }
    this.blur = 'blur';
    this.showLike = true;
  }
}
