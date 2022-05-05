import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { GoogleSigninDirective } from './google-signin.directive';


@NgModule({
  declarations: [
    LoginPageComponent,
    GoogleSigninDirective
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
