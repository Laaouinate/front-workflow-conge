import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



const baseUrl = 'http://localhost:8081'
@Injectable({
  providedIn: 'root'
})
export class CongeService {

  constructor(private http: HttpClient) { }

  create(data): Observable<any> {
    return this.http.post(`${baseUrl}/conger/demande`,data);
  }
}
