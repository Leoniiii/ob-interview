import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class EventCardComponent implements OnInit {

  @Input() event
  @Output() eventId = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  toSession(id) {
    this.eventId.emit(id)
  }

}
