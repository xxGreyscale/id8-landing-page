import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleError, HttpErrorHandler } from '../error-handler/http-error-handler.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8'
  })
};

@Injectable({
  providedIn: 'root'
})


export class UserService {
  id8Url = 'https://staging-api.id8.space/api';
  user = {
    username: 'community@id8.space',
    password: 'password@1',
    provider: 'startups',
  }

  private handleError: HandleError;
  private authenticationObject: any;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  //** Get news from the server */ 
  authenitcate(): Observable<any> {
    return this.http.post<any[]>(`${this.id8Url}/login`, this.user)
                .pipe(
                  catchError(this.handleError('authenticate', []))
                )
  }

  authentication(): any {
    this.authenitcate().subscribe(authentication => {
      this.authenticationObject = authentication;
      if(!localStorage.getItem('authentication')) {
        localStorage.setItem('authentication', JSON.stringify(authentication))
      }

    })
  }

  getHeader(): Object {
    let authorizationObject: any;
    let headerOptions
    if(localStorage.getItem('authentication')) {
      authorizationObject = localStorage.getItem('authentication')
      authorizationObject = JSON.parse(authorizationObject)
    }
    headerOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${authorizationObject.access_token}`,
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
      })
    }

    return headerOptions;
  }

  getUserAcc(): Observable<any> {
    return this.http.get<any>(`${this.id8Url}/user?page=1`, httpOptions)
                .pipe(
                  catchError(this.handleError('getUser', []))
                )
  }
}
