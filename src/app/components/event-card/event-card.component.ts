import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
})
export class EventCardComponent implements OnInit {

  @Input() event
  constructor() { }

  ngOnInit(): void {
  }

}
