import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/core/Service/register.service';
import { MessageService } from 'primeng/api';

//import validators and related service
import { UsernameService } from 'src/app/core/Service/username.service';
import { usernameValidator } from '../../validators/usernameValidator';
import { EmailService } from 'src/app/core/Service/email.service';
import { emailValidator } from '../../validators/emailValidator';
import { passwordValidator } from '../../validators/passwordValidator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit{

  constructor(private router: Router,
              private fb: FormBuilder,
              private registerService: RegisterService,
              private messageService: MessageService,
              private usernameService: UsernameService,
              private emailService: EmailService) { }


  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Congretulations', detail: 'You have successfully registered an new account' });
  }

  showError(error:string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: error});
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  successRegister(){
    setTimeout(() => {
      this.validateForm.reset();
      this.goToLogin();
    }, 2000);
  }
  

  validateForm: FormGroup = this.fb.group({
    username: ['', [Validators.required,
                    Validators.minLength(5),
                    Validators.maxLength(20)],
                  [usernameValidator.usedUsername(this.usernameService)]],
    password: ['', [Validators.minLength(8),
                    Validators.maxLength(20),
                  passwordValidator.passwordformat()]],
    password_confirm: ['', [Validators.minLength(8),
                            Validators.maxLength(20),                           
                            passwordValidator.comfirmPassword()]],
    email: ['',   [Validators.required,
                  Validators.email],
                  [emailValidator.usedEmail(this.emailService)]],
    age: ['',],
    gender: ['',],
    phone: ['',]
  });

  pwdValue(password: FormControl, password_confirm: FormControl): object {
    
    console.log("密码检查中...")
    if (password== null || password_confirm == null) {
      // console.log(this.validateForm.controls['password'].value)
      // console.log("密码是空的")
      return {}
    } else {
      if (password != password_confirm) {
        console.log("密码不一样")
        return { msg: 'the password is not same, pls enter the same password.' }

      } else {
        console.log(password.value);
        return {}
      }
    }

  }

  ngOnInit(): void {
    console.log(this.validateForm.get('username'))
  }

  onSubmit() {
    console.log(this.validateForm.value);

    this.registerService.register(this.validateForm.value.username, this.validateForm.value.password, this.validateForm.value.email).subscribe({
      next: (result) => {console.log(result),this.showSuccess(),this.successRegister()},
      error: (error) => {console.log(error.error), this.showError(error.error)}
    });

  }

}
