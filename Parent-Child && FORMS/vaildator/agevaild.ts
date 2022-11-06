import { AbstractControl, ValidationErrors } from "@angular/forms"

export function agegtr(cntrl:AbstractControl) : ValidationErrors | null {

    let age = cntrl.value;
    if(age<=18){
        return {'agegtr': false , 'result': 'Age Not Vaild'}
    }
    else {
        return null;
    }
}