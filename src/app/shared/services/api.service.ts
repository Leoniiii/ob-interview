import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { IEventDates, IEventDetail } from 'src/app/shared/interfaces/events.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<IEventDetail[]>('../../assets/data/events.json');
  }

  getSession(id: string) {
    return this.http
      .get<IEventDates>(`../../assets/data/event-info-${id}.json`)
      .pipe(catchError((error) => this.handleError(error)));
  }

  handleError(error) {
    console.error(error);
    return of(null);
  }
}
