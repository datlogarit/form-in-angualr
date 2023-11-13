import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule, } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { Day37FromAsyncValidatorComponent } from './day37-from-async-validator/day37-from-async-validator.component';

const router: Routes = [
  {
    path: 'template-drivent-form',
    component: SignInComponent
  },
  {
    path:'reactiveForm',
    component:ReactiveFormComponent
  },
  {
    path:'FormAsync',
    component:Day37FromAsyncValidatorComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ReactiveFormComponent,
    Day37FromAsyncValidatorComponent
  ],
  imports: [
    RouterModule.forRoot(router),
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
