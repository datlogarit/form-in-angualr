import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // signInForm = new FormGroup({
  //   username: new FormControl(''),//<== defau value
  //   password: new FormControl(''),//<==defaul value
  //   rememberMe: new FormControl(false)
  // })
  OnSubmit(){
    console.log(this.signInForm)
  }
  signInForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: '',
      password: '',
      rememberMe: false,
    })
    setTimeout(() => {
      //setValue: khi muấn set lại tất cả giá trị
      //pathvalue: khi muấn cập nhật giá trị
      this.signInForm.setValue({
        //fake API call then update form value
        username: 'doan dat',
        password: 'nhungNumberOne',
        rememberMe: true,
      })
    }, 2000);
  }

}
