import { Component, OnInit, SimpleChange } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  carousels: any[] = [
    {
      content: 
      `Take you innovative business idea to the next level and join tailored programs
       that include access to exclusive development support dedicated workshops and mentors`,
      image: 'assets/img/kid.png'

    },
    {
      content: 
      `A space connecting people & ideas to business resources;
       promoting collaboration and sharing of collective knowledge to support your journey.`,
      image: 'assets/img/kid.png'

    },
    {
      content: 
      `A space connecting people & ideas to business resources;
       promoting collaboration and sharing of collective knowledge to support your journey.`,
      image: 'assets/img/kid.png'

    }
  ]


  titles: string[] = [
    `<span class="changing-text"> Create. </span>`,
    `<span class="changing-text"> Connect. </span>`,
    `<span class="changing-text"> Collaborate. </span>`
  ]

  titleTimeout = 3000
  carouselTimeout = this.titleTimeout*4

  currentTitleIndex = 0;
  currentCarouselIndex = 0;
  currentTitle = this.titles[this.currentTitleIndex];
  heading: any;

  currentCarousel: any; 


  // function
  changeTitle = () => {
    this.currentTitleIndex = (this.currentTitleIndex + 1)%this.titles.length
    setTimeout(this.changeTitle, this.titleTimeout);
  }

  changeCarouselContents = () => {
    this.currentCarouselIndex = (this.currentCarouselIndex + 1)%this.carousels.length
    setTimeout(this.changeCarouselContents, this.carouselTimeout);
  }
  
  ngDoCheck() {
    if (this.currentTitleIndex >= 0) {
      this.heading = this.titles[this.currentTitleIndex]
    }

    if(this.currentCarouselIndex >= 0) {
      this.currentCarousel = this.carousels[this.currentCarouselIndex]
    }
    
  }

  constructor() {
    this.changeTitle();
    this.changeCarouselContents()
  }
  
  ngOnInit(): void {
   
    // this.heading = new BehaviorSubject(this.titles[this.currentTitleIndex]);
    // this.currentCarousel = new BehaviorSubject(this.carousels[this.currentCarouselIndex])
  }

}
