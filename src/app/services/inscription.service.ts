import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class InscriptionService {



  constructor(private http:HttpClient) { }

  inscrire(bricoleur): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/signup', bricoleur, httpOptions);
  }
}
