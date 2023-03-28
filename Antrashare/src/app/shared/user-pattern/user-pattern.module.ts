import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
export interface User {
  "_id": string,
  "name": string,
  "userName": string,
  "userEmail": string,
  "password": string,
  "userRole": string,
  "age": number,
  "gender": string,
  "phone": number,
  "__v": number
}
export interface RegisterAccount {
  "userName": string,
  "userEmail": string,
  "password": string,
}



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
  ],

})
export class UserPatternModule {

}
