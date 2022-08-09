import { Observable } from 'rxjs';
import { ApiService } from './../../services/api.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }
  events$: Observable<any>
  ngOnInit(): void {

    this.events$ = this.apiService.getEvents()
  }

  toSession(id) {
    this.router.navigateByUrl('/sessions', { state: id })
  }

  trackByItems(index, item) {
    return item.id
  }


}
