// import { HttpClient } from '@angular/common/http';
import { UsernameService } from 'src/app/core/Service/username.service';
import {AbstractControl, AsyncValidatorFn,ValidationErrors,} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class usernameValidator {
    static usedUsername(usernameService: UsernameService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors|null> => {
            return usernameService.checkIfUsernameExists(control.value)
                       .pipe(
                            map((res:boolean) => {
                                console.log(res)
                                if(!res) return null
                                else return {usedUsername: "Username already been used"} 
                            })
                       )
        }
    }
}