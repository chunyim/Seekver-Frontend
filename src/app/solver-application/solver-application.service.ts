import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from '../models/application';

// const baseUrl = 'http://localhost:8080/api/applications';

const baseUrl = 'https://s-5099.onrender.com/api/applications';

@Injectable({
  providedIn: 'root',
})
export class SolverApplicationService {
  constructor(private http: HttpClient) {}

  // retrieveApplication(application:any): Observable<any> {
  //   return this.http.post(baseUrl, application);
  // }

  makeApplication(application: any): Observable<any> {
    return this.http.post(baseUrl, application);
  }

  retrieveApplicationByProblemId(problemId: any): Observable<any> {
    return this.http.get<Application[]>(`${baseUrl}/problemId?problemId=${problemId}`);
  }

  retrieveApplicationByUserName(userName: any): Observable<any> {
    return this.http.get<Application[]>(`${baseUrl}/userName?userName=${userName}`);
  }


}
