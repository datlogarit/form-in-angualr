import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  patterOfName = /^[a-z]{6,32}$/i// chỉ gồm các ký tự từ a-z, 6 đến 32
  patterOfPassW = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;
  onSubmit(form: NgForm) {
    console.log(form)
  }
  userInfor = {
    name: 'doandat',
    password:'datlogarit',
    checkRemember:true
  }
}
