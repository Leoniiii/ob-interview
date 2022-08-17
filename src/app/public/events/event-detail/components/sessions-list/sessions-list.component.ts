import { CartService } from './../../../../../shared/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IEventDates } from 'src/assets/interfaces';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionsListComponent implements OnInit {
  @Input() eventDates: IEventDates;
  id: string
  constructor(public cartService: CartService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => this.id = id)
  }
  increment(date) {
    this.cartService.increment(this.id, date)
  }

  decrement(date) {
    this.cartService.decrement(this.id, date)

  }
}
