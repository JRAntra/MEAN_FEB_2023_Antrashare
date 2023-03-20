import { Component, OnInit } from '@angular/core';


import {MenuItem} from 'primeng/api';


interface City {
  name: string,
  code: string
}


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.sass']
})
export class MyProfileComponent implements OnInit {
  // constructor() {};
  items: MenuItem[] = [];
  bottoms: MenuItem[] = [];

  cities: City[];

  selectedCity: City = { name: '', code: '' };

    constructor() {
        this.cities = [
            {name: 'UserName', code: 'UN'},
            {name: 'Email', code: 'EM'},
            {name: 'Password', code: 'PW'},
            {name: 'Gender', code: 'S'},
            {name: 'Age', code: 'A'},
            {name: 'Phone', code: 'P'}
        ];
    }


  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
      {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
      {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    this.bottoms = [
      {label: 'Profile'},
      {label: 'News Feed'},
      {label: 'Settings'},
    ]
            
  }

  
  
  
}
