import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ApiService } from '../share/api.service';
import { Observable, startWith, map, timer, switchMap, Subject, tap, filter, take } from 'rxjs'
const PASSWORD_PATTERN = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;

const validateUserNameFromApi = (api: ApiService) => {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return api.validateUsername(control.value).pipe(
      map((isValid: boolean) => {
        return isValid ? null : { usernameDuplicated: true };
      })
    );
  };
};

const validateUserNameFromApiDebounce = (api: ApiService) => {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return timer(500).pipe(
      switchMap(() =>
        api.validateUsername(control.value).pipe(
          map((isValid) => {
            return isValid ? null : { userDuplicated: true }
          })
        )
      )
    );
  };
};

const validateMatchedControlsValue = (
  firstControlName: string = 'password',
  secondControlName: string ='confirmPassword'
) => {
  return function (formGroup: FormGroup): ValidationErrors | null {
    const { value: firstControlValue } = formGroup.get(
      firstControlName
    ) as AbstractControl;
    const { value: secondControlValue } = formGroup.get(
      secondControlName
    ) as AbstractControl;
    return firstControlValue === secondControlValue
      ? null
      : {
        valueNotMatch: {
          firstControlValue,
          secondControlValue,
        },
      };
  };
};
@Component({
  selector: 'app-day37-from-async-validator',
  templateUrl: './day37-from-async-validator.component.html',
  styleUrls: ['./day37-from-async-validator.component.css']
})
export class Day37FromAsyncValidatorComponent implements OnInit {
  constructor(private fb: FormBuilder, private api: ApiService) { }


  //registerForm!: FormGroup;
  registerForm = this.fb.group(
    {
      username: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^[a-z]{6,32}$/i),
        ]),
        validateUserNameFromApiDebounce(this.api),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(PASSWORD_PATTERN),
        ]),
      ],
      confirmPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(PASSWORD_PATTERN),
        ]),
      ],

    },
    { Validators: validateMatchedControlsValue('password', 'confirmPassword') },
  );

  submitForm() {
    console.log(this.registerForm)
  }


  formSubmit$ = new Subject();
  ngOnInit(): void {
    //dhs - phần này để
    this.formSubmit$
      .pipe(
        tap(() => this.registerForm.markAsDirty()),
        switchMap(() =>
          this.registerForm.statusChanges.pipe(
            startWith(this.registerForm.status),
            filter((status) => status !== 'PENDING'),
            take(1)
          )
        ),
        filter((status) => status === 'VALID'),
        tap(() => {
          this.submitForm();
        })
      )
      .subscribe();
    //dhs
  }
}
