import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Renter } from './renter.class';

@Injectable({
  providedIn: 'root'
})
export class RenterService {

  url: string = "http://localhost:5555/api/renters";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Renter[]>{
    return this.http.get(`${this.url}`) as Observable<Renter[]>;
  }
  get(id: number): Observable<Renter>{
    return this.http.get(`${this.url}/${id}`) as Observable<Renter>;
  }
  create(renter: Renter): Observable<Renter> {
    return this.http.post(`${this.url}`, renter) as Observable<Renter>;
  }
  change(renter: Renter): Observable<any>{
    return this.http.put(`${this.url}/${renter.id}`, renter) as Observable<any>;
  }
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
  login(username: string, password: string): Observable<Renter>{
    return this.http.get(`${this.url}/${username}/${password}`) as Observable<Renter>;
  }
}
