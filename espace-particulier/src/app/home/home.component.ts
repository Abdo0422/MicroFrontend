import { Router } from '@angular/router';
import { Component , OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  cars: any[] = [];

  constructor( private cartService: CartService) {}

  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    this.cars = [
      { id: 1, name: 'Toyota Corolla', price: 30, image: '../assets/f.jpeg' },
      { id: 2, name: 'Honda Civic', price: 35, image: '../assets/a.jpeg' },
      { id: 3, name: 'Ford Focus', price: 32, image: '../assets/e.jpeg' },
    ];
  }

  addToCart(car: any) {
    this.cartService.addToCart(car);
    alert(`${car.name} has been added to your cart.`);
  }


}
