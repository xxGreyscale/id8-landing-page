import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NewsService } from 'src/app/services/news/news.service';
import { UserService } from 'src/app/services/user/user.service';

declare var require: any;
var parser = require('fast-xml-parser');
// const getMetaData = require('metadata-scraper')



@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  user: any;
  news: any[] = [];
  newsImgs: any[] = [];

  urls: String[] = [
    'https://gene-aapi.herokuapp.com/https://disrupt-africa.com/category/region/east-africa/feed/',
    `https://gene-aapi.herokuapp.com/`
  ]
  currentURL: String = this.urls[0];
  constructor(private newService: NewsService, 
    private domSanitizer: DomSanitizer, private _http: HttpClient) {
    this.getNews()    
   }

  ngOnInit(): void {
  }

  fetchMeta(news: any[]) {
    const domParser = new DOMParser()
    let HTTPOptions:Object = {

      headers: new HttpHeaders({
      }),
      responseType: 'text'
   }

    news.forEach(element => {
      this._http.get(`https://gene-aapi.herokuapp.com/${element.guid}`, HTTPOptions).subscribe(response => {
      let  responseString: any = domParser.parseFromString(response.toString(), 'text/html')
      let metaImgs: any[] = responseString.head.querySelectorAll("meta[property='og:image']")
      metaImgs.forEach(tag => {
        let tmpImg = tag.getAttribute("content");
        this.newsImgs.push(tmpImg)
      });
    })
  })
}
  
  getNews() {    
    let tmp = this.newService.getNewsFromServer(this.currentURL)
    tmp.subscribe(response => {
      let xmlParsedText = parser.parse(response);
      this.news = xmlParsedText.rss.channel.item;
      this.news = this.news.slice(0,4)
      this.fetchMeta(this.news)
    })
  }

}
