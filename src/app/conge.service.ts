import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders,HttpRequest } from '@angular/common/http';
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

  postManager(taskId,approved,username): Observable<any> {
    return this.http.post(`${baseUrl}/manager/approve/tasks/${taskId}/${approved}/${username}`,{});
  }

  getAllHr(): Observable<any> {
    return this.http.get(`${baseUrl}/RH/tasks`);
  }

  postHr(taskId,approvedRH,username): Observable<any> {
    return this.http.post(`${baseUrl}/RH/approve/tasks/${taskId}/${approvedRH}/${username}`,{});
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

  getRecherchAllAgent(user): Observable<any> {
    return this.http.get(`${baseUrl}/Recherche/${user}`);
  }

  postUploadFile(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${baseUrl}/UploadFile`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);

  }


  login(data:{username: string, password: string, roles: string}): Observable<any> {
    return this.http.post(`${baseUrl}/authenticate`,data,{responseType: 'text' as 'json'});
  }
}
