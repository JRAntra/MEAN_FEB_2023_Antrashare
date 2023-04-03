import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

//Import Services
import { LoginService } from 'src/app/core/Service/login.service';
import { MessageService } from 'primeng/api';
import { UserinfoService } from 'src/app/core/Service/userinfo.service';
import { User } from 'src/app/shared/model/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  checked!: boolean;

  constructor(private router: Router,
    private loginService: LoginService,
    private messageService: MessageService,
    private userinfoService: UserinfoService) { }


  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Congretulations', detail: 'You have successfully registered an new account' });
  }

  showError(error: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
  }


  successLogin(){
    setTimeout(() => {
      this.loginForm.reset();
      this.goToNewsfeed();
    }, 2000);
  }

  goToRegister() {
    this.router.navigate(['register']);
  }

  goToNewsfeed() {
    this.router.navigate(['news-feed']);
  }

  ngOnInit(): void {
    console.log(this.userinfoService.userinfo)
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),

    });
    
  }
  onSubmit() {
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: (result) => { 
        // console.log(result as User);
        this.userinfoService.set_userinfo_login(
          (result as User).userName,
          (result as User).userEmail,
          (result as User).userRole,
          (result as User).age,
          (result as User).phone)
        
        this.showSuccess(),
        this.successLogin() 
      },
      error: (error) => { console.log(error); this.showError(error.error) }
    });
  }

}
