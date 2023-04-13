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
}
