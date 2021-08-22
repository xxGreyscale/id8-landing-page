<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { XmlParser } from '@angular/compiler';
=======
import { HttpClient } from '@angular/common/http';
>>>>>>> new-changes
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';
import { UserService } from 'src/app/services/user/user.service';
import * as xml2js from 'xml2js';


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
<<<<<<< HEAD
  xmlItems: any;
  
  constructor(private newService: NewsService, private userService: UserService, private _http: HttpClient) { }

  ngOnInit(): void {
    // this.getNews()
    // this.userService.getHeader()
    this.getRssXML()
=======
  constructor(private newService: NewsService, private userService: UserService, private _http: HttpClient) { }

  ngOnInit(): void {
    this.getNews()    
>>>>>>> new-changes
  }
  
  getNews() {
    let tmp = this.newService.getNewsFromServer()
    tmp.subscribe(response => {
      
      let xmlParsedText = parser.parse(response);
      this.news = xmlParsedText.rss.channel.item;
      this.news = this.news.slice(0,4)
      console.log(this.news);
      
      
    })
  }

  getRssXML() {
    this._http.get('https://rss.app/feeds/seNz2zzMDf1JD9Cv.xml',  
      {  
        headers: new HttpHeaders()  
          .set('Content-Type', 'text/xml')  
          .append('Access-Control-Allow-Methods', 'GET')  
          .append('Access-Control-Allow-Origin', '*')  
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),  
        responseType: 'text'  
      })  
      .subscribe((data) => {  
        this.parseXML(data)  
          .then((data) => {  
            this.xmlItems = data;  
          });  
      });  
  }

  parseXML(data: any) {  
    return new Promise(resolve => {  
      var k: string | number,  
        arr: any[] = [],  

        parser = new xml2js.Parser(  
          {  
            trim: true,  
            explicitArray: true  
          });  
      parser.parseString(data, function (err: any, result: any) {  
        var obj = result.Employee;  
        for (k in obj.emp) {  
          var item = obj.emp[k];  
          arr.push({  
            id: item.id[0],  
            name: item.name[0],  
            gender: item.gender[0],  
            mobile: item.mobile[0]  
          });  
        }  
        resolve(arr);  
      });  
    });  
  }

}
