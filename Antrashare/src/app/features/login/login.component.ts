import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  // loginForm:FormGroup;
  // inputname = new FormControl('');
  password : string = '123';

  constructor() { }
  

  // demoString : any = {name : "This is demo"}

  // innerHTML: string = "<h3>Changed innerHTML </h3>"
  
  // yellow :string = "yellow"

  // @Input() data : any = [];

  // onClickEventBindid() {
  //   window.alert("clicked");
  // }
  // changeUserName(event:Event) {
  //   window.alert(event);
  //   this.usernameInput = event.target?.value
  //   console.log(this.usernameInput)
  // }


  ngOnInit(): void {
    // this.loginForm = new FormGroup({
    //   userName: new FormControl()
    // })
  }

  showPassword(){
    console.log(this.password);
  }

  // onSubmit():void {
  //   console.log(this.loginForm);
  // }



}
