import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'in-cart',
  templateUrl: './in-cart.component.html',
  styleUrls: ['./in-cart.component.css']
})
export class InCartComponent implements OnInit {
  items;

  constructor(private cartService: CartService) { 
    
  }

  ngOnInit(): void {
    
  }

  ngDoCheck(){
    this.items = this.cartService.getItems();
  }

  onSubmit() {
    this.items = this.cartService.clearCart();
  }

}
