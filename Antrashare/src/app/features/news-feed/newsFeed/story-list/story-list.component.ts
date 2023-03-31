import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.sass']
})
export class StoryListComponent implements OnInit {

  @Input() inputString: String = "this is the placeholder"
  @Output() customEvent :EventEmitter<string> = new EventEmitter<string>()


  preference: "dark" | "light" = "light"

  constructor(private ar : ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    // this.ar.paramMap.subscribe(
    //   res=>console.log(res)
    // )
    // let snapshotId = this.ar.snapshot.paramMap
    this.ar.queryParamMap.subscribe(
      res=> {
        this.preference = res.get('preference') as "dark"|"light"
      }
    )

    

  }
  goToNextStory(){
    let newStoryId = +(this.ar.snapshot.paramMap.get('storyId')!) + 1
    

    // if(this.ar.snapshot.paramMap.get('storyId')){
    //   let newStoryId = +this.ar.snapshot.paramMap.get('storyId')
    // }
    this.router.navigate(['newsfeed/'+ newStoryId], { queryParams:{ name:'JR',age:30, preference:"dark" } })            
  }
 
  emitValue(str: string){
    this.customEvent.emit(str)
  }
  goToAdmin(){
    this.router.navigate(['admin'])
  }

}
