import { Component, OnInit } from '@angular/core';
import {ConfirmationService, ConfirmEventType, MessageService,Message} from 'primeng/api';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  providers: [ConfirmationService,MessageService]
})

export class AdminComponent implements OnInit {

  msgs : Message[] =[];

  passwordIsVisible : boolean = false;

  users: User[] = [];

  selectedUser!: User;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private _userService: UserService) {
  }

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe(
      (res) => {
        this.users = res;
        this.selectedUser = this.users[0];

      }
    )
  }

  confirm() {
      this.confirmationService.confirm({
          message: 'Do you want to delete this record?',
          header: 'Delete Confirmation',
          icon: 'pi pi-info-circle',
          accept: () => {
              this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted'});
              console.log(this.selectedUser.userName);
              this.users = this.users.filter(user => user.userEmail !== this.selectedUser.userEmail);
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

  onClick(){
    if(this.passwordIsVisible){
      this.passwordIsVisible = false;
    }
  }
  



}
