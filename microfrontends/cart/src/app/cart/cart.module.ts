import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart.component';
import { CART_ROUTES } from './cart.routes';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CART_ROUTES),
    NavbarComponent
],
  exports: [CartComponent]

})
export class CartModule { }
