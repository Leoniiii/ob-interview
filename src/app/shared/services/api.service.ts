import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { EventDates, EventDetail } from 'src/assets/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventDetail[]> {
    return this.http.get<EventDetail[]>('../../assets/data/events.json');
  }

  getSession(id): Observable<EventDates> {
    return this.http
      .get(`../../assets/data/event-info-${id}.json`)
      .pipe(catchError((error) => this.handleError(error)));
  }

  handleError(error) {
    console.error(error);
    return of(error);
  }
}
