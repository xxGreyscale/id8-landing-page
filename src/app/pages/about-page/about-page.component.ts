import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
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

  title = 'About Id8 Space'

  constructor(private titleService: Title, 
              private metaService: Meta) {
   }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'hub, space, tanzania, 255, id8 space, id8, Dar es salaam, east africe, tech space, tech, technology'},
      {name: 'description', content: 'A space connecting people & ideas to business resources; promoting collaboration and knowledge-sharing to support your journey.Angular Universal Example'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }


}
