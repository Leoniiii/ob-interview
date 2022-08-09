import { Observable } from 'rxjs';
import { ApiService } from './../../services/api.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  events$: Observable<any>
  ngOnInit(): void {

    this.events$ = this.apiService.getEvents()
  }

  tarea = { name: 'clean' }

}
