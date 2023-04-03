import { EmailService } from 'src/app/core/Service/email.service';
import {AbstractControl, AsyncValidatorFn,ValidationErrors,} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class emailValidator {
    static usedEmail(emailService: EmailService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors|null> => {
            return emailService.checkIfEmailExists(control.value)
                       .pipe(
                            map((res:boolean) => {
                                console.log(res)
                                if(!res) return null
                                else return {usedEmail: "Email already been used"} 
                            })
                       )
        }
    }
}