import { Observable } from 'rxjs';
import { ApiService } from '../../../shared/services/api.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEventDetail } from 'src/assets/interfaces';

@Component({
  selector: 'app-events',
  templateUrl: './events-listings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsListingComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) { }
  events$: Observable<IEventDetail[]>;
  ngOnInit(): void {
    this.events$ = this.apiService.getEvents();
  }

  // toSession(event) {
  //   // this.router.navigateByUrl('/sessions', { state: event });
  //   // this.router.navigate(['sessions', event.id]);
  // }

  trackByItems(index, item) {
    return item.id;
  }
}
