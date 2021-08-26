import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleError, HttpErrorHandler } from '../error-handler/http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  id8Url = 'https://staging-api.id8.space/api';
  private handleError: HandleError;
  news: any = []
  

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  //** Get news from the server */ 
  getNewsFromServer(url?: String): Observable<any> {
    let HTTPOptions:Object = {

      headers: new HttpHeaders({
      }),
      responseType: 'text'
   }
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get<string>(`${url}`, HTTPOptions)
                .pipe(
                  catchError(this.handleError('getUser', []))
                )
  }

  getNews(url: String): any[] {
    this.getNewsFromServer(url).subscribe(response => {
      this.news = response['data']
    })
    
    return this.news;
  }


}
