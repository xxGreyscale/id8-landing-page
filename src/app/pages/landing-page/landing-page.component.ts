import { HostListener } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit, SimpleChange } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],

})
export class LandingPageComponent implements OnInit {

  yPosition: any = 0;

  @HostListener('window:scroll', [`$event`]) onWindowScroll(): void {
    // console.log(window.scrollY);
    this.yPosition = window.scrollY;
 }


  carousels: any[] = [
    {
      content: 
      `Take you innovative business idea to the next level and join tailored programs
       that include access to exclusive development support dedicated workshops and mentors`,
      image: 'assets/img/kid.png',

    },
    {
      content: 
      `A space connecting people & ideas to business resources;
       promoting collaboration and sharing of collective knowledge to support your journey.`,
      image: 'assets/img/ideating.png'

    },
    {
      content: 
      `A community of experts, seasoned and emerging entrepreneurs refining their business ideas 
      and developing skills necessary to build a strong bedrock in leading a competitive tech product or business.`,
      image: 'assets/img/VR.png'

    }
  ]


  titles: string[] = [
    `<span class="changing-text create"> Create. </span>`,
    `<span class="changing-text collaborate"> Collaborate. </span>`,
    `<span class="changing-text connect"> Connect. </span>`,
  ]

  titleTimeout = 5000
  carouselTimeout = this.titleTimeout

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

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }
  
  ngDoCheck() {
    if (this.currentTitleIndex >= 0) {
      this.heading = this.titles[this.currentTitleIndex]
      console.log(this.heading);
      
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
