import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { MatAccordion } from "@angular/material/expansion";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.sass']
})
export class SettingComponent {
  // @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  constructor(private router: Router) { }
  // panelOpenState = false;
  // a:boolean=true

  isAdmin: boolean = true

  NaviToAdmin() {
    this.router.navigateByUrl("/admin").then()
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  Logout() {
    // localStorage.removeItem("user")
    localStorage.clear();

    this.router.navigateByUrl("/login").then(r => {
    });
  }
  firstName: string = ""
  showFirstName() {
    console.log(this.firstName)
  }

}
