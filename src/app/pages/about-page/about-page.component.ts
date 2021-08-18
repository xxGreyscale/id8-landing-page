import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  user: any;
  constructor(private newService: NewsService) { }

  ngOnInit(): void {
    this.getUser()
    console.log(this.user);
    
  }

  getUser() {
    this.newService.getUser()
                    .subscribe(user => this.user = user)
  }

}
