import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/manager/tasks`);
  }

  postManager(taskId,approved): Observable<any> {
    return this.http.post(`${baseUrl}/manager/approve/tasks/${taskId}/${approved}`,{});
  }

  getAllHr(): Observable<any> {
    return this.http.get(`${baseUrl}/RH/tasks`);
  }

  postHr(taskId,approvedRH): Observable<any> {
    return this.http.post(`${baseUrl}/RH/approve/tasks/${taskId}/${approvedRH}`,{});
  }

  process(processId): Observable<any> {
    return this.http.get(`${baseUrl}/process/${processId}`);
  }

  getRecherche(valuers): Observable<any> {
    return this.http.get(`${baseUrl}/Recherche/${valuers}`);
  }

  getRechercheAll(): Observable<any> {
    return this.http.get(`${baseUrl}/Recherche`);
  }


  login(data:{username: string, password: string, roles: string}): Observable<any> {
    return this.http.post(`${baseUrl}/authenticate`,data,{responseType: 'text' as 'json'});
  }
}
