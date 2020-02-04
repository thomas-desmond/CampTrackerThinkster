import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable, throwError, BehaviorSubject } from 'rxjs';
import { Camp } from './shared/models/camp.model';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CampService {

  private headers: HttpHeaders;
  private baseUrl: string = 'https://localhost:44324/api/camps';

  public campDataBehaviorSubject = new BehaviorSubject<Camp[]>([]);

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.get();
  }

  public get() {
    this.httpClient.get<Camp[]>(this.baseUrl, {headers: this.headers}).subscribe( (responseData) => {
      this.campDataBehaviorSubject.next(responseData);
      return this.campDataBehaviorSubject.asObservable();      
    });
  }

  public add(payload: Camp) {
    this.httpClient.post<Camp[]>(this.baseUrl, payload, {headers: this.headers}).subscribe((responseData) => {
      this.campDataBehaviorSubject.next(this.campDataBehaviorSubject.getValue().concat(responseData)); 
    })
  }

  public remove(idToDelete: number) {
    this.httpClient.delete<Camp[]>(this.baseUrl + '/' + idToDelete, {headers: this.headers}).subscribe( () => {
      let newCampList = this.campDataBehaviorSubject.getValue().filter(camp => camp.id !== idToDelete);
      this.campDataBehaviorSubject.next(newCampList);
    });
  }

  public update(payload: Camp){
    return this.httpClient.put<Camp>(this.baseUrl + '/' + payload.id, payload, {headers: this.headers}).subscribe(response => {
      let data = this.campDataBehaviorSubject.getValue();
      const index = data.findIndex(camp => camp.id === payload.id);
      data[index] = payload;

      this.campDataBehaviorSubject.next(data);
    },
      (error) => {
        console.log('Error: ', error.message);
    });
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
