import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ExpertData } from '../models/expert.model';
import { LocationData } from '../models/locations.model';
@Injectable({
  providedIn: 'root',
})
export class ExpertService {
  constructor(private http: HttpClient) {}
  getAllExpertsData(): Observable<ExpertData[]> {
    console.log(environment.BASE_URL);
    return this.http.get<ExpertData[]>(environment.BASE_URL + '/api/expert/');
  }
  connectNow(expertId: string, data: object): Observable<ExpertData> {
    return this.http.patch<ExpertData>(
      `${environment.BASE_URL}/api/expert/connectnow/${expertId}`,
      data
    );
  }
  getAllLocations(): Observable<LocationData[]> {
    return this.http.get<LocationData[]>(
      environment.BASE_URL + '/api/expert/locations'
    );
  }
  getAllSpecializations(): Observable<ExpertData['specialization'][]> {
    return this.http.get<ExpertData['specialization'][]>(
      environment.BASE_URL + '/api/expert/specializations'
    );
  }
  filterExperts(
    city: string,
    state: string,
    specialization: string
  ): Observable<ExpertData[]> {
    let params;
    if (!city || !state) {
      console.log('in city loop');
      params = new HttpParams()
        .set('action', 'filter')
        .set('specialization', specialization);
    } else if (!specialization) {
      params = new HttpParams()
        .set('action', 'filter')
        .set('city', city)
        .set('state', state);
    } else {
      params = new HttpParams()
        .set('action', 'filter')
        .set('city', city)
        .set('state', state)
        .set('specialization', specialization);
    }

    return this.http.get<ExpertData[]>(environment.BASE_URL + '/api/expert/', {
      params,
    });
  }
}
