import { Component, OnInit } from '@angular/core';
import {ConfirmationService, ConfirmEventType, MessageService,Message} from 'primeng/api';
import { UserinfoService } from 'src/app/core/Service/userinfo.service';
import { User } from 'src/app/shared/model/user';

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

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private userinfoService: UserinfoService) {
  }

  ngOnInit(): void {
    this.selectedUser = this.userinfoService.userinfo
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
