import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEventDates } from 'src/app/shared/interfaces/events.interface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionsListComponent {
  @Input() eventDates: IEventDates;
  id: string;

  constructor(
    public cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.id = id;
    });
  }
}
