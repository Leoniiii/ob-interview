import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EventDates, EventDetail } from 'src/assets/interfaces';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailComponent implements OnInit {
  selectedEvent: EventDates;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    // this.selectedEvent = this.router.getCurrentNavigation()?.extras?.state;
    // console.log('selectedEvent', this.selectedEvent);
  }

  ngOnInit(): void {
    this.getSession();
  }

  getSession() {
    const id = this.route.snapshot.paramMap.get('id');
    this.apiService.getSession(id).subscribe({
      next: (res) => {
        this.selectedEvent = res;
        console.log(this.selectedEvent);
      },
    });
  }

  goBack(): void {
    this.location.back();
  }
}
