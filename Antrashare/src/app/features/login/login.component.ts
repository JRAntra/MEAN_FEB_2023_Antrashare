import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/Service/login.service';
import { MessageService } from 'primeng/api';

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
    private messageService: MessageService) { }


  showSuccess() {
    // console.log("调用showSuccess！！！！！");
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
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),

    });

  }
  onSubmit() {
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: (result) => { console.log(result); this.showSuccess(),this.successLogin() },
      error: (error) => { console.log(error); this.showError(error.error) }
    });
    // this.loginForm.reset();
    // this.goToNewsfeed();
  }

}
