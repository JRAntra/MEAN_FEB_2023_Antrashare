import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  fields = [
    { name: 'Username', editable: false, type: 'text' },
    { name: 'Password', editable: false, type: 'password' },
    { name: 'Gender', editable: false, type: 'text' },
    { name: 'Age', editable: false, type: 'text' },
    { name: 'Email', editable: false, type: 'email' },
    { name: 'Phone', editable: false, type: 'text' },
  ];

  startEdit(index: number) {
    this.fields[index].editable = true;
  }
  confirmEditCreate(index: number) {
    this.fields[index].editable = false;
  }
}
