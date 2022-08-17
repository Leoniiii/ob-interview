import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { EventDates } from 'src/assets/interfaces';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionsListComponent implements OnInit {
  @Input() eventDates: EventDates;
  constructor() {}

  ngOnInit(): void {
    console.log(this.eventDates)
  }
}
