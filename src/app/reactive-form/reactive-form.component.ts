import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NowhileSpaceValidator } from '../share/whileSpaceValidator.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // signInForm = new FormGroup({khởi tạo form với formGroup
  //   username: new FormControl(''),//<== defau value, khởi tạo giá trị cho form
  //   password: new FormControl(''),//<==defaul value,khởi tạo giá trị cho form
  //   rememberMe: new FormControl(false)
  // })
  OnSubmit() {
    console.log(this.signInForm)
  }
  signInForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: ['',
      Validators.compose([//gộp nhiều validators
      Validators.required,//validators 1
      Validators.minLength(6),//validators 2
      //Validators.pattern(/^[a-z]{6,32}$/i)
      NowhileSpaceValidator()
    ]
      )],//validators 3

      password: ['',

      Validators.compose([
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/)])],

      rememberMe: false,
    })
    setTimeout(() => {
      //setValue: khi muấn set lại tất cả giá trị
      //pathvalue: khi muấn cập nhật giá trị
      this.signInForm.setValue({
        //fake API call then update form value
        username: 'doan dat',
        password: 'abc',
        rememberMe: true,
      })
    }, 2000);
  }

}
