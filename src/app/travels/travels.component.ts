import { Component, OnInit } from '@angular/core';
import { travelDes } from '../products';


@Component({
  selector: 'travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  offer = travelDes;

  constructor() { }

  ngOnInit(): void {
  }

}
