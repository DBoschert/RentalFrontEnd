import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from './feedback.class';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  url: string = "http://localhost:5555/api/feedbacks";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Feedback[]>{
    return this.http.get(`${this.url}`) as Observable<Feedback[]>;
  }
  get(id: number): Observable<Feedback>{
    return this.http.get(`${this.url}/${id}`) as Observable<Feedback>;
  }
  create(feedback: Feedback): Observable<Feedback> {
    return this.http.post(`${this.url}`, feedback) as Observable<Feedback>;
  }
  change(feedback: Feedback): Observable<any>{
    return this.http.put(`${this.url}/${feedback.id}`, feedback) as Observable<any>;
  }
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
  login(username: string, password: string): Observable<Feedback>{
    return this.http.get(`${this.url}/${username}/${password}`) as Observable<Feedback>;
  }
  
}
