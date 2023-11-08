import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  onSubmit(form: NgForm) {
    console.log(form)
  }
  userInfor = {
    name: 'doan dat',
    password:'datlogarit',
    checkRemember:true
  }
}
