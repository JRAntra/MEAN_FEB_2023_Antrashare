import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private route: Router) {}

  reactiveForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
      gender: new FormControl(null),
      age: new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),
    });
  }

  fields = [
    { name: 'Username', editable: false, type: 'text' },
    { name: 'Password', editable: false, type: 'password' },
    { name: 'Gender', editable: false, type: 'text' },
    { name: 'Age', editable: false, type: 'number' },
    { name: 'Email', editable: false, type: 'email' },
    { name: 'Phone', editable: false, type: 'number' },
  ];

  startEdit(index: number) {
    this.fields[index].editable = true;
  }
  confirmEditCreate(index: number) {
    this.fields[index].editable = false;
    console.log(this.reactiveForm.value);
  }

  goToAdmin() {
    this.route.navigate(['admin']);
  }
}
