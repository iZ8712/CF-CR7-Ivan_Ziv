import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
  
export class CartComponent implements OnInit {
  items;
  form;
 
  constructor(public cartService: CartService, public formBuilder: FormBuilder, public route: ActivatedRoute) {
          this.form = this.formBuilder.group({
            name: '',
            email: '',
            credit: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    
  }

  onSubmit(data) {
    window.alert('Your order has been booked');
    this.items = this.cartService.clearCart();
    this.form.reset();
  }
 
 }