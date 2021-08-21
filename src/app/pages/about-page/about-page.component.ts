import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';
import { UserService } from 'src/app/services/user/user.service';

declare var require: any;
var parser = require('fast-xml-parser');


@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  user: any;
  news: any[] = [];
  constructor(private newService: NewsService, private userService: UserService, private _http: HttpClient) { }

  ngOnInit(): void {
    this.getNews()    
  }
  
  getNews() {
    let tmp = this.newService.getNewsFromServer()
    tmp.subscribe(response => {
      // this.news = response['data'];
      // this.news = this.news.slice(0,4)
      console.log(response);
      
    })
  }

}
