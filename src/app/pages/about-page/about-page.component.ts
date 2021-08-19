import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  user: any;
  news: any[] = [];
  constructor(private newService: NewsService, private userService: UserService) { }

  ngOnInit(): void {
    this.getNews()
    this.userService.getHeader()
  }
  
  getNews() {
    let tmp = this.newService.getNewsFromServer(this.userService.getHeader())
    tmp.subscribe(response => {
      this.news = response['data'];
      this.news = this.news.slice(0,4)
    })
  }

}
