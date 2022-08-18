import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
id: string
eventInfo;
readonly cart$ = this.cartService.cart$;
  constructor(public cartService: CartService, private apiService: ApiService) { }

  ngOnInit(): void {
// this.cartService.cart$
  }
}
