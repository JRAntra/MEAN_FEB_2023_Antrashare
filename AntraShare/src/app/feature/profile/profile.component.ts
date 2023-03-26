import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDataService } from 'src/app/core/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private userService: UserDataService) {}

  reactiveForm: FormGroup = new FormGroup({});
  users: any[] = [];
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
      gender: new FormControl(null),
      age: new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),
    });
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
        console.log(this.users);
      },
      (err) => console.error(err)
    );
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
    // console.log(this.reactiveForm.value);
  }
}
