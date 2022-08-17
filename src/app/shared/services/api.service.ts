import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { IEventDates, IEventDetail } from 'src/assets/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getEvents(): Observable<IEventDetail[]> {
    return this.http.get<IEventDetail[]>('../../assets/data/events.json');
  }

  getEventInfo(id): Observable<IEventDates> {
    return this.http
      .get(`../../assets/data/event-info-${id}.json`)
      .pipe(catchError((error) => this.handleError(error)));
  }

  handleError(error) {
    console.error(error);
    return of(error);
  }
}
