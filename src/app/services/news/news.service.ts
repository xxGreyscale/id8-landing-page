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
  getNewsFromServer(headerOptions?: Object): Observable<any> {
    let HTTPOptions:Object = {

      headers: new HttpHeaders({
      }),
      responseType: 'text'
   }
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get<string>('https://rss.app/feeds/seNz2zzMDf1JD9Cv.xml', HTTPOptions)
                .pipe(
                  catchError(this.handleError('getUser', []))
                )
  }

  getNews(headerOptions?: Object): any[] {
    this.getNewsFromServer(headerOptions).subscribe(response => {
      this.news = response['data']
    })
    
    return this.news;
  }


}
