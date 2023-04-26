import { Component, OnInit } from '@angular/core';
import { LikelistService } from 'src/app/core/services/likelist/likelist.service';
import { NewsfeedService } from 'src/app/core/services/newsfeed/newsfeed.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-storylist',
  templateUrl: './storylist.component.html',
  styleUrls: ['./storylist.component.sass']
})
export class StorylistComponent implements OnInit {

  constructor(
    private likelistService: LikelistService,
    private newsfeedService: NewsfeedService,
    private ar: ActivatedRoute,
    private router: Router) { }

  newsfeedData: any[] = [];

  ngOnInit(): void {
    this.newsfeedService.getNewsfeed().subscribe((data: any) => {
      this.newsfeedData = data.map((item: any) => {
        return {
          ...item,
          isLiked: false
        };
      });
    });

    // this.ar.params.subscribe(
    //   res => console.log(res)
    // )
    // console.log(this.ar.snapshot.params)
  }

  // goToNextStory() {
  //   let newStoryId = +this.ar.snapshot.params['storyId'] + 1;
  //   // let newStoryId = +(this.ar.snapshot.params.get('storyId')!) + 1;
  //   this.router.navigate(['newsfeed/' + newStoryId]);
  // }

  likeStory(item: any) {
    // const story = item.content.text;
    this.likelistService.addToLikelist(item);
  }

  goToAdmin() {
    this.router.navigate(['/admin']);
  }
}
