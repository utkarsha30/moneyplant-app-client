import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ExpertData } from '../models/expert.model';
@Injectable({
  providedIn: 'root',
})
export class ExpertService {
  constructor(private http: HttpClient) {}
  getAllExpertsData(): Observable<ExpertData[]> {
    return this.http.get<ExpertData[]>(environment.BASE_URL + '/api/expert/');
  }
}
