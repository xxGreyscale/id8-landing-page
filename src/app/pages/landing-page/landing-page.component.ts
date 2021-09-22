import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HostListener } from '@angular/core';
import { Component, OnInit, SimpleChange } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';
import { Title, Meta } from '@angular/platform-browser';

declare var require: any;
var parser = require('fast-xml-parser');

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],

})
export class LandingPageComponent implements OnInit {

  title = 'Id8 Space'
  apiURL: string = 'https://api.id8.space/api/'
  yPosition: any = 0;

  @HostListener('window:scroll', [`$event`]) onWindowScroll(): void {
    // console.log(window.scrollY);
    this.yPosition = window.scrollY;
 }


socialLinks: any = {
  google: {
        url: this.apiURL + 'login/google',
        target: '_self',
        icon: 'google',
        title: 'Google Plus',
        color: '#DB4437'
      },

  facebook: {
    url: this.apiURL + 'login/facebook',
    target: '_self',
    icon: 'facebook',
    title: 'Facebook',
    color: '#3b5998'
  },

  linkedin: {
    url: this.apiURL + 'login/linkedin',
    target: '_self',
    icon: 'linkedin',
    title: 'Linkedin',
    color: '#4875B4'
  }
}



  carousels: any[] = [
    {
      content: 
      `Take your business idea to the next level and join 
      tailored programs that include access to exclusive development support dedicated workshops and mentors.`,
      image: 'assets/img/lightbulb.png',

    },
    {
      content: 
      `A space connecting people & ideas to business resources; 
      promoting collaboration and knowledge-sharing to support your journey.`,
      image: 'assets/img/paper-on-wall.png'

    },
    {
      content: 
      `A community of emerging entrepreneurs refining their business ideas and developing skills 
      necessary to build a strong bedrock in leading a competitive tech product or business.`,
      image: 'assets/img/VR.png'

    }
  ]


  titles: string[] = [
    `<span class="changing-text create"> Create. </span>`,
    `<span class="changing-text collaborate"> Collaborate. </span>`,
    `<span class="changing-text connect"> Connect. </span>`,
  ]

  titleTimeout = 10000
  carouselTimeout = this.titleTimeout

  currentTitleIndex = 0;
  currentCarouselIndex = 0;
  currentTitle = this.titles[this.currentTitleIndex];
  heading: any;
  changeTitleVar: any;
  changeCarouselVar: any;

  currentCarousel: any;
  
  // news
  user: any;
  news: any[] = [];
  newsWithImg: any[] = [];
  loading: Boolean = false;


  urls: String[] = [
    'https://gene-aapi.herokuapp.com/https://disrupt-africa.com/category/region/east-africa/feed/',
    'https://gene-aapi.herokuapp.com/https://disrupt-africa.com/feed/',
    `https://gene-aapi.herokuapp.com/`
  ]
  
  currentURL: String = this.urls[0];
  currentURLIndex: number = 0;




  // functions for carousel
  changeTitle = () => {
    this.currentTitleIndex = (this.currentTitleIndex + 1)%this.titles.length
    this.changeTitleVar = setTimeout(this.changeTitle, this.titleTimeout);
  }

  changeCarouselContents = () => {
    this.currentCarouselIndex = (this.currentCarouselIndex + 1)%this.carousels.length
    this.changeCarouselVar = setTimeout(this.changeCarouselContents, this.carouselTimeout);
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

  onIndicatorClicked = (index: number) => {
    this.currentCarouselIndex = index
    // reset the title timeout
    this.titleTimeout = 10001
    this.carouselTimeout = this.titleTimeout
  }
  
  ngDoCheck() {

    // check for title timeout change
    if(this.titleTimeout > 10000) {
      this.titleTimeout = 100000
      this.currentCarousel = this.carousels[this.currentCarouselIndex]
    }
    if (this.currentTitleIndex >= 0) {
      this.heading = this.titles[this.currentTitleIndex]
    }

    if(this.currentCarouselIndex >= 0) {
      this.currentCarousel = this.carousels[this.currentCarouselIndex]
    }
    
  }

  constructor(private newService: NewsService, 
              private _http: HttpClient, 
              private titleService: Title, 
              private metaService: Meta) {
    this.getNews()
    this.changeTitle();
    this.changeCarouselContents()
  }
  

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'tehama, computer, funding, hub, space, tanzania, 255, id8 space, id8, Dar es salaam, east africe, tech space, tech, technology'},
      {name: 'description', content: 'A space connecting people & ideas to business resources; promoting collaboration and knowledge-sharing to support your journey.Angular Universal Example'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }
 

  // News methods here

  changeCurrentFeed(index: number) {
    this.currentURLIndex = index;
    this.currentURL = this.urls[index]    
    this.getNews()    
  }

  fetchMeta(news: any[]) {
    const domParser = new DOMParser()
    this.newsWithImg = []
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
        let newsWithImage = {
          news: element,
          image: tmpImg
        }
        this.newsWithImg.push(newsWithImage)
        this.loading = false;
      });
    })
  })
}
  
  getNews() {    
    this.loading = true;
    let tmp = this.newService.getNewsFromServer(this.currentURL)
    tmp.subscribe(response => {
      let xmlParsedText = parser.parse(response);
      this.news = xmlParsedText.rss.channel.item;
      this.news = this.news.slice(0,4)
      
      this.fetchMeta(this.news)
    })
  }

}
