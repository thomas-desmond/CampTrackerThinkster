import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable, throwError } from 'rxjs';
import { Camp } from './shared/models/camp.model';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CampService {

  private headers: HttpHeaders;
  private baseUrl: string = 'https://localhost:44324/api/camps';

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get(): Observable<Camp[]> {
    return this.httpClient.get<Camp[]>(this.baseUrl, {headers: this.headers});
  }

  public add(payload){
    return this.httpClient.post<Camp[]>(this.baseUrl, payload, {headers: this.headers}).subscribe(res => console.log(res));    
  }

  public remove(payload): Observable<Camp[]> {
    return this.httpClient.delete<Camp[]>(this.baseUrl + '/' + payload.id, {headers: this.headers});
  }

  public update(payload): Observable<Camp[]> {
    return this.httpClient.put<Camp[]>(this.baseUrl + '/' + payload.id, payload, {headers: this.headers});
  }

  handleError(error) {
    console.log("ERROR", error);
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
