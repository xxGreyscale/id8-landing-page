import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleError, HttpErrorHandler } from '../error-handler/http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'Bearer 25ee84ee23888fda918ec72206742811c64b2df099773f966975dafe1b32b31b5',
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8'
  })
};

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  mediumAPI = 'https://api.medium.com';

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  //** Get news from the server */ 
  getUser(): Observable<any[]> {
    return this.http.get<any[]>(`${this.mediumAPI}/v1/me`, httpOptions)
                .pipe(
                  catchError(this.handleError('getUser', []))
                )
  }
}
