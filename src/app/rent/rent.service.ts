import { Injectable } from '@angular/core';
import { Rent } from './rent.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  url: string = "http://localhost:5555/api/rents";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Rent[]>{
    return this.http.get(`${this.url}`) as Observable<Rent[]>;
  }
  get(id: number): Observable<Rent>{
    return this.http.get(`${this.url}/${id}`) as Observable<Rent>;
  }
  create(rent: Rent): Observable<Rent> {
    return this.http.post(`${this.url}`, rent) as Observable<Rent>;
  }
  change(rent: Rent): Observable<any>{
    return this.http.put(`${this.url}/${rent.id}`, rent) as Observable<any>;
  }
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
  login(username: string, password: string): Observable<Rent>{
    return this.http.get(`${this.url}/${username}/${password}`) as Observable<Rent>;
  }
}
