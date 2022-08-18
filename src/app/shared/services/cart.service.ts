import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class CartService {
  cart$: BehaviorSubject<any> = new BehaviorSubject({});
  private cart: any = {};

  increment({ title, eventId }, date: string) {
    this.cart[eventId] = {
      ...this.cart[eventId],
      title,
      dates: {
        ...this.cart[eventId]?.dates,
        [date]: !this.cart[eventId]?.dates?.[date] ? 1 : ++this.cart[eventId].dates[date],
      }
    };

    // if (!this.cart[eventId]) {
    //   this.cart[eventId] = {};
    // }

    // if (!this.cart[eventId][date]) {
    //   this.cart[eventId][date] = 1;
    // } else {
    //   ++this.cart[eventId][date];
    // }

    this.updateCart();
  }
  decrement(eventId: string, date: string) {
    this.cart[eventId] = {
      ...this.cart[eventId],
      dates: {
        ...this.cart[eventId]?.dates,
        [date]: this.cart[eventId]?.dates?.[date] > 0 ? --this.cart[eventId].dates[date] : 0,
      }
    };
    // if (!this.cart[eventId]) {
    //   this.cart[eventId] = {};
    // }

    // if (this.cart[eventId][date] > 0) {
    //   --this.cart[eventId][date];
    // } else {
    //   this.cart[eventId][date] = 0;
    // }
    this.updateCart();
  }
  reset(eventId: string) {
    // delete this.cart[eventId]?.dates?.[date];
    delete this.cart[eventId];
    this.updateCart();
  }

  private updateCart() {
    this.cart$.next(this.cart);
  }
}
