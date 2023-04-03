import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/core/service/register.service';
import { MessageService } from 'primeng/api';
import { map, Observable } from 'rxjs';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  validateForm: FormGroup = this.fb.group({
    username: ['', [Validators.required,
                    Validators.minLength(5),
                    Validators.maxLength(20)]],
    password: ['', [Validators.minLength(8),
                    Validators.maxLength(20),
                    this.pwdFormatCheck(),
                  ]],
    password_confirm: ['', [Validators.minLength(8),
                            Validators.maxLength(20),  
                            this.pwdFormatCheck()
                            ]],
    email: ['',   [Validators.required,
                  Validators.email,
                  this.emailExistsCheck()]],
    age: ['',],
    gender: ['',],
    phone: ['',]
  });


  constructor(private router: Router,
              private fb: FormBuilder,
              private registerService: RegisterService,
              private messageService: MessageService) { }



  ngOnInit(): void {
    this.validateForm.addValidators(this.pwdMatchCheck());
    console.log("onInit");
    console.log(this.validateForm.controls);
  }



  pwdFormatCheck(): ValidatorFn{
    return function(control : AbstractControl) : ValidationErrors | null {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])/;
      if(passwordRegex.test(control.value)){
        return null;
      }else{
        return {passwordFormat : "Password must contain at least one uppercase letter, one lowercase letter, and one number."}
      }
   
    }
  }

  pwdMatchCheck(): ValidatorFn{
    return function(control : AbstractControl) : ValidationErrors | null {
      if((<FormGroup>control).controls['password'].value === (<FormGroup>control).controls["password_confirm"]){
        return null;
      }else{
        return {passwordsMatch : "Your passwords do not match. Please try again."}
      }
    }
  }


  //????
  emailExistsCheck() : AsyncValidatorFn{
    return (control : AbstractControl) : Observable<ValidationErrors | null> =>{
       return this.registerService
       .checkEmailExisted(control.value)
       .pipe(
         map((result) =>{
            if(result){
              console.log('exit');
              return { usernameAlreadyExists: true };
             }else{
              console.log("null");
              return null;
             }
          }
         )
       );
    }
  }






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

  onSubmit() {
    console.log(this.validateForm.value);

    this.registerService.register(this.validateForm.value.username, this.validateForm.value.password, this.validateForm.value.email).subscribe({
      next: (result) => {console.log(result),this.showSuccess(),this.successRegister()},
      error: (error) => {console.log(error.error), this.showError(error.error)}
    });

  }

}
