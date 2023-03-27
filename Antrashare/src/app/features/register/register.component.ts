import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from 'src/app/core/Service/register.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  formData = {
    userName:'',
    pwd:'',
    confirm_pwd:'',
    email:''
  }

  constructor(private router: Router, private fb:FormBuilder, private registerService:RegisterService) { }

  goToLogin() {
    this.router.navigate(['login']);
  }

  validateForm:FormGroup = this.fb.group({
    username:['',[Validators.required,
                  Validators.minLength(5),
                  Validators.maxLength(20)]],
    password:['',[Validators.minLength(8),
                  Validators.maxLength(20)]],
    password_confirm:['',[Validators.minLength(8),
                          Validators.maxLength(20),
                          this.pwdValue]],
    email:['',[Validators.required,
                Validators.email]]
  });

  pwdValue(password: FormControl, password_confirm: FormControl):object{
    if(password==null||password_confirm==null){
      return {}
    }else{
      if(password.value!=password_confirm.value){
        return {msg:'the password is not same, pls enter the same password.'}

      }else{
        console.log(password.value);
        return {}
      }
    }

  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      password_confirm: new FormControl(),
      email: new FormControl()
    });

  }
  onSubmit() {
    console.log(this.validateForm.value);

    this.registerService.register(this.validateForm.value.username, this.validateForm.value.password, this.validateForm.value.email).subscribe(
      result => console.log(result),
      error => console.log(error)
    );
    

    // this.http.post('http://localhost:4231/api/register/createNewAccount',
    //  this.validateForm.value).subscribe(response => {
    //   console.log(response);
    // });

    this.validateForm.reset();
    this.goToLogin();
  }

}
