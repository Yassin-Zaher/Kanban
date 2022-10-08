import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { GoogleSigninDirective } from './google-signin.directive';
// Angular Material 
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SignupPageComponent } from './signup-page/signup-page.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    GoogleSigninDirective,
    SignupPageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class UserModule { }
