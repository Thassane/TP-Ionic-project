import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../classes/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'https://dry-bastion-69323.herokuapp.com/api/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    let API_URL = `${this.url}`;

    return this.httpClient.get(API_URL)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
   }



   // Ajoute une personne
   addUser(data: User): Observable<any>{
    let API_URL = `${this.url}`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
   }

   // recupere une personne selon son identifiant
   getUser(id :number): Observable<any>{
    let API_URL = `${this.url}/${id}`;
    return this.httpClient.get(API_URL, { headers: this.headers })
    .pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
    // return this.http.get(`${this.url}/getOne/${id}`);
   }

   // Met à jour une personne selon son identifiant
   updateUser(id: number, data: User): Observable<any>{
    let API_URL = `${this.url}/${id}`;
    return this.httpClient.put(API_URL, data)
      .pipe(
        map((res: any) => {
          return console.log("service :" + res);
        }),
        catchError(this.errorMgmt)
      );
  }

  // Supprime une personne selon son identifiant
  deleteUser(id: number): Observable<any> {
    var API_URL = `${this.url}/${id}`;
    return this.httpClient.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

   errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
