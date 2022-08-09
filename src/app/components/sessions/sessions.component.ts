import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SessionsComponent implements OnInit {
  selectedEventId
  constructor(private apiService: ApiService, private router: Router) {
    this.selectedEventId = this.router.getCurrentNavigation()?.extras?.state

  }

  ngOnInit(): void {
    this.apiService.getSession(this.selectedEventId).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    )
  }

}
