import { Component, OnInit } from '@angular/core';
import { Form, FormControl } from '@angular/forms';
import { TestService } from 'src/app/core/services/test.service';

@Component({
  selector: 'app-newsFeed',
  templateUrl: './newsFeed.component.html',
  styleUrls: ['./newsFeed.component.css']
})
export class NewsFeedComponent implements OnInit {

  constructor(private testService : TestService) { }

  stringFromParent: string = "This is the string from parent"
  inputControl : FormControl = new FormControl("")
  data:any = {}

  ngOnInit() {
  }

  onChangeInput(str: string){

    // this.stringFromParent = (<HTMLInputElement> event.target)?.value
    this.stringFromParent = str

  }
  onCustomEvent(inputStr:any){
    this.inputControl.setValue(inputStr)
  }
  async showMessage(){
    // const numb = this.testService.foo()
    // window.alert(numb)
    
  }
}
