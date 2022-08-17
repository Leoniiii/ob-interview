import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { combineLatest, map, mergeMap, switchMap, tap } from 'rxjs';
import { IEventDetail } from 'src/assets/interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  id: string
  eventInfo
  constructor(private cartService: CartService, private apiService: ApiService) { }

  ngOnInit(): void {

    this.cartService.cart$.pipe(tap((cart: any) => {
      return this.apiService.getEventInfo(Object.keys(cart)[0]).pipe(tap(eventInfo => {
        this.eventInfo = eventInfo
      })).subscribe(res => console.log(this.eventInfo))

    },

    )).subscribe(console.log)
    console.log(this.eventInfo)
  }

}
