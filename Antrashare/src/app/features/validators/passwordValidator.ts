import {AbstractControl, ValidationErrors, ValidatorFn,} from '@angular/forms';

export class passwordValidator{
    static passwordformat(): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {
            const password = control.value;
            const hasUppercase = /[A-Z]/.test(password)
            const hasLowercase = /[a-z]/.test(password)
            const hasSpecialCharacter = /[^A-Za-z 0-9]/.test(password)
            if(hasUppercase &&hasLowercase&&hasSpecialCharacter){
                return null;
            }else{
                return {formatError: "password must contain 1 uppercase letter, 1 lowercase letter and 1 special character"}
            }
        }
    }

    static comfirmPassword(): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {
            const confirm_password = control.value;
            const password = control.root.get("password")?.value
            console.log(confirm_password)
            console.log(password)
            if(confirm_password !== password){
                return {confirmPasswordError: 'Password confirm should be the same as password'}
            }else{
                return null;
            }
        }
    }
}