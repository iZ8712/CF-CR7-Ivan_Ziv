import { Component, OnInit,DoCheck } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  counter :number = 0;
  number;
  constructor(public cartService: CartService) { }

  countClick(){
    this.counter +=4;
  }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.number = this.cartService.getlength();
  }

}
