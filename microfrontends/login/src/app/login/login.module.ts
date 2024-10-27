import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LOGIN_ROUTES } from './login.routes';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(LOGIN_ROUTES),
    NavbarComponent
],
  exports: [LoginComponent]

})
export class LoginModule { }
