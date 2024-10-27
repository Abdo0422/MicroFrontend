import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSignal = signal<any[]>(this.getCartItemsFromLocalStorage());

  addToCart(item: any) {
    this.cartItemsSignal.set([...this.cartItemsSignal(), item]);
    this.updateLocalStorage();
  }

  getCartItems() {
    return this.cartItemsSignal();
  }

  removeFromCart(item: any) {
    this.cartItemsSignal.set(this.cartItemsSignal().filter(cartItem => cartItem !== item));
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItemsSignal()));
  }

  private getCartItemsFromLocalStorage() {
    const items = localStorage.getItem('cartItems');
    return items ? JSON.parse(items) : [];
  }
}
