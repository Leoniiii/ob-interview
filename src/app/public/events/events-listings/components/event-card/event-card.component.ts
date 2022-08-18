import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IEventDetail } from 'src/app/shared/interfaces/events.interface';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCardComponent {
  @Input() event: IEventDetail;
}
