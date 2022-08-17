import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IEventDates } from 'src/assets/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailComponent implements OnInit {
  selectedEvent$: Observable<IEventDates>;
  constructor(
    private route: ActivatedRoute, private apiService: ApiService
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.selectedEvent$ = this.apiService.getEventInfo(id)
    })
  }



}
