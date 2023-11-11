import { AbstractControl, ValidatorFn } from "@angular/forms";


export function NowhileSpaceValidator(): ValidatorFn{
  return (control:AbstractControl) =>{
    let controlVal = control.value
    let isWhileSpace = controlVal.trim().length === 0;
    return isWhileSpace ? {validator:' value is not whileSpace'} : null;

  }
}
