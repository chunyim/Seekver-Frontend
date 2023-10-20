//problem.service has methods for sending HTTP requests to the Apis

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Problem } from '../models/problem.model';

// const baseUrl = 'http://localhost:8080/api/problems';

const baseUrl = 'https://s-5099.onrender.com/api/problems';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Problem[]> {
    return this.http.get<Problem[]>(baseUrl);
  }

  get(id: any): Observable<Problem> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Problem[]> {
    return this.http.get<Problem[]>(`${baseUrl}?title=${title}`);
  }

  findBySeekerName(userName: any): Observable<Problem[]> {
    return this.http.get<Problem[]>(`${baseUrl}/bySeekerName?seekerName=${userName}`);
  }
}
