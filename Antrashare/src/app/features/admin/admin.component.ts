import { Component, OnInit } from '@angular/core';
import {ConfirmationService, ConfirmEventType, MenuItem, MessageService} from 'primeng/api';

interface User {
  name: string,
  id: string
} 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  providers: [ConfirmationService,MessageService]
})

export class AdminComponent implements OnInit {
  items: MenuItem[];

  activeItem: MenuItem;


  users: User[];

  selectedUser: User;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {
      this.users = [
          {name: 'username1', id: '0001'},
          {name: 'username2', id: '0002'},
          {name: 'username3', id: '0003'}
      ];
      this.selectedUser = this.users[0];

      this.items = [
        {label: 'My Profile', icon: 'pi pi-fw pi-home'},
        {label: 'News Feed', icon: 'pi pi-fw pi-calendar'},
        {label: 'Settings', icon: 'pi pi-fw pi-pencil'},
    ];

    this.activeItem = this.items[0];
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  confirm() {
      this.confirmationService.confirm({
          message: 'Do you want to delete this record?',
          header: 'Delete Confirmation',
          icon: 'pi pi-info-circle',
          accept: () => {
              this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted'});
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
  



}
