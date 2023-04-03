import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:4231/api/register';


  constructor(private http: HttpClient) { }

  register(username: string, password: string, email: string) {
    const body = {
      userName: username,
      password: password,
      userEmail: email
    };
    return this.http.post(`${this.apiUrl}/createNewAccount`, body);
  }

  checkEmailExisted(email : string){
    console.log(`${this.apiUrl}/checkExistByEmail/${email}`);
    this.http.get(`${this.apiUrl}/checkExistByEmail/${email}`).subscribe(
      res => console.log(res)
    )
    return this.http.get(`${this.apiUrl}/checkExistByEmail/${email}`);
  } 

  checkUsernameExisted(username : string){
    return this.http.get(`${this.apiUrl}/checkExistByUsername/${username}`);
  } 
}
