import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { travelDes } from '../products';

@Component({
  selector: 'travel-booked',
  templateUrl: './travel-booked.component.html',
  styleUrls: ['./travel-booked.component.css']
})
export class TravelBookedComponent implements OnInit {

  buy;

  constructor(public route: ActivatedRoute, public cartService: CartService) { }

 addToCart(buy) {
   this.cartService.addToCart(buy);
 }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.buy = travelDes[+params.get('productId')];
     });
    }
   
   }
