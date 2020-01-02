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
  // public campData$: Observable<Camp[]>;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get(): Observable<any[]> {
    // this.campData$ = this.http.get(this.campApiEndpoint, {headers: this.headers})
    return this.httpClient.get<any[]>(this.baseUrl, {headers: this.headers});
    // .pipe(
    //   retry(1),
    //   catchError(this.handleError)
    // );
  }

  public add(payload) {
    console.log("in the add", payload);

    return this.httpClient.post(this.baseUrl, payload, {headers: this.headers}).subscribe(res => console.log(res));    
    // .pipe(
    //   retry(1),
    //   catchError(this.handleError)
    // );;
  }

  public remove(payload) {
    return this.httpClient.delete(this.baseUrl + '/' + payload.id, {headers: this.headers});
  }

  public update(payload) {
    return this.httpClient.put(this.baseUrl + '/' + payload.id, payload, {headers: this.headers});
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
