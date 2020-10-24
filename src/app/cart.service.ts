import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor() { }
 
  addToCart(buy) {
    this.items.push(buy);
  }
 
  getItems() {
    return this.items;
  }

  getlength(){
    return this.items.length;
  }
 
  clearCart() {
    this.items = [];
    return this.items;
  }
 }