import { Component, OnInit } from '@angular/core';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { UserinfoService } from 'src/app/core/Service/userinfo.service';
import { User } from 'src/app/shared/model/user';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass'],
  providers: [ConfirmationService,MessageService]
})
export class SettingsComponent implements OnInit {
  username = {
    value : "username-test",
    isEditing : false,
  }
  nameControl : FormControl;

  password = {
    value : "password-test",
    isEditing : false,
  }
  passwordControl : FormControl;

  email = {
    value : "email-test",
    isEditing : false,
  }
  emailControl : FormControl;

  gender = {
    value : "gender-test",
    isEditing : false,
  }
  genderControl : FormControl;

  age = {
    value : 0,
    isEditing : false,
  }
  ageControl : FormControl;



  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private router: Router, private userinfoService: UserinfoService) { 
    this.nameControl = new FormControl("");
    this.passwordControl = new FormControl("");
    this.emailControl = new FormControl("");
    this.genderControl = new FormControl("");
    this.ageControl = new FormControl("");
  }

  ngOnInit(): void {
    this.username.value = this.userinfoService.userinfo.userName;
    this.email.value = this.userinfoService.userinfo.userEmail;
    this.gender.value = (this.userinfoService.userinfo.gender) as string;
    this.age.value = (this.userinfoService.userinfo.age) as number;

  }

  confirm(){
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});
            this.router.navigate([""]);
        },
        reject: (type: any) => {
            switch(type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
                break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
                break;
            }
        }
    });
    }

    saveData(event :Event){
      console.log("save data");
      //property
      let property;
      let elementType = (<HTMLButtonElement>event.target).type;
      if(elementType === "button"){
        property = (<HTMLButtonElement>event.target).parentElement?.id;
      }else{
        property = (<HTMLSpanElement>event.target).parentElement?.parentElement?.id;
      }
      switch(property){
        case "username-actions":
          this.username.value = this.nameControl.value;
          this.username.isEditing = !this.username.isEditing;
          break;
        case "password-actions":
          this.password.value = this.passwordControl.value;
          this.password.isEditing = !this.password.isEditing;
          break;
        case "email-actions":
          this.email.value = this.emailControl.value;
          this.email.isEditing = !this.email.isEditing;
          break;
        case "gender-actions":
          this.gender.value = this.genderControl.value;
          this.gender.isEditing = !this.gender.isEditing;
          break;
        case "age-actions":
          this.age.value = this.ageControl.value;
          this.age.isEditing = !this.age.isEditing;
          break;
        
      }
    }

    toggleEditStatus(event :Event){
      //check the clicked element is <span> or <button>;
      let elementType = (<HTMLButtonElement>event.target).type;
      //set the property to the clicked parent classname;
      let property;
      if(elementType === "button"){
        property = (<HTMLButtonElement>event.target).parentElement?.id;
      }else{
        property = (<HTMLSpanElement>event.target).parentElement?.parentElement?.id;
      }
      console.log(property);
      //Based on the id change corresponding property;
      switch(property){
        case "username-actions":
          this.username.isEditing = !this.username.isEditing;
          break;
        case "password-actions":
          this.password.isEditing = !this.password.isEditing;
          break;
        case "email-actions":
          this.email.isEditing = !this.email.isEditing;
          break;
        case "gender-actions":
          this.gender.isEditing = !this.gender.isEditing;
          break;
        case "age-actions":
          this.age.isEditing = !this.age.isEditing;
          break;
        
      }

      

    }

}
