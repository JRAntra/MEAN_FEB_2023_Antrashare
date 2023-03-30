import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, ValidatorFn, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { map, Observable, of } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface userInfo {
  name: string,
  gender: string
}
interface usernameData {
  username: string[]
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private http: HttpClient) { }

  username: FormControl = new FormControl('JR')
  // password: FormControl = new FormControl('1234')


  data: any = {
    // name: "JR",
    gender: "male"
  }


  dataSource = of(
    // { name: "JR", gender: "male" },
    // {name:"David",gender:"male"},
    // {name:"Miranda",gender:"female"},
    this.data
  ) as Observable<userInfo>

  userInfo: FormGroup = new FormGroup({
    username: new FormControl('JR', [Validators.minLength(5),Validators.maxLength(3)], [this.isUserExist()]),
    password: new FormControl('1234'),
  })



  isUserExist(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return of({username : ['JRTest']})
      // this.http.get<usernameData>("../login/user.json")
      .pipe(
        map((res) => {
          if (res.username.includes(control.value)) {
            return null
          } else {
            return { userNotExist: "Not exist" }
          }
        })

      )

      // .subscribe(
      //   (res:usernameData)=>{
      //     if(res.username.includes(control.value)){
      //       return null
      //     }else{
      //       return {userNotExist: "Not exist"}
      //     }
      //   }
      // )

    }
  }


  haveUnAndPwd(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if ((<FormGroup>control).controls["username"].value && (<FormGroup>control).controls["password"].value) {
        return null
      } else return { someThingisRequired: "either password or username is empty" }
    }
  }



  MyRequiredValidator: ValidatorFn =

    (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return { "required": "this is the custom required validator" }
      } else {
        return null;
      }
    }


  // userInfoFB = this.fb.group(
  //   {username: ['JR',
  //     [
  //     this.MyRequiredValidator,
  //     this.myMinlength(10)
  //     // Validators.minLength(3)
  //       //validator => return (abstractControl):validatorFn  => validationError
  //     ]
  //   ],
  //   password: ['1234'],
  //   students: this.fb.array([
  //     "a",
  //     "b",
  //   ])}

  // )

  userGroup: FormGroup = new FormGroup({})


  ngOnInit(): void {
    // this.initializeForm()
    // console.log(this.userInfoFB.controls["students"])
    // this.userInfoFB.controls['password'].setValue("9999")
    // console.log(this.userInfoFB.controls['password'].value);
    const dataValue = this.data.name
    

    this.userInfo.addValidators(this.haveUnAndPwd())


  }
  //validator => return (abstractControl):validatorFn  => 

  // requiredValidationFn(control: AbstractControl): ValidationErrors | null {
  //   if (!control.value) {
  //     return { "required": "this is the custom required validator" }
  //   }else{
  //     return null;
  //   }
  // }
  // MyRequiredValidator(): ValidatorFn {
  //   return this.requiredValidationFn
  // }








  myMinlength(numb: number): ValidatorFn {

    return function minLengthFn(control: AbstractControl): ValidationErrors | null {
      if (control.value.length < numb) {
        return { minLength: "you violate the custom minLength validator" }
      } else return null
    }

  }







  updatePWD() {
    // let currPWD = this.userInfoFB.controls['password'].value
    // currPWD! += 1;
    // this.userInfoFB.controls['password'].setValue(currPWD)
    console.log(this.userInfo)
    // console.log(this.userInfoFB.controls['password'].value)
  }

  get usernameControl(): FormControl {
    return this.userInfo.get('username') as FormControl
  }

  get studentsArray(): FormArray {
    return this.userInfo.get("students") as FormArray
  }


  // initializeForm(): void {
  //   this.dataSource.subscribe(
  //     (res : any) => {
  //       console.log(res)
  //       console.log(res['gender'])
  //     }
  //   )

  //   const user: userInfo = {

  //     name: "JR", 
  //     gender: "male" 
  //   }

  //   for(let key in user){
  //     console.log(user[key as keyof userInfo])
  //   }

  //   Object.keys(user).forEach((k:any) => console.log(user))
  // }
}
