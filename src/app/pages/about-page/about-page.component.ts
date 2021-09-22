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
      {name: 'keywords', content: 'tehama, computer, funding, about id8, tech hub, space, tanzania, 255, id8 space, id8, Dar es salaam, east africe, tech space, tech, technology'},
      {name: 'description', content: `A dynamic and evolving community of diverse visionaries. An environment designed to foster skills and accelerate the success of entrepreneurs. Take your innovative business idea to the next level and join tailored programs that includes access to exclusive development support dedicated workshops and mentors. Id8 aims to accelerate business innovation by building a bridge between world-leading research and the companies that are ambitious for growth in technology enabled markets.`},
      {name: 'robots', content: 'index, follow'}
    ]);
  }


}
