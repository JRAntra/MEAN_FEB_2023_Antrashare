import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.sass']
})
export class SettingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Logout() {
    this.router.navigateByUrl("/login");
  }

}
