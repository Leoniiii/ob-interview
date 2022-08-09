import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    eventId
    constructor(private http: HttpClient) { }

    getEvents(): Observable<any> {
        return this.http.get('../../assets/data/events.json')
    }

    getSession(id): Observable<any> {
        return this.http.get(`../../assets/data/event-info-${id}.json`)
    }
}