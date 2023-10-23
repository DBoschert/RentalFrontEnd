import { Injectable } from '@angular/core';
import { LandLord } from './landlord.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LandlordService {

  url: string = "http://localhost:5555/api/landlords";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<LandLord[]>{
    return this.http.get(`${this.url}`) as Observable<LandLord[]>;
  }
  get(id: number): Observable<LandLord>{
    return this.http.get(`${this.url}/${id}`) as Observable<LandLord>;
  }
  create(landlord: LandLord): Observable<LandLord> {
    return this.http.post(`${this.url}`, landlord) as Observable<LandLord>;
  }
  change(landlord: LandLord): Observable<any>{
    return this.http.put(`${this.url}/${landlord.id}`, landlord) as Observable<any>;
  }
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
  login(username: string, password: string): Observable<LandLord>{
    return this.http.get(`${this.url}/${username}/${password}`) as Observable<LandLord>;
  }


}
